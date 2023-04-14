import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLink2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.04 12.96a3.5 3.5 0 0 0 4.95 0l3.535-3.535a3.5 3.5 0 0 0-4.95-4.95l-1.767 1.768"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.868 10.132a3.5 3.5 0 0 0-4.95 0l-3.535 3.535a3.5 3.5 0 0 0 4.95 4.95l1.768-1.768"
    />
  </svg>
);
export default SvgLink2;
