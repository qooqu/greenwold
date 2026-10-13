export default function ProjectImage({ image, alt = '', href }) {
  const img = (
    <img
      src={`/images/${image}`}
      alt={alt}
      className="block max-h-full max-w-full rounded-lg drop-shadow-[0_14px_22px_rgba(24,32,28,0.28)]"
      loading="lazy"
    />
  );

  return href ? (
    <a href={href} aria-label={`Open ${alt || 'link'}`} className="flex h-full w-full items-center justify-center">{img}</a>
  ) : (
    img
  );
}
