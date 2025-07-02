import React from 'react';

export default function Projects() {
  // Example project data
  const projects = [
    {
      title:'Floor Plan Generation',
      description:'A research on various methods to genrate floorplan using furniture dimensions',
      link:'https://drive.google.com/drive/folders/1Mg_KmBl7Uo0hUeA7vN8aGLk3MtdkZPjs?usp=sharing'
    },
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
    title: 'Deepfake Image Detection & Model Comparison Platform',
    description: 'An interactive tool comparing classical ML and deep learning models (SVM, Random Forest, Xception CNN) for deepfake detection on CIFAKE and HuggingFace datasets (120K+ images). Built with Python, Scikit-learn, TensorFlow, OpenCV, Streamlit. Features custom feature extraction, transfer learning, and visual model comparison.',
    link: '' // Add link if hosted or GitHub repo
  },
  {
    title: 'Digi FM',
    description: 'A global online FM application. Users can listen to FM anywhere, set reminders for upcoming shows, and connect with RJs via social media.',
    link: '' // Add link if hosted or GitHub repo
  },
  {
    title: 'Interactive Robot using E-waste',
    description: 'A smart robot built using E-waste, LDRs, Relay module, smartphone app, motors, and LEDs. Acts like a Google Assistant with smart fan and LED control.',
    link: '' // Add link if available
  },
    {
      title: 'Blog Platform',
      description: 'A simple blog with Markdown support and user comments.',
      link:'/blog'
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
