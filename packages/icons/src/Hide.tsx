import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHide = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20.8 11.216.657-.36-.658.36Zm0 1.569.657.36-.658-.36Zm-17.6-1.57.659.36-.658-.36Zm0 1.57-.657.36.658-.36Zm16.324-4.476a.75.75 0 0 0-1.048 1.074l1.048-1.074Zm-9.838 8.65a.75.75 0 1 0-.372 1.454l.372-1.453Zm4.918-10.618-.194.725.194-.725ZM7.073 16.71l-.37.653.802-1.266-.432.613Zm-3.214-5.134A9.269 9.269 0 0 1 12 6.75v-1.5a10.769 10.769 0 0 0-9.457 5.606l1.316.72Zm16.282.85A9.269 9.269 0 0 1 12 17.25v1.5c4.081 0 7.631-2.267 9.457-5.606l-1.316-.72Zm0-.85a.885.885 0 0 1 0 .85l1.316.72c.39-.714.39-1.576 0-2.29l-1.316.72Zm-17.598-.72a2.384 2.384 0 0 0 0 2.29l1.316-.72a.885.885 0 0 1 0-.85l-1.316-.72Zm15.933-1.472a9.288 9.288 0 0 1 1.665 2.192l1.317-.72a10.79 10.79 0 0 0-1.934-2.546l-1.048 1.074ZM12 17.25c-.8 0-1.575-.1-2.314-.29l-.372 1.453c.86.22 1.76.337 2.686.337v-1.5Zm0-10.5c.835 0 1.642.11 2.41.316l.388-1.45A10.799 10.799 0 0 0 12 5.25v1.5Zm-6.07 8.24a9.298 9.298 0 0 1-2.071-2.565l-1.316.72a10.795 10.795 0 0 0 2.405 2.98l.982-1.135Zm1.512 1.066A9.296 9.296 0 0 1 5.93 14.99l-.982 1.134c.54.468 1.129.884 1.756 1.238l.738-1.306Zm-2.435.114 1.634 1.152.864-1.226-1.634-1.152-.864 1.226Zm9.403-9.104c.717.192 1.4.468 2.037.816l.72-1.316a10.714 10.714 0 0 0-2.369-.95l-.388 1.45Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.464 4.464-15 15"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 12a3 3 0 0 1 3-3"
    />
  </svg>
);
export default SvgHide;
