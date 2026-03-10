const updates = [
  {
    date: '2026-03-11',
    title: 'New Ticket Modal',
    detail: 'Add tickets from the navbar with a guided form and toast confirmation.',
  },
  {
    date: '2026-03-10',
    title: 'Resolved Workflow',
    detail: 'Complete tasks to move them into the Resolved list and update counts.',
  },
  {
    date: '2026-03-09',
    title: 'Layout Refresh',
    detail: 'Updated the banner gradients, ticket cards, and footer styling.',
  },
];

function Changelog() {
  return (
    <section className="page">
      <div className="page-hero">
        <h1>Changelog</h1>
        <p>Recent improvements and product updates for the support zone.</p>
      </div>
      <div className="page-list">
        {updates.map((item) => (
          <div className="page-card" key={item.title}>
            <h3>{item.title}</h3>
            <p className="page-meta">{item.date}</p>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Changelog;
