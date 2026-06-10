export default function ProjectCard({ project }) {
  return (
    <article className="proj-card">
      <div className="proj-thumb" style={{ background: project.grad }}>
        {project.year && <span className="year">{project.year}</span>}
        <span className="emoji" role="img" aria-label={project.title}>{project.icon}</span>
      </div>
      <div className="proj-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="proj-tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">#{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
