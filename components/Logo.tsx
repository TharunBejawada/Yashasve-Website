import React from 'react';
import { cn } from '@/components/ui';

interface LogoProps {
  className?: string;
  showSubtext?: boolean;
  /** 'dark' = for use on LIGHT backgrounds (navbar, footer light theme)
   *  'light' = for use on DARK backgrounds (mobile menu overlay) */
  variant?: 'dark' | 'light';
  /** Render only the mark, no wordmark */
  markOnly?: boolean;
}

/**
 * The Aureole — a thin honey-gold ring framing a serif italic Y, with a single
 * bead at the 1-o'clock position. Reads as an apothecary seal / editorial masthead.
 * The Y is rendered as an SVG path (not <text>) so the mark is font-independent
 * and stable at every size — favicon through hero.
 */
export const Logo: React.FC<LogoProps> = ({
  className,
  showSubtext = true,
  variant = 'dark',
  markOnly = false,
}) => {
  const onLight = variant === 'dark';

  return (
    <div className={cn('flex items-center gap-3 group', className)}>
      <LogoMark variant={variant} />

      {!markOnly && (
        <div className="flex flex-col justify-center">
          <span
            className={cn(
              'font-heading font-medium leading-none tracking-[-0.01em] text-lg md:text-xl',
              onLight ? 'text-secondary-900' : 'text-white'
            )}
          >
            Dr.&nbsp;Yashasve
          </span>
          {showSubtext && (
            <p
              className={cn(
                'mt-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.28em] leading-none',
                onLight ? 'text-stone-500' : 'text-stone-300'
              )}
            >
              Dermatology
              <span
                className={cn(
                  'mx-1.5',
                  onLight ? 'text-primary-600' : 'text-primary-400'
                )}
                aria-hidden="true"
              >
                ·
              </span>
              Suseela Hospital
            </p>
          )}
        </div>
      )}
    </div>
  );
};

Logo.displayName = 'Logo';

/* ────────── The Mark ────────── */

interface LogoMarkProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export const LogoMark: React.FC<LogoMarkProps> = ({
  variant = 'dark',
  className,
}) => {
  const onLight = variant === 'dark';

  return (
    <div
      className={cn(
        'relative shrink-0 w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-105',
        onLight ? 'text-primary-600' : 'text-primary-400',
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" className="w-full h-full" role="img" aria-label="Dr. Yashasve Dermatology">
        {/* ─── Skin cross-section frame ───
            Circular disc as the mark's container — reads as the lens of
            a dermatoscope. Sage fill keeps the palette; the gold ring ties
            it to the brand. */}
        <circle
          cx="24" cy="24" r="22"
          fill={onLight ? 'var(--color-sage-200, #d4daca)' : 'var(--color-sage-600, #5f7052)'}
          stroke={onLight ? 'var(--color-primary-600, #ca8a04)' : 'var(--color-primary-400, #facc15)'}
          strokeWidth="0.9"
        />

        {/* ─── Epidermis — the skin surface line ───
            Subtle waves like a textbook cross-section. Divides the disc
            into the visible hair above, and the dermis (with cells +
            follicle) below. */}
        <path
          d="M 3 22
             Q 8 20.5 13 22
             T 23 22
             T 33 22
             T 45 22"
          fill="none"
          stroke={onLight ? 'var(--color-secondary-900, #1f1d18)' : 'var(--color-primary-100, #fef9c3)'}
          strokeWidth="0.75"
          strokeLinecap="round"
        />

        {/* ─── Sebaceous / adipose cells in the dermis ───
            Hollow ovals scattered below the surface — the textbook
            histology detail that signals 'skin biology' at a glance. */}
        <g
          fill="none"
          stroke={onLight ? 'var(--color-secondary-900, #1f1d18)' : 'var(--color-primary-100, #fef9c3)'}
          strokeWidth="0.55"
          opacity="0.7"
        >
          <ellipse cx="13" cy="29" rx="2.6" ry="1.6" />
          <ellipse cx="34.5" cy="28" rx="2.4" ry="1.5" />
          <ellipse cx="17" cy="36" rx="1.8" ry="1.2" />
          <ellipse cx="31" cy="36.5" rx="2" ry="1.3" />
        </g>

        {/* ─── Follicle bulb — the hair root, anchored at the bottom ─── */}
        <ellipse
          cx="24" cy="38.5" rx="2.3" ry="2.8"
          fill="none"
          stroke={onLight ? 'var(--color-secondary-900, #1f1d18)' : 'var(--color-primary-100, #fef9c3)'}
          strokeWidth="0.9"
        />

        {/* ─── Follicle shaft below the skin surface ─── */}
        <line
          x1="24" y1="35.7" x2="24" y2="22"
          stroke={onLight ? 'var(--color-secondary-900, #1f1d18)' : 'var(--color-primary-100, #fef9c3)'}
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        {/* ─── The Y — hair shaft emerging above the skin ───
            The hair's stem rises from the surface, then forks into two
            strands forming the Y. This is the mark's conceptual core:
            a follicle whose hair grows in the shape of the doctor's initial. */}
        <g
          stroke={onLight ? 'var(--color-secondary-900, #1f1d18)' : 'var(--color-primary-100, #fef9c3)'}
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        >
          {/* Stem of the Y — from skin surface up to fork */}
          <line x1="24" y1="22" x2="24" y2="14" />
          {/* Left arm */}
          <line x1="24" y1="14" x2="18.5" y2="6.5" />
          {/* Right arm */}
          <line x1="24" y1="14" x2="29.5" y2="6.5" />
        </g>
      </svg>
    </div>
  );
};

LogoMark.displayName = 'LogoMark';
