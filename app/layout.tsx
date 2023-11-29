import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { roboto_mono } from './util/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'wander-map',
  description: 'Adventures on a map'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full w-full p0 m0">
      <body className={`h-full w-full p0 m0 ${roboto_mono.className}`}>
        {children}
      </body>
    </html>
  );
}
