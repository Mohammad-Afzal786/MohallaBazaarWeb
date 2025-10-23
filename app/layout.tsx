import '../globals.css'; // global styles
import Header from './components/Header';
import Footer from './components/Footer';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import Head from 'next/head'; // Next.js me head ke liye

export const metadata = {
  title: 'Mohalla Bazaar - Download App',
  description: 'All-in-One Shopping: Mohalla Bazaar app se aap hr products ek hi jagah par discover kar sakte hain.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" /> {/* Favicon */}
      </Head>
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
