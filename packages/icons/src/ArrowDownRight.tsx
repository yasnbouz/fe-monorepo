import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowDownRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.146 17.303h4.657a1 1 0 0 0 1-1v-4.657m-.707 4.95-9.9-9.9"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgArrowDownRight;
