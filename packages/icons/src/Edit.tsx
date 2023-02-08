import * as React from 'react';
import { SVGProps } from 'react';
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.514 3.806a2.747 2.747 0 0 1 3.887-.002l2.492 2.492a2.753 2.753 0 0 1 .025 3.867l-9.233 9.473A3.747 3.747 0 0 1 8 20.768H5.25a2.25 2.25 0 0 1-2.247-2.345l.118-2.81c.04-.938.43-1.828 1.094-2.493l9.3-9.314Zm2.828 1.06a1.249 1.249 0 0 0-1.768 0l-1.663 1.666 4.28 4.28 1.654-1.697a1.251 1.251 0 0 0-.012-1.757l-2.491-2.492ZM5.274 14.18l6.577-6.587 4.293 4.292-6.533 6.703a2.248 2.248 0 0 1-1.61.679H5.25a.75.75 0 0 1-.749-.782l.118-2.81a2.252 2.252 0 0 1 .656-1.495Zm15.24 6.514a.75.75 0 0 0 0-1.5h-6.12a.75.75 0 0 0 0 1.5h6.12Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEdit;
