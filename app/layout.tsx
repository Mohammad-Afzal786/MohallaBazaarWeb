import '../globals.css'; // agar globals.css root folder me hai
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';

export const metadata = {
  title: 'Mohalla Bazaar - Download App',
  description: 'A full-stack application for Mohalla Bazaar.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
