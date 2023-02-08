import * as React from 'react';
import { SVGProps } from 'react';
const SvgDocumentAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 12V8.724a2 2 0 0 0-.464-1.28L14.6 2.72A2 2 0 0 0 13.063 2H7a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M16 19h6m-3-3v6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2.5V6a2 2 0 0 0 2 2h2.5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgDocumentAdd;
