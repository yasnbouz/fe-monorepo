import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowRightSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13 15 2.293-2.293a1 1 0 0 0 0-1.414L13 9m2 3H8m9 10H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5Z"
    />
  </svg>
);
export default SvgArrowRightSquare;
