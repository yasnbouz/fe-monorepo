import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.146 6.697h4.657a1 1 0 0 1 1 1v4.657m-.707-4.95-9.9 9.9"
    />
  </svg>
);
export default SvgArrowUpRight;
