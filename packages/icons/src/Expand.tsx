import * as React from 'react';
import { SVGProps } from 'react';
const SvgExpand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.615 19.385H5a1 1 0 0 1-1-1v-3.616m.77 3.847 5.384-5.385m9.23-4.616V5a1 1 0 0 0-1-1H14.77m3.846.769-5.384 5.385"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgExpand;
