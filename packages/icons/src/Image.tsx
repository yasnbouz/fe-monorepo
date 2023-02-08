import * as React from 'react';
import { SVGProps } from 'react';
const SvgImage = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2.5 17.5 2.26-1.614a1.8 1.8 0 0 1 2.318.192l1.073 1.073a1.2 1.2 0 0 0 1.698 0l4.989-4.989a1.8 1.8 0 0 1 2.425-.11L22 16"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <circle
      r={2}
      transform="matrix(-1 0 0 1 8 8)"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgImage;
