import ProjectCard from './ProjectCard.jsx';

export default function ProjectCards({ projects }) {
  return (
    <div className="space-y-4">
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </div>
  );
}
