import { SVGProps } from 'react';

export default function PaginationRight({ ...props }: SVGProps<SVGSVGElement>) {
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
        d="M6.62891 5.5575L10.0639 9L6.62891 12.4425L7.68641 13.5L12.1864 9L7.68641 4.5L6.62891 5.5575Z"
        fill="#C4CDD5"
      />
    </svg>
  );
}
