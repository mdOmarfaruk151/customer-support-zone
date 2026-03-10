import { NavLink } from 'react-router-dom';

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Mission', to: '/mission' },
  { label: 'Contact Sales', to: '/sales' },
];

const serviceLinks = [
  { label: 'Products & Services', to: '/services' },
  { label: 'Customer Stories', to: '/stories' },
  { label: 'Download Apps', to: '/download' },
];

const infoLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Join Us', to: '/careers' },
];

const socialLinks = [
  { label: '@cs — Ticket System', href: 'https://example.com' },
  { label: '@cs — Ticket System', href: 'https://example.com' },
  { label: '@cs — Ticket System', href: 'https://example.com' },
  { label: 'support@cst.com', href: 'mailto:support@cst.com' },
];

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
            {companyLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Information</h4>
          <ul>
            {infoLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Social Links</h4>
          <ul className="social">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
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
