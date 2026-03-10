function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="banner">
      <div className="container banner-grid">
        <div className="stat-card stat-purple">
          <p className="stat-label">In-Progress</p>
          <p className="stat-value">{inProgressCount}</p>
        </div>
        <div className="stat-card stat-green">
          <p className="stat-label">Resolved</p>
          <p className="stat-value">{resolvedCount}</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
