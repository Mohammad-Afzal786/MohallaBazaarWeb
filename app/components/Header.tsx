// frontend/app/components/Header.tsx

import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Branding */}
        <Link href="/" className="text-2xl font-bold text-white-400">
          Mohalla Bazaar
        </Link>

        {/* Navigation */}
        <nav>
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
      </div>
    </header>
  );
}
