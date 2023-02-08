import * as React from 'react';
import { SVGProps } from 'react';
const SvgLink2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.04 12.96a3.5 3.5 0 0 0 4.95 0l3.535-3.535a3.5 3.5 0 0 0-4.95-4.95l-1.767 1.768"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M12.868 10.132a3.5 3.5 0 0 0-4.95 0l-3.535 3.535a3.5 3.5 0 0 0 4.95 4.95l1.768-1.768"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgLink2;
