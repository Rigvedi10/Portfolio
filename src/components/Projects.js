import React from 'react';

export default function Projects() {
  // Example project data
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A responsive portfolio site built with React.',
      link: 'https://your-portfolio-link.com'
    },
    {
      title: 'E-commerce Store',
      description: 'A mock online store using React and Stripe for payments.',
      link: 'https://your-store-link.com'
    },
    {
      title: 'Blog Platform',
      description: 'A simple blog with Markdown support and user comments.',
      link: 'https://your-blog-link.com'
    }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Projects</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
