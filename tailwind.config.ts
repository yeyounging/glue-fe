import type { Config } from 'tailwindcss';

const px0To10 = {
  ...Array.from(Array(11)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }),
    {},
  ),
};
const px0To100 = {
  ...Array.from(Array(101)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }),
    {},
  ),
};
const px0To500 = {
  ...Array.from(Array(501)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }),
    {},
  ),
};

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#F08D53',
      transparent: 'transparent',
      white: '#ffffff',
    },
    extend: {
      width: px0To500,
      height: px0To500,
      borderWidth: px0To10,
      fontSize: px0To100,
      lineHeight: px0To100,
      minWidth: px0To500,
      minHeight: px0To500,
      spacing: px0To500,
      borderRadius: { ...px0To100, button: 6 },
      boxShadow: {
        background: '0 0 10px 2px rgba(0, 0, 0, 0.09)',
        card: '0px 0px 10px 3px rgba(255, 255, 255, 0.25)',
      },
    },
    fontFamily: {
      luckiest: 'var(--luckiest)',
      pretendard: 'var(--pretendard)',
    },
  },
  plugins: [],
};
export default config;
