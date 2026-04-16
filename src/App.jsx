import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AuctionPage } from './pages/AuctionPage';
import { KnifePage } from './pages/KnifePage';
import { CalculatorPage } from './pages/CalculatorPage';
import { OldAuctionPage } from './pages/OldAuctionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auctions" element={<AuctionPage />} />
        <Route path="/knife" element={<KnifePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/old-auction" element={<OldAuctionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
