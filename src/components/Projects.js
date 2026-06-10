import { useMemo, useState } from 'react';
import { projects } from '../data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('all');

  const allTags = useMemo(() => {
    const s = new Set();
    projects.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return ['all', ...Array.from(s).sort()];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q));
      const matchesTag = activeTag === 'all' || p.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <div className="container page">
      <div className="page-head">
        <span className="eyebrow">Portfolio</span>
        <h1 className="section-title">Projects</h1>
        <p className="lead">
          Selected work across machine learning, web, and hardware — with short write-ups and the tools behind each one.
        </p>
      </div>

      <div className="proj-toolbar">
        <div className="search-field">
          <span className="search-ico">🔍</span>
          <input
            className="search-input"
            type="search"
            placeholder="Search projects, e.g. 'ml' or 'react'"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search projects"
          />
        </div>
        <div className="filter-row">
          {allTags.map((t) => (
            <button
              key={t}
              className={`filter-chip ${activeTag === t ? 'active' : ''}`}
              onClick={() => setActiveTag(t)}
            >
              {t === 'all' ? 'All' : `#${t}`}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="proj-grid">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>🔍</p>
          <p>No projects match your search. Try a different keyword or filter.</p>
        </div>
      )}
    </div>
  );
}
