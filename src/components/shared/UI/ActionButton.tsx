import React from 'react';
import './ActionButton.css';

type ActionButtonVariant = 'primary' | 'solid' | 'outline' | 'nav' | 'icon-outline';
type ActionButtonSize = 'hero' | 'hero-outline' | 'cta' | 'cta-wide' | 'nav' | 'icon' | 'compact';
type ActionButtonHover =
  | 'blue-invert'
  | 'accent-invert'
  | 'dark-invert'
  | 'text-dark'
  | 'soft'
  | 'icon'
  | 'none';

interface ActionButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: ActionButtonVariant;
  size?: ActionButtonSize;
  hover?: ActionButtonHover;
  className?: string;
  ariaLabel?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

export function ActionButton({
  children,
  href,
  type = 'button',
  variant = 'primary',
  size = 'cta',
  hover = 'blue-invert',
  className = '',
  ariaLabel,
  fullWidth = false,
  disabled = false,
  target,
  rel,
  onClick,
}: ActionButtonProps) {
  const classes = [
    'action-button',
    `action-button--variant-${variant}`,
    `action-button--size-${size}`,
    `action-button--hover-${hover}`,
    fullWidth ? 'action-button--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      {children}
    </button>
  );
}
