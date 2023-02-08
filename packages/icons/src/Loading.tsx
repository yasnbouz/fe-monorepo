import * as React from 'react';
import { SVGProps } from 'react';
const SvgLoading = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2v3m0 14v3m10-10h-3M5 12H2m17.071-7.071L16.95 7.05m-9.9 9.9-2.121 2.121m0-14.142L7.05 7.05m9.9 9.9 2.12 2.121"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLoading;
