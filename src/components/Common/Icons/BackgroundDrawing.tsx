import { SVGProps } from 'react';

export default function BackgroundDrawing({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="465"
      height="163"
      viewBox="0 0 465 163"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1"
        y="61.0312"
        width="395"
        height="60"
        rx="30"
        transform="rotate(-8.88829 1 61.0312)"
        fill="#F08D53"
      />
      <rect
        x="1.47656"
        y="56"
        width="463.508"
        height="60"
        rx="30"
        transform="rotate(1.41122 1.47656 56)"
        fill="#F08D53"
      />
      <rect
        x="47"
        y="102.795"
        width="335.109"
        height="60"
        rx="30"
        transform="rotate(-6.64786 47 102.795)"
        fill="#F08D53"
      />
    </svg>
  );
}
