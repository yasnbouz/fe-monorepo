import {
  cloneElement,
  Children,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cn } from '../../utils';

interface IconProps {
  children?: ReactNode;
  /** The Size for the icon */
  size?: 'sm' | 'md';
  className?: string;
}
export function Icon({ size = 'md', className, children }: IconProps) {
  const icon = Children.only(children);
  const iconClass = cn(
    'flex-shrink-0',
    size === 'md' && '!w-6 !h-6',
    size !== 'md' && '!w-4 !h-4',
    className,
  );
  return cloneElement(icon as ReactElement, {
    viewBox: '0 0 24 24',
    className: iconClass,
  });
}
