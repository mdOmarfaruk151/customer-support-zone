const statusClassMap = {
  Open: 'status-open',
  'In-Progress': 'status-progress',
};

const priorityClassMap = {
  High: 'priority-high',
  Medium: 'priority-medium',
  Low: 'priority-low',
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
};

function TicketCard({ ticket, onSelect }) {
  const { id, title, description, customer, priority, status, createdAt } = ticket;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(ticket);
    }
  };

  return (
    <article
      className="ticket-card"
      role="button"
      tabIndex={0}
      onClick={() => onSelect(ticket)}
      onKeyDown={handleKeyDown}
    >
      <div className="ticket-card-header">
        <h3>{title}</h3>
        <span className={`status-pill ${statusClassMap[status] || ''}`}>{status}</span>
      </div>
      <p className="ticket-desc">{description}</p>
      <div className="ticket-meta">
        <span className="ticket-id">#{id}</span>
        <span className={`priority-pill ${priorityClassMap[priority] || ''}`}>
          {priority.toUpperCase()} PRIORITY
        </span>
        <span className="ticket-customer">
          <span className="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="presentation">
              <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
            </svg>
          </span>
          {customer}
        </span>
        <span className="ticket-date">
          <span className="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="presentation">
              <path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2zm12 6H5v12h14V8z" />
            </svg>
          </span>
          {formatDate(createdAt)}
        </span>
      </div>
    </article>
  );
}

export default TicketCard;
