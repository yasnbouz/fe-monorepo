import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m16.414 13.728 2.121-2.121a5 5 0 0 0 0-7.071v0a5 5 0 0 0-7.07 0L9.342 6.657m4.243 9.9-2.122 2.12a5 5 0 0 1-7.07 0v0a5 5 0 0 1 0-7.07l2.12-2.122"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.586 9.485-4.243 4.243"
    />
  </svg>
);
export default SvgLink;
