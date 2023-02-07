import React from 'react';
import { clsx } from 'clsx';

interface IconProps {
  children?: React.ReactNode;
  /** The Size for the icon */
  size?: 'sm' | 'md';
  className?: string;
}
export function Icon({ size = 'md', className, children }: IconProps) {
  const icon = React.Children.only(children);
  const iconClass = clsx(
    'flex-shrink-0',
    size === 'md' && '!w-6 !h-6',
    size !== 'md' && '!w-4 !h-4',
    className,
  );
  return React.cloneElement(icon as React.ReactElement, {
    viewBox: '0 0 24 24',
    className: iconClass,
  });
}
