export default function ProjectImage({
  image,
  alt = '',
  href,
  sizeClass = 'w-72 h-auto max-w-full',
  rounded = true,
}) {
  const baseClasses = `${sizeClass} ${rounded ? 'rounded' : ''} shadow-xl block`;
  const img = (
    <img src={`/images/${image}`} alt={alt} className={baseClasses} loading="lazy" />
  );

  return href ? (
    <a href={href} aria-label={`Open ${alt || 'link'}`}>{img}</a>
  ) : (
    img
  );
}


