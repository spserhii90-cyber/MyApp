import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredCars, liveAuctions } from '../data/marketplaceData';

const categories = ['All', 'Sedan', 'SUV', 'Performance'];

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

export function Content() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [savedCars, setSavedCars] = useState([]);
  const [sellerForm, setSellerForm] = useState({
    sellerName: '',
    email: '',
    vehicle: '',
    reserve: '',
  });
  const [submissionMessage, setSubmissionMessage] = useState('');

  const visibleCars = useMemo(() => {
    if (activeCategory === 'All') {
      return featuredCars;
    }

    return featuredCars.filter((car) => car.category === activeCategory);
  }, [activeCategory]);

  const toggleSavedCar = (carId) => {
    setSavedCars((current) =>
      current.includes(carId) ? current.filter((id) => id !== carId) : [...current, carId],
    );
  };

  const handleSellerInput = (event) => {
    const { name, value } = event.target;
    setSellerForm((current) => ({ ...current, [name]: value }));
  };

  const handleSellerSubmit = (event) => {
    event.preventDefault();
    setSubmissionMessage(
      `${sellerForm.vehicle || 'Vehicle'} submitted for review. Intake will contact ${sellerForm.email || 'you'} shortly.`,
    );
    setSellerForm({ sellerName: '', email: '', vehicle: '', reserve: '' });
  };

  return (
    <>
      <section className="section-header" id="inventory">
        <div>
          <span className="eyebrow">Inventory</span>
          <h2>Browse verified vehicles</h2>
        </div>
        <div className="segmented-control" aria-label="Inventory categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`segment${activeCategory === category ? ' is-active' : ''}`}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="listing-grid">
        {visibleCars.map((car) => {
          const isSaved = savedCars.includes(car.id);

          return (
            <article className="listing-card" key={car.id}>
              <img alt={car.name} className="listing-image" src={car.image} />
              <div className="listing-body">
                <div className="listing-topline">
                  <span className="pill">{car.category}</span>
                  <button
                    aria-pressed={isSaved}
                    className={`icon-button${isSaved ? ' is-active' : ''}`}
                    onClick={() => toggleSavedCar(car.id)}
                    type="button"
                  >
                    {isSaved ? 'Saved' : 'Save'}
                  </button>
                </div>
                <h3>{car.name}</h3>
                <p>{car.summary}</p>
                <div className="listing-specs">
                  <span>{car.mileage.toLocaleString()} mi</span>
                  <span>{car.transmission}</span>
                  <span>{car.fuel}</span>
                </div>
                <div className="listing-footer">
                  <div>
                    <strong>{formatCurrency(car.price)}</strong>
                    <small>{car.location}</small>
                  </div>
                  <Link className="text-link" to="/auctions">
                    Bid options
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="home-layout">
        <article className="info-panel">
          <div className="section-header compact" id="auctions">
            <div>
              <span className="eyebrow">Auction desk</span>
              <h2>Live lanes right now</h2>
            </div>
            <Link className="text-link" to="/auctions">
              View all
            </Link>
          </div>

          <div className="auction-preview-list">
            {liveAuctions.map((auction) => (
              <div className="auction-preview" key={auction.id}>
                <img alt={auction.title} src={auction.image} />
                <div>
                  <strong>{auction.title}</strong>
                  <span>{auction.lane}</span>
                </div>
                <strong>{formatCurrency(auction.currentBid)}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="info-panel seller-panel" id="seller-form">
          <div className="section-header compact">
            <div>
              <span className="eyebrow">Seller intake</span>
              <h2>Submit a vehicle</h2>
            </div>
          </div>

          <form className="seller-form" onSubmit={handleSellerSubmit}>
            <label>
              Seller name
              <input
                name="sellerName"
                onChange={handleSellerInput}
                placeholder="Jordan Lee"
                type="text"
                value={sellerForm.sellerName}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                onChange={handleSellerInput}
                placeholder="seller@example.com"
                type="email"
                value={sellerForm.email}
              />
            </label>
            <label>
              Vehicle
              <input
                name="vehicle"
                onChange={handleSellerInput}
                placeholder="2022 Porsche 911 Carrera"
                type="text"
                value={sellerForm.vehicle}
              />
            </label>
            <label>
              Target reserve
              <input
                name="reserve"
                onChange={handleSellerInput}
                placeholder="$85,000"
                type="text"
                value={sellerForm.reserve}
              />
            </label>
            <button className="button primary full-width" type="submit">
              Submit intake
            </button>
          </form>

          {submissionMessage ? <p className="form-feedback">{submissionMessage}</p> : null}
        </article>
      </section>
    </>
  );
}
