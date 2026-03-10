const roles = [
  {
    title: 'Support Operations Lead',
    detail: 'Own workflow design and ensure teams meet response time goals.',
  },
  {
    title: 'Customer Success Manager',
    detail: 'Partner with clients to drive adoption and reduce escalations.',
  },
  {
    title: 'Frontend Engineer',
    detail: 'Build intuitive interfaces for ticket management and reporting.',
  },
];

function Careers() {
  return (
    <section className="page">
      <div className="page-hero">
        <h1>Join Us</h1>
        <p>We are growing the team behind the Customer Support Zone.</p>
      </div>
      <div className="page-grid">
        {roles.map((role) => (
          <div className="page-card" key={role.title}>
            <h3>{role.title}</h3>
            <p>{role.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Careers;
