import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDocumentAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 12V8.724a2 2 0 0 0-.464-1.28L14.6 2.72A2 2 0 0 0 13.063 2H7a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 19h6m-3-3v6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 2.5V6a2 2 0 0 0 2 2h2.5"
    />
  </svg>
);
export default SvgDocumentAdd;
