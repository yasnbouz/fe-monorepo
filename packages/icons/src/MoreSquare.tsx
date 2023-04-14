import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMoreSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <rect
      width={20}
      height={20}
      x={2}
      y={2}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={5}
    />
    <circle cx={7.05} cy={12.05} r={1.25} fill="currentColor" />
    <circle cx={12.05} cy={12.05} r={1.25} fill="currentColor" />
    <circle cx={17.05} cy={12.05} r={1.25} fill="currentColor" />
  </svg>
);
export default SvgMoreSquare;
