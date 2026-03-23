import {
  timelineItemWrapper,
  timelineYear,
  timelineLine,
  timelineContent,
  timelineTitle,
  timelineDescription,
} from './TimelineItem.css';

interface TimelineItemProps {
  year: number;
  title: string;
  description?: string;
  className?: string;
}

export function TimelineItem({ year, title, description, className }: TimelineItemProps) {
  return (
    <div className={`${timelineItemWrapper}${className ? ` ${className}` : ''}`}>
      <div className={timelineYear}>{year}</div>
      <div className={timelineLine} aria-hidden="true" />
      <div className={timelineContent}>
        <h3 className={timelineTitle}>{title}</h3>
        {description && <p className={timelineDescription}>{description}</p>}
      </div>
    </div>
  );
}
