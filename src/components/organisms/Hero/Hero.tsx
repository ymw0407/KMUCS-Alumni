import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/atoms/Button';
import {
  hero,
  heroBackground,
  heroContent,
  heroLabel,
  heroTitle,
  heroSubtitle,
  heroActions,
  heroStat,
  heroStatItem,
  heroStatValue,
  heroStatLabel,
  carouselContainer,
  carouselSlide,
  carouselOverlay,
  carouselDots,
  carouselDot,
} from './Hero.css';

interface HeroStat {
  value: string;
  label: string;
}

export interface CarouselSlide {
  /** URL for background image, or omit to use gradient fallback */
  image?: string;
  /** CSS gradient string used when image is not provided */
  gradient?: string;
  /** Alt text for accessibility */
  alt?: string;
}

interface HeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  stats?: HeroStat[];
  /** Carousel slides — if empty or omitted, original background is shown */
  slides?: CarouselSlide[];
  /** Auto-advance interval in ms (default: 5000) */
  interval?: number;
}

export function Hero({
  label,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  stats,
  slides = [],
  interval = 5000,
}: HeroProps) {
  const [current, setCurrent] = useState(0);
  const hasSlides = slides.length > 0;

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!hasSlides) return;
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [hasSlides, advance, interval]);

  return (
    <section className={hero}>
      {hasSlides ? (
        <>
          <div className={carouselContainer} aria-hidden="true">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={carouselSlide}
                data-active={i === current}
                style={{
                  backgroundImage: slide.image
                    ? `url(${slide.image})`
                    : slide.gradient ?? undefined,
                  background: !slide.image ? slide.gradient : undefined,
                }}
                role="img"
                aria-label={slide.alt}
              />
            ))}
            <div className={carouselOverlay} />
          </div>

          <div className={carouselDots}>
            {slides.map((_, i) => (
              <button
                key={i}
                className={carouselDot}
                data-active={i === current}
                onClick={() => setCurrent(i)}
                aria-label={`슬라이드 ${i + 1}로 이동`}
              />
            ))}
          </div>
        </>
      ) : (
        <div className={heroBackground} aria-hidden="true" />
      )}

      <div className={heroContent}>
        {label && <span className={heroLabel}>{label}</span>}
        <h1 className={heroTitle}>{title}</h1>
        {subtitle && <p className={heroSubtitle}>{subtitle}</p>}

        {(primaryAction || secondaryAction) && (
          <div className={heroActions}>
            {primaryAction && (
              <Button as="a" href={primaryAction.href} size="lg">
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button as="a" href={secondaryAction.href} variant="ghost-light" size="lg">
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className={heroStat}>
            {stats.map((s) => (
              <div key={s.label} className={heroStatItem}>
                <span className={heroStatValue}>{s.value}</span>
                <span className={heroStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
