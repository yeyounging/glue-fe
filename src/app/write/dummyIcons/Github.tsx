import { SVGProps } from 'react';

export default function Github({
  selected = false,
  ...props
}: SVGProps<SVGSVGElement> & { selected?: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.9995 22V18C15.1395 16.75 14.7795 15.49 13.9995 14.5C16.9995 14.5 19.9995 12.5 19.9995 9C20.0795 7.75 19.7295 6.52 18.9995 5.5C19.2795 4.35 19.2795 3.15 18.9995 2C18.9995 2 17.9995 2 15.9995 3.5C13.3595 3 10.6395 3 7.99948 3.5C5.99948 2 4.99948 2 4.99948 2C4.69948 3.15 4.69948 4.35 4.99948 5.5C4.26948 6.52 3.91948 7.75 3.99948 9C3.99948 12.5 6.99948 14.5 9.99948 14.5C9.60948 14.99 9.31948 15.55 9.14948 16.15C8.97948 16.75 8.92948 17.38 8.99948 18V22"
        stroke={selected ? 'red' : '#212121'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 18C4.49 20 4 16 2 16"
        stroke={selected ? 'red' : '#212121'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
