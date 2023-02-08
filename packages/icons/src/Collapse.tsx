import * as React from 'react';
import { SVGProps } from 'react';
const SvgCollapse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.846 13.538h3.615a1 1 0 0 1 1 1v3.616m-.769-3.847-5.384 5.385m9.23-13.845v3.615a1 1 0 0 0 1 1h3.616m-3.847-.769 5.385-5.385"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgCollapse;
