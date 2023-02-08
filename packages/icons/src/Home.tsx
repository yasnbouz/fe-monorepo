import * as React from 'react';
import { SVGProps } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 10.938a4 4 0 0 1 1.521-3.14l5.5-4.341a4 4 0 0 1 4.958 0l5.5 4.342a4 4 0 0 1 1.521 3.14V17.5a4 4 0 0 1-4 4H16a1 1 0 0 1-1-1v-3a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3a1 1 0 0 1-1 1H6.5a4 4 0 0 1-4-4v-6.562Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgHome;
