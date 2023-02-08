import * as React from 'react';
import { SVGProps } from 'react';
const SvgFilter2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M21 7H11"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      r={2}
      transform="matrix(-1 0 0 1 5 7)"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M3 17h10"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={19} cy={17} r={2} stroke="currentColor" strokeWidth={1.5} />
  </svg>
);
export default SvgFilter2;
