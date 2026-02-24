import React from 'https://esm.sh/react@18.3.1';

const skills = ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js', 'UI/UX'];

const projects = [
  {
    title: 'Aurora Commerce UI',
    description:
      'A sleek e-commerce front-end with dynamic filtering, smooth micro-interactions, and optimized performance.',
  },
  {
    title: 'Pulse Analytics Dashboard',
    description:
      'A real-time dashboard interface with modular cards, custom charts, and dark-mode-first design system.',
  },
  {
    title: 'NexTrip Landing Experience',
    description:
      'An immersive travel landing page featuring scroll-based animations, responsive layouts, and conversion-focused CTA sections.',
  },
];

export function App() {
  return React.createElement(
    'div',
    { className: 'site-bg' },
    React.createElement('div', { className: 'noise', 'aria-hidden': 'true' }),
    React.createElement(
      'header',
      { className: 'hero container' },
      React.createElement('p', { className: 'eyebrow' }, 'PORTFOLIO'),
      React.createElement(
        'h1',
        null,
        "Hi, I'm ",
        React.createElement('span', null, 'Bhagirath Halder')
      ),
      React.createElement(
        'p',
        { className: 'subtitle' },
        'Frontend Developer crafting elegant, fast, and animated digital experiences.'
      ),
      React.createElement(
        'div',
        { className: 'cta-row' },
        React.createElement('a', { href: '#projects', className: 'btn primary' }, 'View Projects'),
        React.createElement('a', { href: '#contact', className: 'btn ghost' }, "Let's Connect")
      )
    ),
    React.createElement(
      'section',
      { className: 'container section reveal' },
      React.createElement('h2', null, 'Tech Stack'),
      React.createElement(
        'div',
        { className: 'skills-grid' },
        ...skills.map((skill) => React.createElement('span', { className: 'skill-chip', key: skill }, skill))
      )
    ),
    React.createElement(
      'section',
      { id: 'projects', className: 'container section reveal' },
      React.createElement('h2', null, 'Featured Projects'),
      React.createElement(
        'div',
        { className: 'project-grid' },
        ...projects.map((project) =>
          React.createElement(
            'article',
            { className: 'project-card', key: project.title },
            React.createElement('h3', null, project.title),
            React.createElement('p', null, project.description)
          )
        )
      )
    ),
    React.createElement(
      'section',
      { id: 'contact', className: 'container section contact reveal' },
      React.createElement('h2', null, "Let's Build Something Amazing"),
      React.createElement(
        'p',
        null,
        "Available for freelance projects and full-time frontend roles. Reach out and let's create an unforgettable web experience."
      ),
      React.createElement('a', { className: 'btn primary', href: 'mailto:bhagirath@example.com' }, 'bhagirath@example.com')
    )
  );
}
