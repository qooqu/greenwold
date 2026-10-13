import ProjectImage from './ProjectImage.jsx'

const pill =
  'inline-flex min-h-11 items-center gap-2 rounded-full px-[18px] font-mono text-sm font-medium no-underline transition hover:-translate-y-px hover:shadow-[0_6px_16px_-8px_rgba(24,32,28,0.45)]'

export default function ProjectCard({
  number,
  title,
  description,
  linkLive,
  linkCode,
  bullets = [],
  image,
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors hover:border-line-strong">
      {image && (
        <div className="relative aspect-16/10 bg-well">
          <ProjectImage image={image} alt={`${title} screenshot`} href={linkLive} />
        </div>
      )}
      <div className="flex grow flex-col gap-3.5 px-8 pt-7 pb-8">
        <div className="flex items-baseline gap-3 font-mono text-[13px] text-muted">
          <span className="font-medium text-accent">{String(number).padStart(2, '0')}</span>
          {description && <span>{description}</span>}
        </div>
        <h2 className="m-0 text-[32px] font-bold leading-[1.1] tracking-[-0.02em]">{title}</h2>
        {Array.isArray(bullets) && bullets.length > 0 && (
          <ul className="flex flex-col gap-1.5 text-base leading-normal text-ink-soft text-pretty">
            {bullets.map((b, j) => (
              <li key={j} className="flex gap-2.5">
                <span aria-hidden="true" className="text-accent">–</span>
                <span dangerouslySetInnerHTML={{ __html: b }} />
              </li>
            ))}
          </ul>
        )}
        {(linkLive || linkCode) && (
          <div className="mt-auto flex flex-wrap gap-2.5 pt-2.5">
            {linkLive && (
              <a href={linkLive} className={`${pill} bg-accent text-card hover:text-card`}>
                live
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9 9 3" /><path d="M4 3h5v5" /></svg>
              </a>
            )}
            {linkCode && (
              <a href={linkCode} className={`${pill} border border-text text-text hover:text-text`}>
                code
                <svg aria-hidden="true" width="14" height="12" viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 2.5 1 6l3.5 3.5" /><path d="M9.5 2.5 13 6l-3.5 3.5" /></svg>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
