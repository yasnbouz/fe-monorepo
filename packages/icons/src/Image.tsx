import * as React from 'react';
import type { SVGProps } from 'react';
const SvgImage = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m2.5 17.5 2.26-1.614a1.8 1.8 0 0 1 2.318.192l1.073 1.073a1.2 1.2 0 0 0 1.698 0l4.989-4.989a1.8 1.8 0 0 1 2.425-.11L22 16"
    />
    <circle
      r={2}
      stroke="currentColor"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 8 8)"
    />
  </svg>
);
export default SvgImage;
