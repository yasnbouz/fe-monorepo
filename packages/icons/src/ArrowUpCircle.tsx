import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowUpCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 11 2.293-2.293a1 1 0 0 1 1.414 0L15 11m-3-2v7M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
    />
  </svg>
);
export default SvgArrowUpCircle;
