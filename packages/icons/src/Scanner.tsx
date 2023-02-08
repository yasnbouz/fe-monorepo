import * as React from 'react';
import { SVGProps } from 'react';
const SvgScanner = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 8.85V7a4 4 0 0 0-4-4h-1.85M21 15.15V17a4 4 0 0 1-4 4h-1.85m-6.3 0H7a4 4 0 0 1-4-4v-1.85m0-6.3V7a4 4 0 0 1 4-4h1.85"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M22 12H2"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgScanner;
