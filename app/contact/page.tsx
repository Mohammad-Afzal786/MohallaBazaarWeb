"use client";

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SEOHead from "../components/SEOHead";

export default function ContactPage() {
  return (
    <>
      {/* ✅ SEO Head + Schema.org for Google Rich Results */}
      <SEOHead
        title="Contact - Mohalla Bazaar"
        description="Get in touch with Mohalla Bazaar. Call, email, or visit us for any inquiries related to orders, partnerships, or support."
        url="https://mohallabazaar.shop/contact"
        image="https://mohallabazaar.shop/og-image.jpg"
      />

      {/* ✅ LocalBusiness Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mohalla Bazaar",
            url: "https://mohallabazaar.shop",
            telephone: "+91 8588003437",
            email: "mohallabazaar.in@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Mohalla Bazaar App",
              addressCountry: "IN",
            },
            sameAs: [

              "https://www.instagram.com/mohallabazaar",

            ],
          }),
        }}
      />

      {/* ✅ Page Content */}
      <div className="flex flex-col min-h-screen font-sans bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">

        {/* 🗺️ Google Map */}
        <section className="google-map relative w-full h-[450px] sm:h-[500px] lg:h-[550px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.1286834555845!2d79.19344559999999!3d27.8980241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397543aed96046c1%3A0x86eee0d4e43cb68!2sMohalla%20Bazaar!5e0!3m2!1sen!2sin!4v1761760720518!5m2!1sen!2sin"
            style={{ border: 0 }}
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
        </section>

        {/* 📞 Contact Section */}
        <section className="relative py-20 sm:py-24 px-6 sm:px-8 md:px-12 text-center overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-green-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-12 relative z-10">
            Mohalla Bazaar<span className="text-green-400"> Contact</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-16 relative z-10">
            We’d love to hear from you! Reach out for inquiries, feedback, or support.
          </p>

          {/* 📬 Contact Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
            {/* Phone */}
            <div className="flex flex-col items-center text-center border border-green-400/30 hover:border-green-400/80 rounded-2xl p-8 bg-gray-800/40 backdrop-blur-md shadow-md hover:shadow-green-500/30 transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-700 text-white w-16 h-16 flex items-center justify-center rounded-full mb-5 shadow-lg">
                <i className="fa fa-phone text-2xl"></i>
              </div>
              <p className="text-gray-400 text-sm mb-1">Have a question?</p>
              <h4 className="text-lg font-semibold">
                <a href="tel:8588003437" className="hover:text-green-400 transition">
                  +91 8588003437
                </a>
              </h4>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center border border-green-400/30 hover:border-green-400/80 rounded-2xl p-8 bg-gray-800/40 backdrop-blur-md shadow-md hover:shadow-green-500/30 transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-700 text-white w-16 h-16 flex items-center justify-center rounded-full mb-5 shadow-lg">
                <i className="fa fa-envelope text-2xl"></i>
              </div>
              <p className="text-gray-400 text-sm mb-1">Write email</p>
              <h4 className="text-lg font-semibold">
                <a
                  href="mailto:mohallabazaar.in@gmail.com"
                  className="hover:text-green-400 transition"
                >
                  mohallabazaar.in@gmail.com
                </a>
              </h4>
            </div>

            {/* Website */}
            <div className="flex flex-col items-center text-center border border-green-400/30 hover:border-green-400/80 rounded-2xl p-8 bg-gray-800/40 backdrop-blur-md shadow-md hover:shadow-green-500/30 transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-700 text-white w-16 h-16 flex items-center justify-center rounded-full mb-5 shadow-lg">
                <i className="fa fa-globe text-2xl"></i>
              </div>
              <p className="text-gray-400 text-sm mb-1">Visit our website</p>
              <h4 className="text-lg font-semibold">
                <a
                  href="https://mohallabazaar.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  mohallabazaar.shop
                </a>
              </h4>
            </div>
          </div>

          {/* 🕒 Business Hours */}
          <div className="text-center mt-16 text-gray-400 relative z-10">
            <h4 className="text-xl font-semibold text-white mb-3">Business Hours</h4>
            <p>Mon – Sat: 7:00 AM – 8:30 PM</p>

          </div>
        </section>
      </div>
    </>
  );
}
