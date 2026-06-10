import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { profile, socials, stats, skills, projects } from '../data';
import ProjectCard from './ProjectCard';
import Avatar from './Avatar';

function useTypewriter(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1400 } = {}) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === current) {
      delay = pause;
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => i + 1);
      delay = 300;
    }

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else {
        const next = deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

// Adds .is-visible to .reveal children when they scroll into view.
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = root.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const typed = useTypewriter(profile.roles);
  const featured = projects.filter((p) => p.featured);
  const revealRef = useReveal();

  return (
    <>
      {/* Hero */}
      <section className="container hero">
        <div className="hero-intro">
          <span className="eyebrow">✦ Available for new opportunities</span>
          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">Sharath</span>
          </h1>
          <div className="hero-role">
            <span className="typed-text">{typed}</span>
            <span className="caret" />
          </div>
          <p className="hero-desc">{profile.tagline}</p>

          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">View My Work →</Link>
            <Link to="/contact" className="btn btn-ghost">Get in Touch</Link>
          </div>

          <div className="hero-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                className="social-btn"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-ring">
            <Avatar />
            <span className="hero-badge b1"><span className="dot" /> Open to work</span>
            <span className="hero-badge b2">🤖 ML / AI</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container">
        <div className="stats-strip">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num gradient-text">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="container section" ref={revealRef}>
        <div className="section-head reveal">
          <span className="eyebrow">Toolkit</span>
          <h2 className="section-title">Skills &amp; Tools</h2>
          <p className="lead">The technologies I reach for to design, train, and ship intelligent systems.</p>
        </div>
        <div className="skill-grid reveal">
          {skills.map((s) => (
            <span className="skill-chip" key={s.name}>
              <span className="ico">{s.icon}</span> {s.name}
            </span>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="container section">
        <div className="section-head">
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="lead">A few things I've built — from generative models to robotics.</p>
        </div>
        <div className="proj-grid">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
        <div className="featured-foot">
          <Link to="/projects" className="btn btn-ghost">See all projects →</Link>
        </div>
      </section>
    </>
  );
}
