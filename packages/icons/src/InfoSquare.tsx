import * as React from 'react';
import type { SVGProps } from 'react';
const SvgInfoSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.5 17v-6m-2 0h2m0-3V7"
    />
  </svg>
);
export default SvgInfoSquare;
