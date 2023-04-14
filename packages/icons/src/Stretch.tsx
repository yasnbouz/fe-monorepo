import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStretch = (props: SVGProps<SVGSVGElement>) => (
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
      fill="currentColor"
      d="M8.22 19.887 19.887 8.22a.75.75 0 0 1 1.06 1.06L9.28 20.948a.75.75 0 1 1-1.06-1.061Zm5.228-.429 5.674-5.673a.75.75 0 1 1 1.06 1.06l-5.674 5.674a.75.75 0 0 1-1.06-1.06Z"
    />
  </svg>
);
export default SvgStretch;
