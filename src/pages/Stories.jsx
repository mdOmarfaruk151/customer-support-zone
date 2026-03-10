const stories = [
  {
    name: 'Northwind Logistics',
    result: 'Reduced median response time by 32% after adopting Task Status workflows.',
  },
  {
    name: 'Blue Harbor Health',
    result: 'Cut unresolved ticket backlog in half within six weeks.',
  },
  {
    name: 'Crescent Retail',
    result: 'Improved first-contact resolution by giving agents full ticket context.',
  },
];

function Stories() {
  return (
    <section className="page">
      <div className="page-hero">
        <h1>Customer Stories</h1>
        <p>Real teams using the Customer Support Zone to deliver better experiences.</p>
      </div>
      <div className="page-list">
        {stories.map((story) => (
          <div className="page-card" key={story.name}>
            <h3>{story.name}</h3>
            <p>{story.result}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stories;
