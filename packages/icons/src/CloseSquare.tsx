import * as React from 'react';
import { SVGProps } from 'react';
const SvgCloseSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <rect
      x={2}
      y={2}
      width={20}
      height={20}
      rx={5}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="m9.879 14.121 4.243-4.242m-4.243 0 4.243 4.243"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCloseSquare;
