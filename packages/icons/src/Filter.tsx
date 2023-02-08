import * as React from 'react';
import { SVGProps } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.818a3 3 0 0 1-.807 2.046l-5.655 6.06A2 2 0 0 0 15 14.288v4.094a1 1 0 0 1-.553.894l-4 2A1 1 0 0 1 9 20.382v-6.094a2 2 0 0 0-.538-1.364l-5.655-6.06A3 3 0 0 1 2 4.818V4Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgFilter;
