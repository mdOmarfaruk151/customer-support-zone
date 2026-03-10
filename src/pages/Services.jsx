const services = [
  {
    title: 'Ticket Intake',
    detail: 'Unified intake from email, chat, and API endpoints with automatic tagging.',
  },
  {
    title: 'Task Status Boards',
    detail: 'Assign ownership and monitor in-progress work without manual spreadsheets.',
  },
  {
    title: 'Resolution Analytics',
    detail: 'Track resolution time and team throughput with clear dashboards.',
  },
];

function Services() {
  return (
    <section className="page">
      <div className="page-hero">
        <h1>Products & Services</h1>
        <p>Tools that keep support operations predictable and easy to manage.</p>
      </div>
      <div className="page-grid">
        {services.map((item) => (
          <div className="page-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
