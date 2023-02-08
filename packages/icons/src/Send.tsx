import * as React from 'react';
import { SVGProps } from 'react';
const SvgSend = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.723 2.759a1.2 1.2 0 0 1 1.518 1.518l-5.056 15.17c-.329.985-1.669 1.116-2.182.213l-3.095-5.443a3 3 0 0 0-1.125-1.125L4.34 9.997c-.903-.513-.772-1.853.213-2.181l15.17-5.057Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="m12.786 11.214-2 2"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSend;
