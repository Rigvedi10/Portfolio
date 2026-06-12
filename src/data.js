// Central content for the portfolio — edit here to update the whole site.

export const profile = {
  name: 'Sharath Rigvedi',
  initials: 'SR',
  roles: ['ML / AI Engineer', 'Deep Learning Practitioner', 'Data Scientist'],
  location: 'California, USA',
  email: 'sharath.rigvedi123@gmail.com',
  tagline:
    'I build machine learning and AI-powered systems that turn raw data into production-ready products.',
  bio: [
    "Hi! I'm Sharath Rigvedi, an ML/AI engineer focused on building robust machine learning systems with Python, modern deep learning frameworks, and principled data practices.",
    'I enjoy taking ideas from a messy dataset all the way to a deployed model — designing experiments, building reliable data pipelines, and shipping models that hold up in the real world.',
    "When I'm not coding, I'm usually reading, taking photographs, or exploring the outdoors. I'm always eager to learn something new and collaborate on interesting problems.",
  ],
};

export const socials = [
  { label: 'GitHub', icon: '⌥', href: 'https://github.com/Rigvedi10' },
  { label: 'LinkedIn', icon: 'in', href: 'https://www.linkedin.com/' },
  { label: 'Email', icon: '✉', href: `mailto:${profile.email}` },
];

export const stats = [
  { num: '5+', label: 'Years Experience' },
  { num: '10', label: 'Projects Shipped' },
  { num: '6', label: 'Core Skills' },
  { num: '∞', label: 'Curiosity' },
];

export const skills = [
  { name: 'Python', level: 94, icon: '🐍' },
  { name: 'Machine Learning', level: 90, icon: '🤖' },
  { name: 'Data Science', level: 88, icon: '📊' },
  { name: 'scikit-learn', level: 86, icon: '🔬' },
  { name: 'PyTorch', level: 85, icon: '🔥' },
  { name: 'TensorFlow', level: 80, icon: '🧠' },
];

export const timeline = [
  {
    year: '2024 — Present',
    title: 'ML Engineer',
    details: 'Build and deploy deep learning models for production, owning the path from experiment to live inference.',
  },
  {
    year: '2022 — 2024',
    title: 'Data Scientist',
    details: 'Designed experiments and built data pipelines that powered model training and analytics.',
  },
  {
    year: '2020 — 2022',
    title: 'Software Engineer',
    details: 'Worked on backend services and the engineering foundations behind data-driven products.',
  },
];

export const interests = ['Reading', 'Photography', 'Outdoors', 'Open Source', 'Generative AI'];

export const projects = [
  {
    title: 'Agentic KPI Monitor',
    description:
      'Distributed agentic observability platform for enterprise KPI surveillance — autonomous anomaly triage with Neo4j graph-driven root-cause analysis, async event streaming, and tool-augmented LLMs that synthesize RCA artifacts.',
    tags: ['llm', 'agents', 'ml', 'backend'],
    icon: '📡',
    grad: 'linear-gradient(135deg, #6366f1, #ec4899)',
    year: '2025',
    featured: true,
  },
  {
    title: 'Netflix-Style OTT Recommender',
    description:
      'Two-stage recommender for an OTT platform: a two-tower neural network (user/item towers, in-batch negatives) trained on 10M+ interactions, serving sub-100ms top-K retrieval via a FAISS ANN index, plus a contextual bandit for thumbnail personalization.',
    tags: ['ml', 'deep-learning', 'recommenders'],
    icon: '🎬',
    grad: 'linear-gradient(135deg, #ef4444, #8b5cf6)',
    year: '2024',
    featured: true,
  },
  {
    title: 'Document Intelligence (OCR + LayoutLM)',
    description:
      'End-to-end document understanding pipeline: OCR-based text extraction with a fine-tuned LayoutLM model for layout-aware parsing of forms and invoices, and in-browser LLM inference exported to ONNX for private, on-device processing.',
    tags: ['ml', 'nlp', 'computer-vision', 'onnx'],
    icon: '📄',
    grad: 'linear-gradient(135deg, #06b6d4, #6366f1)',
    year: '2025',
    featured: true,
  },
  {
    title: 'AI-Assisted Floorplan Generation',
    description:
      'Constraint-satisfaction and generative spatial-synthesis system turning program requirements into topology-consistent floorplan layouts via a hybrid symbolic (MILP, constraint programming, graph algorithms) and neural (transformers, diffusion) pipeline.',
    tags: ['research', 'computer-vision', 'ml', 'generative'],
    icon: '📐',
    grad: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    year: '2024',
  },
  {
    title: 'Deepfake Detection Platform',
    description: 'Comparing classical ML and deep learning models for deepfake detection across large video datasets.',
    tags: ['ml', 'deep-learning', 'computer-vision'],
    icon: '🕵️',
    grad: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
    year: '2023',
  },
  {
    title: 'Interactive Robot (E-waste)',
    description: 'A smart robot built from recycled E-waste components, driven by a custom mobile controller.',
    tags: ['hardware', 'iot'],
    icon: '🤖',
    grad: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    year: '2023',
  },
  {
    title: 'Digi FM',
    description: 'A global online FM radio app with show reminders and RJ social links.',
    tags: ['mobile', 'audio'],
    icon: '📻',
    grad: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    year: '2022',
  },
  {
    title: 'E-commerce Store',
    description: 'A mock online store built with React and Stripe for end-to-end payments.',
    tags: ['web', 'react', 'payments'],
    icon: '🛒',
    grad: 'linear-gradient(135deg, #10b981, #06b6d4)',
    year: '2022',
  },
  {
    title: 'Personal Portfolio',
    description: 'This responsive portfolio site, designed and built from scratch with React.',
    tags: ['web', 'react'],
    icon: '🎨',
    grad: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    year: '2024',
  },
  {
    title: 'Blog Platform',
    description: 'A lightweight blogging platform with Markdown support and threaded user comments.',
    tags: ['web', 'blog'],
    icon: '✍️',
    grad: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    year: '2021',
  },
];
