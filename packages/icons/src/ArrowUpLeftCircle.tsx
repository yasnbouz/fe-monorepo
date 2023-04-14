import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowUpLeftCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.414 9.172h-3.242a1 1 0 0 0-1 1v3.242m.707-3.535 4.95 4.95M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
    />
  </svg>
);
export default SvgArrowUpLeftCircle;
