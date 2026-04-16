import { useEffect, useMemo, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { liveAuctions } from '../data/marketplaceData';

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

const formatRemaining = (targetDate, now) => {
  const delta = new Date(targetDate).getTime() - now.getTime();

  if (delta <= 0) {
    return 'Closed';
  }

  const totalMinutes = Math.floor(delta / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}m`;
};

export function AuctionPage() {
  const [now, setNow] = useState(new Date());
  const [bids, setBids] = useState(() =>
    Object.fromEntries(liveAuctions.map((auction) => [auction.id, auction.currentBid])),
  );
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  const lanes = useMemo(() => ['All', ...new Set(liveAuctions.map((auction) => auction.lane))], []);
  const visibleAuctions = useMemo(
    () => (filter === 'All' ? liveAuctions : liveAuctions.filter((auction) => auction.lane === filter)),
    [filter],
  );

  const placeBid = (auctionId, amount) => {
    setBids((current) => ({ ...current, [auctionId]: current[auctionId] + amount }));
  };

  return (
    <main className="shell">
      <Header />
      <section className="page-hero narrow">
        <div>
          <span className="eyebrow">Timed bidding</span>
          <h1>Live auctions</h1>
          <p className="hero-text">
            Each lane now has working countdown state and bid-step controls so the page behaves
            like an actual auction desk instead of a placeholder.
          </p>
        </div>
        <div className="segmented-control" aria-label="Auction lanes">
          {lanes.map((lane) => (
            <button
              key={lane}
              className={`segment${filter === lane ? ' is-active' : ''}`}
              onClick={() => setFilter(lane)}
              type="button"
            >
              {lane}
            </button>
          ))}
        </div>
      </section>

      <section className="auction-grid">
        {visibleAuctions.map((auction) => (
          <article className="auction-card" key={auction.id}>
            <img alt={auction.title} className="auction-image" src={auction.image} />
            <div className="auction-body">
              <div className="auction-meta">
                <span className="pill">{auction.lane}</span>
                <span className={`status-pill${auction.reserveMet ? ' good' : ''}`}>
                  {auction.reserveMet ? 'Reserve met' : 'Reserve pending'}
                </span>
              </div>
              <h2>{auction.title}</h2>
              <p className="muted">Seller: {auction.seller}</p>
              <div className="auction-metrics">
                <div>
                  <span>Current bid</span>
                  <strong>{formatCurrency(bids[auction.id])}</strong>
                </div>
                <div>
                  <span>Time left</span>
                  <strong>{formatRemaining(auction.endsAt, now)}</strong>
                </div>
              </div>
              <div className="bid-actions">
                <button className="button secondary" onClick={() => placeBid(auction.id, auction.bidStep)} type="button">
                  +{formatCurrency(auction.bidStep)}
                </button>
                <button className="button primary" onClick={() => placeBid(auction.id, auction.bidStep * 2)} type="button">
                  Fast bid
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
