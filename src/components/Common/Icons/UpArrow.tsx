import { SVGProps } from 'react';

export default function UpArrow({
  color = '#212121',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      {...props}
    >
      <path
        d="M1 17.3604L17 1.36035"
        stroke="#5D5A88"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17 16.4453V1.36046H1.91515"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
