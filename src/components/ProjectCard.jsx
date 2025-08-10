import ProjectImage from './ProjectImage.jsx'

export default function ProjectCard({
  title,
  description,
  linkLive,
  linkCode,
  bullets = [],
  image,
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 bg-card">
      <div className="rounded-md p-1.5">
        <h2 className="text-3xl mb-2">
          {linkLive ? (
            <a href={linkLive}>
              {title}
            </a>
          ) : (
            <span>{title}</span>
          )}
        </h2>
        {description && (
          <p className="mb-4">{description}</p>
        )}
        <div className="mb-4">
          {linkCode && (
            <a href={linkCode} className="underline">
              code
            </a>
          )}
        </div>
        {Array.isArray(bullets) && bullets.length > 0 && (
          <ul className="space-y-1">
            {bullets.map((b, j) => (
              <li key={j} className="flex gap-2">
                <span>-</span>
                <span dangerouslySetInnerHTML={{ __html: b }} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="md:justify-self-end rounded-md p-1.5 bg-card max-w-xs">
        {image && (
          <ProjectImage image={image} alt={title} href={linkLive} />
        )}
      </div>
    </section>
  )
}
