"use client";

import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Branding */}
        <Link href="/" className="text-2xl font-bold text-white">
          Mohalla Bazaar
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-green-400 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/download" className="hover:text-green-400 transition duration-300">
                Download
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-green-400 transition duration-300">
                Privacy Policy
              </Link>
            </li>
          </ul>
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
          </ul>
        </nav>
      )}
    </header>
  );
}
