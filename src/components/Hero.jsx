import { Link } from 'react-router-dom';
import { heroStats } from '../data/marketplaceData';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">Marketplace operations</span>
        <h1>Run inventory, timed auctions, and seller intake from one interface.</h1>
        <p className="hero-text">
          This front end now supports inventory browsing, live auction actions, and
          submission capture with a cleaner visual system and media-backed layouts.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#inventory">
            Browse inventory
          </a>
          <a className="button secondary" href="#seller-form">
            Start selling
          </a>
          <Link className="button tertiary" to="/auctions">
            Open auctions
          </Link>
        </div>
        <div className="hero-stats">
          {heroStats.map((item) => (
            <div className="hero-stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <aside className="hero-media">
        <img
          alt="Luxury performance car under showroom lighting"
          src="/assets/aston-showroom.jpg"
        />
        <div className="hero-panel">
          <span>Featured this hour</span>
          <strong>2024 Aston Martin Vantage</strong>
          <p>Reserve auction with verified condition notes and same-day transport quotes.</p>
        </div>
      </aside>
    </section>
  );
}
