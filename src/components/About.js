import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { profile, skills, timeline, interests } from '../data';
import Avatar from './Avatar';

export default function About() {
  const [inView, setInView] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="container page">
      <div className="page-head">
        <span className="eyebrow">Get to know me</span>
        <h1 className="section-title">About Me</h1>
      </div>

      <div className="about-grid">
        {/* Sidebar */}
        <aside className="about-aside">
          <div className="card about-card">
            <Avatar />
            <h3>{profile.name}</h3>
            <div className="role">{profile.roles[0]}</div>
            <div className="loc">📍 {profile.location}</div>
          </div>

          <div className="mini-stats">
            <div className="mini-stat">
              <div className="n">5+</div>
              <div className="l">Years Experience</div>
            </div>
            <div className="mini-stat">
              <div className="n">{skills.length}</div>
              <div className="l">Core Skills</div>
            </div>
          </div>

          <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
            Let's work together
          </Link>
        </aside>

        {/* Main content */}
        <div>
          <section className="about-block prose">
            <h2>Who I am</h2>
            {profile.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>

          <section className="about-block" ref={skillsRef}>
            <h2>Skills</h2>
            {skills.map((s) => (
              <div className="skill-row" key={s.name}>
                <div className="skill-top">
                  <strong>{s.icon} {s.name}</strong>
                  <span>{s.level}%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: inView ? `${s.level}%` : '0%' }} />
                </div>
              </div>
            ))}
          </section>

          <section className="about-block">
            <h2>Experience</h2>
            <div className="timeline">
              {timeline.map((t) => (
                <div className="tl-item" key={t.title}>
                  <div className="yr">{t.year}</div>
                  <h4>{t.title}</h4>
                  <p>{t.details}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="about-block">
            <h2>Beyond Work</h2>
            <div className="interests">
              {interests.map((i) => (
                <span className="skill-chip" key={i}>{i}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
