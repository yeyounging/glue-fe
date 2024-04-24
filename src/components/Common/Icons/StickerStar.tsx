import { SVGProps } from 'react';

export default function StickerStar({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2743_1872)">
        <path
          d="M7.9987 1.33398L10.0587 5.50732L14.6654 6.18065L11.332 9.42732L12.1187 14.014L7.9987 11.8473L3.8787 14.014L4.66536 9.42732L1.33203 6.18065L5.9387 5.50732L7.9987 1.33398Z"
          fill="#F08D53"
          stroke="#F08D53"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2743_1872">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
