import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFilter2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 7H11"
    />
    <circle
      r={2}
      stroke="currentColor"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 5 7)"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 17h10"
    />
    <circle cx={19} cy={17} r={2} stroke="currentColor" strokeWidth={1.5} />
  </svg>
);
export default SvgFilter2;
