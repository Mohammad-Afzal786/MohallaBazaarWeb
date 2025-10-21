"use client";

import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-900 text-white">

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        {/* Decorative glow shapes */}
        <div className="absolute top-0 left-0 w-36 h-36 md:w-48 md:h-48 bg-purple-600 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 md:w-64 md:h-64 bg-blue-500 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fadeIn">
          Download the <span className="text-green-400">Mohalla Bazaar</span> App
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl md:max-w-3xl mx-auto mb-10 animate-fadeIn delay-200">
          Your one-stop solution for local shopping. Fast, secure & reliable.
        </p>

        <a
          href="https://github.com/Mohammad-Afzal786/MohallaBazaarWeb/releases/download/v1.0.2/MohallaBazaar.apk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 sm:px-12 md:px-14 py-4 sm:py-5 md:py-5 text-lg sm:text-xl md:text-2xl font-bold text-gray-900 bg-green-400 rounded-full shadow-lg hover:bg-green-500 transition transform hover:scale-105 animate-bounce"
        >
          ⬇️ OFFICIAL DOWNLOAD APK
        </a>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-sm text-gray-400">
          For Android devices only • Version 1.0.4
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 sm:px-6 text-center bg-gray-900 relative overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-purple-600 rounded-full opacity-20 animate-pulse-slow blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 md:w-48 md:h-48 bg-blue-500 rounded-full opacity-20 animate-pulse-slow blur-2xl"></div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 md:mb-16 relative z-10">Our Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 relative z-10">
          {[
            { icon: "🛒", title: "Local Shopping", desc: "Find trusted shops in your neighborhood." },
            { icon: "⚡", title: "Fast Delivery", desc: "Get your orders instantly." },
            { icon: "📱", title: "Easy UI", desc: "Smooth and friendly user experience." },
          ].map((f, i) => (
            <div key={i} className="p-6 sm:p-8 bg-gray-800/60 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition duration-500 group relative overflow-hidden">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white text-3xl sm:text-4xl shadow-lg group-hover:scale-110 transition transform duration-500">
                {f.icon}
              </div>

              <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{f.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
