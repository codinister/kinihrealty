'use client';

import Footer from '@/components/Footer';

import type { Metadata } from 'next';
import './globals.scss';
import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Script from 'next/script';
import Image from 'next/image';

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
          
          <Script id="1253179435823295" strategy="afterInteractive">
            {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
          </Script>
        </QueryClientProvider>
      </body>
    </html>
  );
}
