import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketGrid from './components/TicketGrid';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';
import NewTicketModal from './components/NewTicketModal';
import ticketsData from './data/tickets';

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTicket, setNewTicket] = useState({
    title: '',
    description: '',
    customer: '',
    priority: 'Medium',
    status: 'Open',
  });

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewTicket((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateTicket = (event) => {
    event.preventDefault();
    const allIds = [...tickets, ...tasks, ...resolved].map((ticket) => Number(ticket.id));
    const nextId = Math.max(1000, ...allIds) + 1;
    const createdAt = new Date().toISOString().slice(0, 10);

    const ticket = {
      id: String(nextId),
      ...newTicket,
      createdAt,
    };

    setTickets((prev) => [ticket, ...prev]);
    setNewTicket({
      title: '',
      description: '',
      customer: '',
      priority: 'Medium',
      status: 'Open',
    });
    setIsModalOpen(false);
    toast.success('New ticket created.');
  };

  return (
    <div className="app">
      <Navbar onNewTicket={handleOpenModal} />
      <Banner inProgressCount={tasks.length} resolvedCount={resolved.length} />
      <main className="main">
        <div className="container main-grid">
          <TicketGrid tickets={tickets} onSelect={handleSelectTicket} />
          <TaskStatus tasks={tasks} resolved={resolved} onComplete={handleCompleteTicket} />
        </div>
      </main>
      <Footer />
      <NewTicketModal
        isOpen={isModalOpen}
        form={newTicket}
        onChange={handleFormChange}
        onSubmit={handleCreateTicket}
        onClose={handleCloseModal}
      />
      <ToastContainer position="top-right" autoClose={2200} />
    </div>
  );
}

export default App;
