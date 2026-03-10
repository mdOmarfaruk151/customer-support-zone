function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">CS</span>
            <span className="brand-text">Ticket System</span>
          </div>
          <p>
            We help support teams resolve issues faster with clear ticket visibility,
            customer context, and streamlined workflows.
          </p>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div>
          <h4>Information</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div>
          <h4>Social Links</h4>
          <ul className="social">
            <li>@cs — Ticket System</li>
            <li>@cs — Ticket System</li>
            <li>@cs — Ticket System</li>
            <li>support@cst.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
