import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloseSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <rect
      width={20}
      height={20}
      x={2}
      y={2}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={5}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.879 14.121 4.243-4.242m-4.243 0 4.243 4.243"
    />
  </svg>
);
export default SvgCloseSquare;
