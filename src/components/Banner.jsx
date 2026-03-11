import vector1 from '../assets/vector1.png';

function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="banner">
      <div className="container banner-grid">
        <div
          className="stat-card stat-purple"
          style={{
            '--stat-bg': `url(${vector1})`,
            '--stat-bg-size': '140% auto',
            '--stat-bg-position': 'center right',
          }}
        >
          <p className="stat-label">In-Progress</p>
          <p className="stat-value">{inProgressCount}</p>
        </div>
        <div
          className="stat-card stat-green"
          style={{
            '--stat-bg': `url(${vector1})`,
            '--stat-bg-size': '140% auto',
            '--stat-bg-position': 'center right',
          }}
        >
          <p className="stat-label">Resolved</p>
          <p className="stat-value">{resolvedCount}</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
