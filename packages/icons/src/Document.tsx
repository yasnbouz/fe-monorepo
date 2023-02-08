import * as React from 'react';
import { SVGProps } from 'react';
const SvgDocument = (props: SVGProps<SVGSVGElement>) => (
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
      y={2}
      width={16}
      height={20}
      rx={4}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M8 7h8m-8 5h8m-8 5h4"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgDocument;
