import type { Metadata } from 'next';
import { Inter, Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeProvider';
import { LanguageProvider } from '@/context/LanguageProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: 'Sung-Jin Kim | AI Researcher & Engineer',
  description:
    'Ph.D. student at Korea University AI Lab. 18x award winner, SW Maestro, startup founder. Specializing in computer vision and BCI research.',
  keywords: [
    'Sung-Jin Kim',
    '김성진',
    'AI Researcher',
    'Korea University',
    'Computer Vision',
    'BCI',
    'Deep Learning',
    'Portfolio',
  ],
  authors: [{ name: 'Sung-Jin Kim', url: 'https://github.com/comojin1994' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://comojin1994.github.io/comojin1994',
    title: 'Sung-Jin Kim | AI Researcher & Engineer',
    description:
      'Ph.D. student at Korea University AI Lab. 18x award winner, SW Maestro, startup founder.',
    siteName: 'Sung-Jin Kim Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sung-Jin Kim | AI Researcher & Engineer',
    description: 'Ph.D. student at Korea University AI Lab. 18x award winner.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansKR.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
