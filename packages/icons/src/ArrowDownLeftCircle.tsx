import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowDownLeftCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M13.414 14.828h-3.242a1 1 0 0 1-1-1v-3.242m.707 3.535 4.95-4.95M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgArrowDownLeftCircle;