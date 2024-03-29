import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSwap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.071 8a8 8 0 0 1 14.237.746M3.231 5.516l.73 3.159a1 1 0 0 0 1.2.75l3.159-.73M18.928 16a8 8 0 0 1-14.237-.746m16.077 3.23-.73-3.159a1 1 0 0 0-1.199-.75l-3.16.73"
    />
  </svg>
);
export default SvgSwap;
