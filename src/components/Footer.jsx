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
  {
    label: 'X',
    title: '@cs — Ticket System',
    href: 'https://x.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.52 3H20.5l-6.49 7.42L21 21h-5.5l-4.3-5.33L6.5 21H3.5l6.95-7.96L3 3h5.64l3.9 4.86L17.52 3zm-1.1 15.9h1.68L7.77 4.98H6.04l10.38 13.92z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    title: '@cs — Ticket System',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48s.88 1.98 1.98 1.98c1.09 0 1.98-.88 1.98-1.98S6.07 3.5 4.98 3.5zM3.5 8.5h3v12h-3v-12zM9.5 8.5h2.88v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v7.32h-3v-6.5c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.49 1.68-2.49 3.44v6.61h-3v-12z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    title: '@cs — Ticket System',
    href: 'https://facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V12H8v3h2v6h3v-6h2.2l.8-3H13v-2.2c0-.5.4-.8.9-.8z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    title: 'support@cst.com',
    href: 'mailto:support@cst.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm0 2v.2l8 4.8 8-4.8V8H4zm0 10h16V10l-8 4.8L4 10v8z" />
      </svg>
    ),
  },
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
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-text">
                    <span className="social-title">{link.label}</span>
                    <span className="social-subtitle">{link.title}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
