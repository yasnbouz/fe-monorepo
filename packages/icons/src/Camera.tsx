import * as React from 'react';
import { SVGProps } from 'react';
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 10.457A3.956 3.956 0 0 1 5.956 6.5a1.58 1.58 0 0 0 1.455-.96l.31-.722A3 3 0 0 1 10.478 3h3.044a3 3 0 0 1 2.757 1.818l.31.723c.25.582.822.959 1.455.959A3.956 3.956 0 0 1 22 10.457V15.5a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-5.043Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <circle
      r={3}
      transform="matrix(-1 0 0 1 12 12.5)"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgCamera;
