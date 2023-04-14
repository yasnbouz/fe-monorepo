import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 16v2a4 4 0 0 0 4 4h5a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4h-5a4 4 0 0 0-4 4v2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14 15 2.293-2.293a1 1 0 0 0 0-1.414L14 9m2 3H4"
    />
  </svg>
);
export default SvgLogin;
