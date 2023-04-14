import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <rect
      width={18}
      height={18}
      x={3}
      y={3.5}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={5}
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 8.5h18"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.5 2v3m-9-3v3m-1 7.5h1m4 0h1m4 0h1m-11 4h1m4 0h1m4 0h1"
    />
  </svg>
);
export default SvgCalendar;
