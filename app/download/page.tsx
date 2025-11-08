import React from "react";
import SEOHead from "../components/SEOHead"; // path adjust if needed

export default function DownloadPage() {
  return (
    <>
      {/* SEO + OG + Twitter + JSON-LD */}
      <SEOHead
        title="Mohalla Bazaar - Download App"
        description="Get fresh vegetables, groceries, and daily essentials delivered to your doorstep within 30 minutes. Download the Mohalla Bazaar App for fast and reliable service."
        url="https://mohallabazaar.shop/download"

        image="https://mohallabazaar.shop/og-image.jpg"
      />

      {/* Page Content */}
      <div className="flex flex-col min-h-screen font-sans bg-gray-900 text-white">

        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute top-0 left-0 w-48 h-48 bg-purple-600 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fadeIn">
                <span className="text-green-400">Mohalla Bazaar</span>
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fadeIn">
                Download App
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-10 animate-fadeIn delay-200">
                    Order fresh vegetables, groceries, and daily essentials  with Mohalla Bazaar. Fast delivery within 30 minutes. Download the app now!
                </p>

          <a
           href="mohallabazaar.shop/api/download-apk"
            className="px-8 sm:px-12 md:px-14 py-4 sm:py-5 text-lg sm:text-xl md:text-xl font-bold text-gray-900 bg-green-400 rounded-full shadow-lg hover:bg-green-500 transition transform hover:scale-105 animate-bounce"
          >
            ⬇️ OFFICIAL DOWNLOAD APK
          </a>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-400">For Android devices only • Version 1.0.4</p>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-6 relative overflow-hidden text-center bg-gray-900">
          <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-600 rounded-full opacity-20 animate-pulse-slow blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-32 sm:w-48 h-32 sm:h-48 bg-blue-500 rounded-full opacity-20 animate-pulse-slow blur-2xl"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 sm:mb-16 relative z-10">Our Features</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 relative z-10">
            {[
              { icon: "🛒", title: "Local Shopping", desc: "Find trusted shops in your neighborhood." },
              { icon: "⚡", title: "Fast Delivery", desc: "Get your orders instantly." },
              { icon: "📱", title: "Easy UI", desc: "Smooth and friendly user experience." },
            ].map((f, i) => (
              <div key={i} className="p-6 sm:p-8 bg-gray-800/60 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-105 transition duration-500 group relative overflow-hidden">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white text-3xl sm:text-4xl shadow-lg group-hover:scale-110 transition transform duration-500">
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{f.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics, Installation, Testimonials Sections */}
        {/* Paste your existing sections here as-is */}
        
      </div>
    </>
  );
}
