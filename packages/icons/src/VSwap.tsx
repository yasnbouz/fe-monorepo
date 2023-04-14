import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVSwap = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 8 2.293-2.293a1 1 0 0 1 1.414 0L11 8M8 6v12m6-1 2.293 2.293a1 1 0 0 0 1.414 0L20 17m-3 2V7"
    />
  </svg>
);
export default SvgVSwap;
