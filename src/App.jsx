import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketGrid from './components/TicketGrid';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';
import ticketsData from './data/tickets';

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleSelectTicket = (ticket) => {
    const exists = tasks.some((task) => task.id === ticket.id);
    if (exists) {
      toast.info('This ticket is already in Task Status.');
      return;
    }

    setTasks((prev) => [...prev, ticket]);
    toast.success('Ticket added to Task Status.');
  };

  const handleCompleteTicket = (ticketId) => {
    const ticket = tasks.find((task) => task.id === ticketId);
    if (!ticket) return;

    setTasks((prev) => prev.filter((task) => task.id !== ticketId));
    setResolved((prev) => [ticket, ...prev]);
    setTickets((prev) => prev.filter((item) => item.id !== ticketId));
    toast.success('Ticket marked as resolved.');
  };

  return (
    <div className="app">
      <Navbar />
      <Banner inProgressCount={tasks.length} resolvedCount={resolved.length} />
      <main className="main">
        <div className="container main-grid">
          <TicketGrid tickets={tickets} onSelect={handleSelectTicket} />
          <TaskStatus tasks={tasks} resolved={resolved} onComplete={handleCompleteTicket} />
        </div>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2200} />
    </div>
  );
}

export default App;
