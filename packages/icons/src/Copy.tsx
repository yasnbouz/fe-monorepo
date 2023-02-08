import * as React from 'react';
import { SVGProps } from 'react';
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
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
      x={5}
      y={3}
      width={10}
      height={14}
      rx={3}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M17.5 7.401A2.999 2.999 0 0 1 19 10v8a3 3 0 0 1-3 3h-4a3 3 0 0 1-2.599-1.5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgCopy;
