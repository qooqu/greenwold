import data from '../data.json';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectCards() {
  return (
    <div className="space-y-4">
      {data.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </div>
  );
}
