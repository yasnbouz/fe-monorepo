import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M20 10.417c0 5.428-6.4 11.083-8 11.083-1.6 0-8-5.655-8-11.083C4 6.044 7.582 2.5 12 2.5s8 3.544 8 7.917Z"
    />
    <circle
      r={3}
      stroke="currentColor"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 12 10)"
    />
  </svg>
);
export default SvgLocation;
