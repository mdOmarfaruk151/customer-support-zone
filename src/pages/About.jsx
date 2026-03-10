function About() {
  return (
    <section className="page">
      <div className="page-hero">
        <h1>About Us</h1>
        <p>We build support tools that keep teams aligned and customers informed.</p>
      </div>
      <div className="page-grid">
        <div className="page-card">
          <h3>Customer-first workflows</h3>
          <p>Every screen is designed to reduce handoffs and keep ticket context clear.</p>
        </div>
        <div className="page-card">
          <h3>Operational clarity</h3>
          <p>Track in-progress tasks and resolved outcomes with simple, visible metrics.</p>
        </div>
        <div className="page-card">
          <h3>Reliable reporting</h3>
          <p>Get quick insight into resolution progress without losing focus.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
