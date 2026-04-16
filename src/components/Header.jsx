import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Marketplace', end: true },
  { to: '/auctions', label: 'Auctions' },
  { to: '/knife', label: 'Knife Vault' },
  { to: '/calculator', label: 'Calculator' },
];

export function Header() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        <span className="brand-mark">AB</span>
        <span>
          <strong>AutoBid</strong>
          <small>Marketplace</small>
        </span>
      </NavLink>

      <nav className="site-nav" aria-label="Primary">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            end={end}
            to={to}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
