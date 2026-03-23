import {
  linkCard,
  linkCardContent,
  linkCardTitle,
  linkCardDescription,
  linkCardUrl,
  linkCardIcon,
} from './LinkCard.css';

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
}

function extractDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

export function LinkCard({ href, title, description }: LinkCardProps) {
  return (
    <a href={href} className={linkCard} target="_blank" rel="noopener noreferrer">
      <div className={linkCardContent}>
        <div className={linkCardTitle}>{title}</div>
        {description && <div className={linkCardDescription}>{description}</div>}
        <div className={linkCardUrl}>{extractDomain(href)}</div>
      </div>
      <div className={linkCardIcon} aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
        </svg>
      </div>
    </a>
  );
}
