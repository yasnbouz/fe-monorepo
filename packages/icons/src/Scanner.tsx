import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScanner = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 8.85V7a4 4 0 0 0-4-4h-1.85M21 15.15V17a4 4 0 0 1-4 4h-1.85m-6.3 0H7a4 4 0 0 1-4-4v-1.85m0-6.3V7a4 4 0 0 1 4-4h1.85"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 12H2"
    />
  </svg>
);
export default SvgScanner;
