function NewTicketModal({ isOpen, form, onChange, onSubmit, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal-header">
          <h3>Create New Ticket</h3>
          <button className="btn btn-ghost" type="button" onClick={onClose}>
            Close
          </button>
        </div>
        <form className="modal-body" onSubmit={onSubmit}>
          <label>
            Title
            <input
              name="title"
              value={form.title}
              onChange={onChange}
              placeholder="Billing page shows wrong amount"
              required
            />
          </label>
          <label>
            Description
            <textarea
              name="description"
              value={form.description}
              onChange={onChange}
              placeholder="Customer reports the total is higher than expected on checkout."
              required
            />
          </label>
          <label>
            Customer
            <input
              name="customer"
              value={form.customer}
              onChange={onChange}
              placeholder="Avery Nguyen"
              required
            />
          </label>
          <div className="modal-row">
            <label>
              Priority
              <select name="priority" value={form.priority} onChange={onChange}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
            <label>
              Status
              <select name="status" value={form.status} onChange={onChange}>
                <option value="Open">Open</option>
                <option value="In-Progress">In-Progress</option>
              </select>
            </label>
          </div>
          <div className="modal-actions">
            <button className="btn btn-primary" type="submit">
              Add Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTicketModal;
