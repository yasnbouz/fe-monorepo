import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8 8 3.293-3.293a1 1 0 0 1 1.414 0L16 8m-4-3v14"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgArrowUp;