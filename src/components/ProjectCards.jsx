import ProjectCard from './ProjectCard.jsx';

export default function ProjectCards({ projects }) {
  return (
    <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(min(480px,100%),1fr))]">
      {projects.map((p, i) => (
        <ProjectCard key={i} number={i + 1} {...p} />
      ))}
    </div>
  );
}
