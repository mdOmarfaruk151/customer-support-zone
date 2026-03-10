import ResolvedList from './ResolvedList';

function TaskStatus({ tasks, resolved, onComplete }) {
  return (
    <aside className="task-status">
      <div className="section-header">
        <h2>Task Status</h2>
        <p className="muted">Select a ticket to add to Task Status</p>
      </div>
      {tasks.length === 0 ? (
        <div className="empty-state">
          <p>No tasks in progress.</p>
        </div>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-card">
              <p>{task.title}</p>
              <button
                className="btn btn-complete"
                type="button"
                onClick={() => onComplete(task.id)}
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
      <ResolvedList items={resolved} />
    </aside>
  );
}

export default TaskStatus;
