import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle
      cx={17.5}
      cy={4.5}
      r={2.5}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <circle
      cx={5.5}
      cy={11.5}
      r={2.5}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15 6-7 4m-.5 3.5L15 18"
    />
    <circle
      cx={17.5}
      cy={19.5}
      r={2.5}
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgShare;
