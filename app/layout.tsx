import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://algorithmsofquality.com'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Algorithms of Quality',
    template: '%s | Algorithms of Quality'
  },
  description: 'Exploring the intersection of perception, physics, and linguistics to develop algorithms of Quality.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between relative w-full">
              <main className="w-full md:flex-1 md:min-w-0 pr-0 md:pr-12 space-y-6">
                {children}
              </main>
              <Navigation />
            </div>
          </div>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

function Navigation() {
  return (
    <nav
      className="mt-12 md:mt-0 w-full md:w-[12.5%] md:shrink-0 flex flex-col gap-6 items-start"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className="inline-block shrink-0 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
        aria-label="Algorithms of Quality — home"
      >
        <Image
          src="/logo-studio.png"
          alt=""
          width={1413}
          height={1958}
          className="h-36 w-auto md:h-[10.5rem]"
          priority
        />
      </Link>
      <ul className="space-y-2 text-left w-full">
        <li className="p-0">
          <a className="text-copy" href="/">
            about
          </a>
        </li>
        {/* <li className="p-0">
          <a className="text-nav hover:text-nav-hover" href="/blog">
            blog
          </a>
        </li> */}
        <li className="p-0">
          <a className="text-nav hover:text-nav-hover" href="/quality-terms">
            quality terms
          </a>
        </li>
        <li className="p-0">
          <a className="text-nav hover:text-nav-hover" href="/writings">
            writings
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  const footerLinkClass =
    'text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200';

  return (
    <footer className="mt-12 text-center">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 tracking-tight">
        <Link href="/ai-disclosure" className={footerLinkClass}>
          AI Disclosure
        </Link>
        <a
          href="https://github.com/onareach"
          target="_blank"
          rel="noopener noreferrer"
          className={footerLinkClass}
        >
          github
        </a>
      </div>
    </footer>
  );
}
