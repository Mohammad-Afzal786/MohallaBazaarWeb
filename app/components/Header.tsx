"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
                   {/* Logo/Branding */}
<Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="Logo"
    width={120}
    height={120}
    className="rounded-lg object-contain"
    priority
  />
  {/* <span className="text-3xl font-bold">Ogenix</span> */}
</Link>

                    {/* <span className="text-3xl font-bold">Ogenix</span> */}
                  </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-green-400 transition duration-300">
            Home
          </Link>
          <Link href="/download" className="hover:text-green-400 transition duration-300">
            Download
          </Link>
          <Link href="/privacy" className="hover:text-green-400 transition duration-300">
            Privacy Policy
          </Link>
        

          {/* Download App Button */}
          <Link
           href="/MohallaBazaar.apk"
            className="ml-4 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition duration-300"
          >
            Download App
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300" />
            <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300" />
            <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 shadow-lg mt-2 rounded-b-lg">
          <ul className="flex flex-col space-y-3 p-4">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-green-400 transition duration-300 block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/download"
                onClick={() => setMenuOpen(false)}
                className="hover:text-green-400 transition duration-300 block"
              >
                Download
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                onClick={() => setMenuOpen(false)}
                className="hover:text-green-400 transition duration-300 block"
              >
                Privacy Policy
              </Link>
            </li>
            {/* Mobile Download Button */}
            <li>
              <Link
                href="/MohallaBazaar.apk"
                onClick={() => setMenuOpen(false)}
                className="block bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg transition duration-300"
              >
                Download App
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
