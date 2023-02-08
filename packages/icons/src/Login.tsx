import * as React from 'react';
import { SVGProps } from 'react';
const SvgLogin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 16v2a4 4 0 0 0 4 4h5a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4h-5a4 4 0 0 0-4 4v2"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="m14 15 2.293-2.293a1 1 0 0 0 0-1.414L14 9m2 3H4"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgLogin;
