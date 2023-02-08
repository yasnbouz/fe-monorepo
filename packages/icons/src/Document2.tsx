import * as React from 'react';
import { SVGProps } from 'react';
const SvgDocument2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 6a4 4 0 0 1 4-4h6.063a2 2 0 0 1 1.537.72l3.936 4.724A2 2 0 0 1 20 8.724V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M15 2.5V6a2 2 0 0 0 2 2h2.5M8 12h8m-8 5h4"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgDocument2;
