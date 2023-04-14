import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 16v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2m3 7 2.293-2.293a1 1 0 0 0 0-1.414L19 9m2 3H9"
    />
  </svg>
);
export default SvgLogout;
