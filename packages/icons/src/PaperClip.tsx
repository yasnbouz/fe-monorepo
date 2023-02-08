import * as React from 'react';
import { SVGProps } from 'react';
const SvgPaperClip = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18.264 11.9-6.718 6.717a4.5 4.5 0 0 1-6.364 0v0a4.5 4.5 0 0 1 0-6.364l8.132-8.132a3 3 0 0 1 4.242 0v0a3 3 0 0 1 0 4.243l-8.232 8.233a1.5 1.5 0 0 1-2.122 0v0a1.5 1.5 0 0 1 0-2.122l6.819-6.818"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgPaperClip;
