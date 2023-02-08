import * as React from 'react';
import { SVGProps } from 'react';
const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17.719 9.527 2.125 1.15.445.25c.948.533.948 1.905 0 2.438l-6.037 3.392a4.595 4.595 0 0 1-4.504 0L3.71 13.365c-.948-.533-.948-1.905 0-2.438l.445-.25 2.007-1.15m12.018 5.12 1.932.971c.996.502 1.028 1.922.056 2.468l-5.917 3.324a4.596 4.596 0 0 1-4.504 0l-5.83-3.275c-.99-.556-.935-2.007.093-2.486l2.152-1.003m8.09-2.835 6.036-3.391c.948-.533.948-1.906 0-2.439L14.252 2.59a4.595 4.595 0 0 0-4.504 0L3.71 5.98c-.948.533-.948 1.906 0 2.439l6.037 3.391c1.4.787 3.104.787 4.505 0Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgLayers;
