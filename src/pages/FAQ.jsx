const faqs = [
  {
    question: 'How do I create a new ticket?',
    answer: 'Use the “+ New Ticket” button in the navigation bar to open the form and submit details.',
  },
  {
    question: 'What happens when I complete a task?',
    answer: 'The ticket moves to Resolved, is removed from Task Status and the main list, and counts update.',
  },
  {
    question: 'Can I track in-progress work?',
    answer: 'Yes. Click any ticket to add it to Task Status and track ongoing work.',
  },
];

function FAQ() {
  return (
    <section className="page">
      <div className="page-hero">
        <h1>FAQ</h1>
        <p>Quick answers to the most common support workflow questions.</p>
      </div>
      <div className="page-list">
        {faqs.map((item) => (
          <div className="page-card" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
