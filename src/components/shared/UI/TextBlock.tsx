import React from 'react';
import './TextBlock.css';

type TextBlockVariant =
  | 'hero'
  | 'display'
  | 'section'
  | 'medium'
  | 'subheading'
  | 'card'
  | 'feature'
  | 'article'
  | 'article-large'
  | 'showcase';
type TextTone = 'light' | 'dark';
type TextAlign = 'left' | 'center';
type TextGap = 'none' | 'xs' | 'sm' | 'md' | 'lg';

interface TextBlockProps {
  heading: React.ReactNode;
  description?: React.ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: TextBlockVariant;
  tone?: TextTone;
  align?: TextAlign;
  gap?: TextGap;
  id?: string;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  descriptionMaxWidth?: string;
}

export function TextBlock({
  heading,
  description,
  headingLevel = 2,
  variant = 'section',
  tone = 'light',
  align = 'left',
  gap,
  id,
  className = '',
  headingClassName = '',
  descriptionClassName = '',
  descriptionMaxWidth,
}: TextBlockProps) {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;
  const style = descriptionMaxWidth
    ? ({ '--text-description-max': descriptionMaxWidth } as React.CSSProperties)
    : undefined;
  const classes = [
    'text-block',
    `text-block--${variant}`,
    `text-block--${tone}`,
    `text-block--align-${align}`,
    gap ? `text-block--gap-${gap}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      <HeadingTag id={id} className={`text-block__heading ${headingClassName}`.trim()}>
        {heading}
      </HeadingTag>
      {description && (
        <p className={`text-block__description ${descriptionClassName}`.trim()}>
          {description}
        </p>
      )}
    </div>
  );
}
