import "../globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SEOHead from "./components/SEOHead";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const defaultSEO = {
    title: "Mohalla Bazaar - Download App",
    description: "Fresh vegetables, groceries, and daily essentials delivered at your doorstep. Fast, secure, and reliable service via Mohalla Bazaar app.",
    url: "https://mohallabazaar.shop/",
    image: "https://mohallabazaar.shop/og-image.jpg",
  };

  return (
    <html lang="hi">
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* Default SEO for all pages */}
        <SEOHead {...defaultSEO} />

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
