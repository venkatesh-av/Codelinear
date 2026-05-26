import React from 'react';
import frame55Stars from '../../../assets/Frame 55.svg';

interface GeometricFourStarsProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
}

export default function GeometricFourStars({
  width = 258,
  height = 219,
  className = '',
  color = '#00B4FD',
}: GeometricFourStarsProps) {
  const mask = `url("${frame55Stars}") center / contain no-repeat`;
  const classes = ['geometric-four-stars', className].filter(Boolean).join(' ');
  const style = {
    width,
    height,
    backgroundColor: color,
    display: 'block',
    flexShrink: 0,
    mask,
    WebkitMask: mask,
  } as React.CSSProperties;

  return (
    <span className={classes} style={style} aria-hidden="true" />
  );
}
