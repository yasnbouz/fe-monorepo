import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronRightCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.7 15.2 2.71-2.517a1 1 0 0 0 0-1.466L10.7 8.7M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
  </svg>
);
export default SvgChevronRightCircle;
