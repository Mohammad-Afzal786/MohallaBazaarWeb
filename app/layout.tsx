import "../globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";

// ✅ Add server-side metadata (SSR friendly)
export const metadata = {
  title: "Mohalla Bazaar - Download App",
  description:
    "Fresh vegetables, groceries, and daily essentials delivered at your doorstep. Fast, secure, and reliable service via Mohalla Bazaar app.",
  openGraph: {
    title: "Mohalla Bazaar - Download App",
    description:
      "Shop groceries, vegetables, and essentials locally with Mohalla Bazaar. Fast, secure, and reliable delivery!",
    url: "https://mohallabazaar.shop/",
    siteName: "Mohalla Bazaar",
    images: [
      {
        url: "https://mohallabazaar.shop/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohalla Bazaar App",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohalla Bazaar - Download App",
    description:
      "Get your groceries and essentials from local markets via the Mohalla Bazaar app.",
    images: ["https://mohallabazaar.shop/og-image.jpg"],
  },
  metadataBase: new URL("https://mohallabazaar.shop"),
  alternates: {
    canonical: "https://mohallabazaar.shop",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
