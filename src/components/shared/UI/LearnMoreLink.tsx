import React from 'react';
import './LearnMoreLink.css';

interface LearnMoreLinkProps {
  href?: string;
  label?: string;
  className?: string;
  tone?: 'blue' | 'gradient' | 'muted';
  size?: 'small' | 'default';
  underlineHover?: 'medium' | 'full';
  fullWidth?: boolean;
}

export function LearnMoreLink({
  href = '#',
  label = 'LEARN MORE',
  className = '',
  tone = 'blue',
  size = 'default',
  underlineHover = 'medium',
  fullWidth = false,
}: LearnMoreLinkProps) {
  const classes = [
    'learn-more-link',
    `learn-more-link--${tone}`,
    `learn-more-link--${size}`,
    `learn-more-link--hover-${underlineHover}`,
    fullWidth ? 'learn-more-link--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a href={href} className={classes} aria-label={label}>
      <span className="learn-more-inner">
        <span>{label}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M0.000247543 5.78968H10.9177" stroke="currentColor" strokeWidth="0.935782" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.45898 0.331201L10.9177 5.78993L5.45898 11.2487" stroke="currentColor" strokeWidth="0.935782" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="learn-more-underline" aria-hidden="true" />
    </a>
  );
}
