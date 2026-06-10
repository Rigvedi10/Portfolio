import { useState } from 'react';
import { profile, socials } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  }

  const contactItems = [
    { icon: '✉️', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: '📍', label: 'Location', value: profile.location },
    { icon: '💼', label: 'Status', value: 'Open to opportunities' },
  ];

  return (
    <div className="container page">
      <div className="page-head">
        <span className="eyebrow">Say hello</span>
        <h1 className="section-title">Get in Touch</h1>
        <p className="lead">
          Have a project in mind, a question, or just want to connect? Drop me a message and I'll get back to you.
        </p>
      </div>

      <div className="contact-grid">
        {/* Info column */}
        <div className="contact-info">
          {contactItems.map((c) => {
            const inner = (
              <>
                <span className="ci-ico">{c.icon}</span>
                <div>
                  <div className="ci-label">{c.label}</div>
                  <div className="ci-value">{c.value}</div>
                </div>
              </>
            );
            return c.href ? (
              <a className="card contact-item" key={c.label} href={c.href}>
                {inner}
              </a>
            ) : (
              <div className="card contact-item" key={c.label}>
                {inner}
              </div>
            );
          })}

          <div className="footer-socials" style={{ marginTop: '0.4rem' }}>
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

        {/* Form */}
        <form className="card contact-form" onSubmit={handleSubmit}>
          {sent && (
            <div className="form-success">
              ✅ Thanks! Your message has been received.
            </div>
          )}
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={form.name} onChange={update} placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={update} placeholder="you@email.com" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={update} placeholder="Tell me a little about it..." required />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Send Message →
          </button>
        </form>
      </div>
    </div>
  );
}
