import { SVGProps } from 'react';

export default function Close({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      {...props}
    >
      <path
        d="M1 21.9824L14.9862 1.99895"
        stroke="#6D6969"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1.01172 2.01758L14.998 22.0011"
        stroke="#6D6969"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
