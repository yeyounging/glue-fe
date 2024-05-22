import { SVGProps } from 'react';

export default function PaginationLeft({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.3711 12.4425L7.93609 9L11.3711 5.5575L10.3136 4.5L5.81359 9L10.3136 13.5L11.3711 12.4425Z"
        fill="#C4CDD5"
      />
    </svg>
  );
}
