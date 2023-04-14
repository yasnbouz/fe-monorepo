import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLockOpen = (props: SVGProps<SVGSVGElement>) => (
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
      width={16}
      height={12}
      x={4}
      y={9}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16v-2"
    />
    <path
      fill="currentColor"
      d="M14.667 5.142a.75.75 0 0 0 1.23-.857l-1.23.857ZM8.278 4.05a.75.75 0 1 0 1.175.932L8.278 4.05ZM8.75 9V7h-1.5v2h1.5Zm0-2A3.25 3.25 0 0 1 12 3.75v-1.5A4.75 4.75 0 0 0 7.25 7h1.5Zm7.148-2.715a4.75 4.75 0 0 0-2.307-1.76l-.503 1.413a3.25 3.25 0 0 1 1.579 1.204l1.23-.857Zm-2.307-1.76a4.75 4.75 0 0 0-2.901-.09l.414 1.441a3.25 3.25 0 0 1 1.984.062l.503-1.414Zm-2.901-.09a4.75 4.75 0 0 0-2.412 1.614l1.175.932a3.25 3.25 0 0 1 1.65-1.105l-.413-1.442Z"
    />
  </svg>
);
export default SvgLockOpen;
