import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDanger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M2 17.926c0-.607.155-1.205.45-1.736L8.636 5.056a3.849 3.849 0 0 1 4.12-1.905 3.849 3.849 0 0 1 2.608 1.905L21.55 16.19a3.574 3.574 0 0 1-3.124 5.31H5.574A3.574 3.574 0 0 1 2 17.926Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9v4m0 3v.5"
    />
  </svg>
);
export default SvgDanger;
