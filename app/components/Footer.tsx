"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white p-6 md:p-10 mt-auto border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
        {/* Brand Section */}
        <div className="flex flex-col items-start gap-4">
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
          <p className="text-base md:text-lg font-medium mt-1 text-gray-300">
            We&apos;re Providing Everyday Fresh<br />and Quality Products.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            {[ "instagram"].map((icon) => (
              <a
                key={icon}
                href="https://www.instagram.com/mohallabazaar"
                className="bg-gray-700 hover:bg-green-600 p-2.5 rounded-full transition-colors duration-300"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Explore Section */}
<div>
  <h3 className="font-semibold text-xl mb-4">
    Explore <span className="text-green-400">—</span>
  </h3>
  <ul className="text-gray-300">
    <li className="mb-2">
      <a href="/" className="hover:text-green-400 transition-colors">
        Home
      </a>
    </li>
    <li className="mb-2">
      <a href="/download" className="hover:text-green-400 transition-colors">
        Download
      </a>
    </li>
    <li className="mb-2">
      <a href="/privacy" className="hover:text-green-400 transition-colors">
        Privacy Policy
      </a>
    </li>
    <li className="mb-2">
      <a href="mohallabazaar.shop/api/download-apk" className="hover:text-green-400 transition-colors">
        Download App
      </a>
    </li>
    <li className="mb-2">
      <a href="/contact" className="hover:text-green-400 transition-colors">
        Contact Us
      </a>
    </li>
  </ul>
</div>


        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-xl mb-4">
            Contact <span className="text-green-400">—</span>
          </h3>
          <p className="text-gray-300">
            Uttar Pradesh (india)
          </p>
          <p className="mt-3 font-semibold text-lg text-green-400">
            +91 8588003437
          </p>
          <p className="mt-2 text-gray-300">mohallabazaar.in@gmail.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p className="text-center md:text-left">
  &copy; {currentYear} by{" "}
  <a
    href="https://mohallabazaar.shop"
   
    rel="noopener noreferrer"
    className="text-green-400 hover:underline"
  >
    mohallabazaar.shop
  </a>
</p>


        <div className="flex flex-wrap justify-center items-center gap-2 mt-3 md:mt-0">
         
        
          <a href="/privacy" className="hover:text-green-400">Privacy Policy</a>
          
        </div>

       
      </div>
    </footer>
  );
}
