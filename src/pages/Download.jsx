const downloads = [
  {
    name: 'Desktop Client',
    detail: 'Windows and macOS builds for on-call agents.',
  },
  {
    name: 'Mobile Companion',
    detail: 'Respond to priority tickets on the go.',
  },
  {
    name: 'API Toolkit',
    detail: 'Integrate ticket creation and status updates into internal tools.',
  },
];

function Download() {
  return (
    <section className="page">
      <div className="page-hero">
        <h1>Download</h1>
        <p>Get the tools your team needs to respond faster.</p>
      </div>
      <div className="page-list">
        {downloads.map((item) => (
          <div className="page-card" key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Download;
