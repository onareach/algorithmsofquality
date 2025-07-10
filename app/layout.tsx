import './globals.css';
import type { Metadata } from 'next';
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
          <div className="flex flex-col md:flex-row justify-between relative max-w-6xl mx-auto w-full">
            <main className="w-full md:w-3/4 pr-0 md:pr-12 space-y-6">
              {children}
            </main>
            <Navigation />
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
    <nav className="mt-12 md:mt-0 w-full md:w-1/4">
      <ul className="space-y-2 md:text-right">
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
  const links = [
    { name: '@davidlong', url: 'https://davidlong.tech' },
    { name: 'github', url: 'https://github.com/onareach' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
