import TicketCard from './TicketCard';

function TicketGrid({ tickets, onSelect }) {
  return (
    <section className="ticket-section">
      <div className="section-header">
        <h2>Customer Tickets</h2>
      </div>
      {tickets.length === 0 ? (
        <div className="empty-state">
          <p>All tickets are resolved. Great work.</p>
        </div>
      ) : (
        <div className="ticket-grid">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} onSelect={onSelect} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TicketGrid;
