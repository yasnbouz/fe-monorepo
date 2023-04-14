import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEdit2 = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M20.038 2.72a2.475 2.475 0 0 0-3.492.001L9.09 10.158a3.35 3.35 0 0 0-.982 2.231l-.106 2.513A2.017 2.017 0 0 0 10.02 17h2.472c.908 0 1.777-.365 2.41-1.013l7.396-7.579a2.455 2.455 0 0 0-.022-3.459L20.038 2.72Zm-2.54.95a1.125 1.125 0 0 1 1.588 0l2.238 2.229c.435.432.44 1.133.01 1.572L19.85 8.988 16.005 5.16l1.494-1.49Zm-2.445 2.44-5.01 4.997a2.01 2.01 0 0 0-.59 1.339l-.105 2.512c-.017.382.29.7.672.7h2.472c.545 0 1.066-.22 1.447-.608l4.97-5.1-3.856-3.84Z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21 13v4a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5h4"
    />
  </svg>
);
export default SvgEdit2;
