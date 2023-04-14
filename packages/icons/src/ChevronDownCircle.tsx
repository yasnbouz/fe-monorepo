import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronDownCircle = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m8.8 10.7 2.517 2.71a1 1 0 0 0 1.466 0L15.3 10.7M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Z"
    />
  </svg>
);
export default SvgChevronDownCircle;
