function ResolvedList({ items }) {
  return (
    <div className="resolved">
      <h3>Resolved Task</h3>
      {items.length === 0 ? (
        <p className="muted">No resolved tasks yet.</p>
      ) : (
        <div className="resolved-list">
          {items.map((item) => (
            <div key={item.id} className="resolved-item">
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResolvedList;
