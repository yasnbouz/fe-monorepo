import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHSwap = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8 19-2.293-2.293a1 1 0 0 1 0-1.414L8 13m-2 3h12m-1-6 2.293-2.293a1 1 0 0 0 0-1.414L17 4m2 3H7"
    />
  </svg>
);
export default SvgHSwap;
