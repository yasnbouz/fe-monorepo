import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M3.2 12.784a1.634 1.634 0 0 1 0-1.569A10.019 10.019 0 0 1 12 6c3.797 0 7.1 2.108 8.8 5.216.267.489.267 1.08 0 1.569A10.019 10.019 0 0 1 12 18a10.02 10.02 0 0 1-8.8-5.216Z"
    />
    <circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} />
  </svg>
);
export default SvgEye;
