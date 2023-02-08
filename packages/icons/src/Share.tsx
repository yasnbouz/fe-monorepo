import * as React from 'react';
import { SVGProps } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
      d="m15 6-7 4m-.5 3.5L15 18"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
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
