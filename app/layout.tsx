'use client';

import Footer from '@/components/Footer';

import type { Metadata } from 'next';
import './globals.scss';
import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const metadata: Metadata = {
  title: 'Kinih Realty',
  description: 'Property rentals and sales',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const provider = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={provider}>

          <Suspense>{children}</Suspense>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
