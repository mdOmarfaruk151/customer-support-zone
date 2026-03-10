# Customer Support Zone

A React-based Customer Support Zone that displays customer tickets, tracks progress, and marks them as resolved. It follows the provided Figma-inspired layout and uses React-Toastify for notifications.

## Features & Requirements (Implemented)

- Navbar with logo, menu links, and functional “+ New Ticket” button.
- Banner with gradient stat cards for In-Progress and Resolved counts.
- Ticket grid with 10–15 real JSON tickets (id, title, description, customer, priority, status, createdAt).
- Task Status section:
- Click ticket to add to Task Status (toast + count increment).
- Complete task to move to Resolved list, remove from Tickets, update counts (toast).
- Footer with functional links and social icons.
- Responsive layout for mobile and tablet.
- React Router pages: Home, FAQ, Changelog, Blog, Download, Contact.
- Footer pages: About, Mission, Contact Sales, Products & Services, Customer Stories, Privacy, Terms, Careers.
- React-Toastify replaces all alerts.

## Tech Stack

- React + Vite
- JavaScript
- HTML/CSS (Vanilla)
- React Router
- React-Toastify

## Setup

1. Install dependencies

```
C:\Program Files\nodejs\npm.cmd install
```

2. Start the dev server

```
C:\Program Files\nodejs\npm.cmd run dev
```

## Preview

- Open `http://localhost:5173` after running the dev server.
- Expected behaviors:
- Clicking a ticket adds it to Task Status and increases the In-Progress count.
- Clicking Complete moves it to Resolved, removes it from Task Status and the ticket list, and updates counts.
- Toast notifications appear for add/complete actions.
- “+ New Ticket” opens a modal and adds a real ticket.

## File Structure

```
src/
  components/
    Banner.jsx
    Footer.jsx
    Navbar.jsx
    NewTicketModal.jsx
    ResolvedList.jsx
    TaskStatus.jsx
    TicketCard.jsx
    TicketGrid.jsx
  data/
    tickets.js
  pages/
    About.jsx
    Blog.jsx
    Careers.jsx
    Changelog.jsx
    Contact.jsx
    Download.jsx
    FAQ.jsx
    Home.jsx
    Mission.jsx
    Privacy.jsx
    Sales.jsx
    Services.jsx
    Stories.jsx
    Terms.jsx
  App.css
  App.jsx
  index.css
  main.jsx
```

## Submission Checklist

- Layout matches the Customer Support Zone screenshots at desktop width.
- Tickets render in a two-column grid with real data (10–15 entries).
- Task Status and Resolved lists behave correctly.
- Toast notifications replace all alerts.
- Footer links are functional.
- Layout is responsive on mobile.
- `README.md` answers all React questions.

## React Questions

### What is JSX, and why is it used?
JSX is a syntax extension for JavaScript that lets you write HTML-like markup directly in React components. It is used because it makes UI structure more readable and lets React compile the markup into efficient JavaScript calls.

### What is the difference between State and Props?
Props are inputs passed into a component by its parent and are read-only inside the child. State is internal data owned by a component that can change over time and cause re-renders.

### What is the useState hook, and how does it work?
`useState` is a React Hook that lets functional components store and update state. It returns the current state value and a setter function. Calling the setter schedules a re-render with the new state.

### How can you share state between components in React?
The most common approach is lifting state up to the closest common parent and passing the state and handlers down via props. For larger apps, you can use Context or state management libraries.

### How is event handling done in React?
Event handling is done by passing event handler functions (like `onClick` or `onChange`) to JSX elements. React wraps native events in a synthetic event system for consistency across browsers.
