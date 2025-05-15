
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import "react-toastify/dist/ReactToastify.css";
import { Providers } from './providers';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pscon Todo App',
  description: 'A modern task management application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
          <ToastContainer />
      </body>
    </html>
  );
}
