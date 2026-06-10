import { profile, socials } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="fb-name">{profile.name}</span>
          <span className="fb-tag">{profile.roles[0]} · {profile.location}</span>
        </div>
        <div className="footer-socials">
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
      <div className="footer-copy">
        © {year} {profile.name}. Built with React.
      </div>
    </footer>
  );
}
