import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronLeftCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.3 8.8-2.71 2.517a1 1 0 0 0 0 1.466L13.3 15.3M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
    />
  </svg>
);
export default SvgChevronLeftCircle;
