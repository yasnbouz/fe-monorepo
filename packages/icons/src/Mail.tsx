import * as React from 'react';
import { SVGProps } from 'react';
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
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
      x={2}
      y={4}
      width={20}
      height={16}
      rx={5}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="m6 9 4.8 3.6a2 2 0 0 0 2.4 0L18 9"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMail;
