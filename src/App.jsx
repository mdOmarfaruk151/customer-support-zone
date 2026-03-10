import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NewTicketModal from './components/NewTicketModal';
import ticketsData from './data/tickets';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Changelog from './pages/Changelog';
import Blog from './pages/Blog';
import Download from './pages/Download';
import Contact from './pages/Contact';

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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tickets={tickets}
              tasks={tasks}
              resolved={resolved}
              onSelectTicket={handleSelectTicket}
              onCompleteTicket={handleCompleteTicket}
            />
          }
        />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
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
