import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBurger = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 6H4m16 6H4m16 6H4"
    />
  </svg>
);
export default SvgBurger;
