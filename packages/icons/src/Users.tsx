import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle
      r={3.404}
      stroke="currentColor"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 12.213 8.404)"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M6.255 16.86c0-.733.46-1.386 1.15-1.632a14.294 14.294 0 0 1 9.615 0c.69.246 1.15.9 1.15 1.631v1.12a1.66 1.66 0 0 1-1.895 1.644l-.334-.048a26.363 26.363 0 0 0-7.457 0l-.333.048a1.66 1.66 0 0 1-1.896-1.644v-1.12Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.32 11.903a2.675 2.675 0 0 0 0-5.35m2.929 11.452.262.037A1.305 1.305 0 0 0 22 16.751v-.88c0-.575-.362-1.088-.904-1.282a11.23 11.23 0 0 0-1.65-.45M6.68 11.903a2.675 2.675 0 0 1 0-5.35M3.751 18.005l-.262.037A1.305 1.305 0 0 1 2 16.751v-.88c0-.575.362-1.088.904-1.282a11.1 11.1 0 0 1 1.65-.45"
    />
  </svg>
);
export default SvgUsers;
