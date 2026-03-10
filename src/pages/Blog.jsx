const posts = [
  {
    title: 'Reducing Resolution Time with Clear Task Status',
    summary: 'Why assigning ownership early keeps customer satisfaction high.',
  },
  {
    title: 'Five Data Points Every Ticket Needs',
    summary: 'Capture the right context to speed up investigation and handoffs.',
  },
  {
    title: 'Designing a Calm Support Dashboard',
    summary: 'Layout tips that keep teams focused during high-volume periods.',
  },
];

function Blog() {
  return (
    <section className="page">
      <div className="page-hero">
        <h1>Blog</h1>
        <p>Product insights, support tips, and workflow strategies.</p>
      </div>
      <div className="page-grid">
        {posts.map((post) => (
          <div className="page-card" key={post.title}>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
