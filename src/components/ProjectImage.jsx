export default function ProjectImage({ image, alt = '', href }) {
  const img = (
    <img
      src={image}
      alt={alt}
      className="absolute inset-0 m-auto max-h-[calc(100%-3.5rem)] max-w-[calc(100%-3.5rem)] rounded-lg drop-shadow-[0_14px_22px_rgba(24,32,28,0.28)]"
      loading="lazy"
    />
  );

  return href ? (
    <a href={href} aria-label={`Open ${alt || 'link'}`} className="absolute inset-0">{img}</a>
  ) : (
    img
  );
}
