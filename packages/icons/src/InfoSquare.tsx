import * as React from 'react';
import { SVGProps } from 'react';
const SvgInfoSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.5 17v-6m-2 0h2m0-3V7"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgInfoSquare;
