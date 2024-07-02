import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/MainHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next News',
  description:
    'Next News is a news website built with Next.js for next-generation news.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='forest'>
      <body className={inter.className}>
        <MainHeader />
        <div className='container mx-auto py-4 px-2'>{children}</div>
      </body>
    </html>
  );
}
