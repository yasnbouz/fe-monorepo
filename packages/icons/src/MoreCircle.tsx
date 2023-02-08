import * as React from 'react';
import { SVGProps } from 'react';
const SvgMoreCircle = (props: SVGProps<SVGSVGElement>) => (
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
      y={2}
      width={20}
      height={20}
      rx={10}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <circle cx={7.05} cy={12.05} r={1.25} fill="currentColor" />
    <circle cx={12.05} cy={12.05} r={1.25} fill="currentColor" />
    <circle cx={17.05} cy={12.05} r={1.25} fill="currentColor" />
  </svg>
);
export default SvgMoreCircle;
