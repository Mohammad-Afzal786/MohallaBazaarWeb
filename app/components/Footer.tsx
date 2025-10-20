// frontend/app/components/Footer.tsx

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white p-6 mt-auto border-t border-gray-700">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear} Mohalla Bazaar. All rights reserved.
        </p>
        {/* <div className="mt-2 text-xs text-gray-400">
          <a href="/privacy" className="hover:text-green-400 mx-2">Privacy</a>
          <span className="mx-1">|</span>
          <a href="/terms" className="hover:text-green-400 mx-2">Terms</a>
        </div> */}
      </div>
    </footer>
  );
}