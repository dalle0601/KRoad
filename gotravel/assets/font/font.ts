import { Noto_Sans_KR, Yeon_Sung } from 'next/font/google';

const addFontClass = (...classnames: string[]) => {
  return classnames.join(' ');
};

const defaultFont = Noto_Sans_KR({
  variable: '--default-font',
  subsets: ['latin'],
  weight: ['100', '400', '500', '600', '700', '900'],
});

const logoFont = Yeon_Sung({
  variable: '--logo-font',
  subsets: ['latin'],
  weight: '400',
});

export const FontClassNames = addFontClass(
  defaultFont.className,
  logoFont.variable,
);
