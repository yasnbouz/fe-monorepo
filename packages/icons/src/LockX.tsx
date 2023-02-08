import * as React from 'react';
import { SVGProps } from 'react';
const SvgLockX = (props: SVGProps<SVGSVGElement>) => (
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
      x={4}
      y={9}
      width={16}
      height={12}
      rx={4}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="m10.121 17 4-4m-4 0 4 4"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M16 9V7a4 4 0 1 0-8 0v2" stroke="currentColor" strokeWidth={1.5} />
  </svg>
);
export default SvgLockX;
