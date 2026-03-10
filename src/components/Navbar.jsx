const navItems = ['Home', 'FAQ', 'Changelog', 'Blog', 'Download', 'Contact'];

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
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
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
