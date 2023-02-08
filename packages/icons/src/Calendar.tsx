import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <rect
      x={3}
      y={3.5}
      width={18}
      height={18}
      rx={5}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M3 8.5h18"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <path
      d="M16.5 2v3m-9-3v3m-1 7.5h1m4 0h1m4 0h1m-11 4h1m4 0h1m4 0h1"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCalendar;
