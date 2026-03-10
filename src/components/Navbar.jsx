import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Changelog', to: '/changelog' },
  { label: 'Blog', to: '/blog' },
  { label: 'Download', to: '/download' },
  { label: 'Contact', to: '/contact' },
];

function Navbar({ onNewTicket }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <span className="brand-mark">CS</span>
          <span className="brand-text">Ticket System</span>
        </div>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <button className="btn btn-primary" type="button" onClick={onNewTicket}>
            + New Ticket
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
