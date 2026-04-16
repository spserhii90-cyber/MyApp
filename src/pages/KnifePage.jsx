import { useMemo, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { knifeCollection } from '../data/marketplaceData';

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

export function KnifePage() {
  const [filter, setFilter] = useState('All');
  const [watchlist, setWatchlist] = useState([]);

  const categories = useMemo(() => ['All', ...new Set(knifeCollection.map((item) => item.category))], []);
  const visibleItems = useMemo(
    () => (filter === 'All' ? knifeCollection : knifeCollection.filter((item) => item.category === filter)),
    [filter],
  );

  const toggleWatch = (itemId) => {
    setWatchlist((current) =>
      current.includes(itemId) ? current.filter((id) => id !== itemId) : [...current, itemId],
    );
  };

  return (
    <main className="shell">
      <Header />
      <section className="page-hero narrow">
        <div>
          <span className="eyebrow">Collector inventory</span>
          <h1>Knife vault</h1>
          <p className="hero-text">
            The knife route now has a usable catalog with category filters and watchlist state.
          </p>
        </div>
        <div className="segmented-control" aria-label="Knife categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`segment${filter === category ? ' is-active' : ''}`}
              onClick={() => setFilter(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="listing-grid">
        {visibleItems.map((item) => {
          const isWatched = watchlist.includes(item.id);

          return (
            <article className="listing-card knife-card" key={item.id}>
              <img alt={item.name} className="listing-image" src={item.image} />
              <div className="listing-body">
                <div className="listing-topline">
                  <span className="pill">{item.category}</span>
                  <button
                    aria-pressed={isWatched}
                    className={`icon-button${isWatched ? ' is-active' : ''}`}
                    onClick={() => toggleWatch(item.id)}
                    type="button"
                  >
                    {isWatched ? 'Watching' : 'Watch'}
                  </button>
                </div>
                <h2>{item.name}</h2>
                <p>{item.note}</p>
                <div className="listing-specs">
                  <span>{item.steel}</span>
                  <span>{item.handle}</span>
                </div>
                <div className="listing-footer">
                  <strong>{formatCurrency(item.price)}</strong>
                  <span className="muted">Ready for reserve listing</span>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <Footer />
    </main>
  );
}
