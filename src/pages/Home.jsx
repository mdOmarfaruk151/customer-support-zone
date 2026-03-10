import Banner from '../components/Banner';
import TicketGrid from '../components/TicketGrid';
import TaskStatus from '../components/TaskStatus';

function Home({
  tickets,
  tasks,
  resolved,
  onSelectTicket,
  onCompleteTicket,
}) {
  return (
    <>
      <Banner inProgressCount={tasks.length} resolvedCount={resolved.length} />
      <main className="main">
        <div className="container main-grid">
          <TicketGrid tickets={tickets} onSelect={onSelectTicket} />
          <TaskStatus tasks={tasks} resolved={resolved} onComplete={onCompleteTicket} />
        </div>
      </main>
    </>
  );
}

export default Home;
