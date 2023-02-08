import * as React from 'react';
import { SVGProps } from 'react';
const SvgSave = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a4 4 0 0 1 4-4h8.757a3 3 0 0 1 2.122.879L21.12 7.12A3 3 0 0 1 22 9.243V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M6 15a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7H6v-7ZM8 2v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgSave;
