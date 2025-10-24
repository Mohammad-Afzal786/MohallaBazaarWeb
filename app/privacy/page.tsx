"use client";

import React from "react";
import SEOHead from "../components/SEOHead";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* SEO */}
      <SEOHead
        title="Mohalla Bazaar - Privacy Policy "
        description="Learn how Mohalla Bazaar collects, uses, and protects your personal information. Stay informed about privacy practices and data security."
        url="https://mohallabazaar.shop/privacy"
        image="https://mohallabazaar.shop/og-image.jpg"
      />

      <div className="flex flex-col min-h-screen font-sans bg-gray-900 text-white">

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fadeIn">
            Privacy Policy
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fadeIn delay-200">
            Your privacy is important to us. Learn how Mohalla Bazaar collects, uses, and protects your information.
          </p>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Information Collection */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Information We Collect</h3>
              <p className="text-gray-300">
                We may collect personal information such as your name, phone number, when you use our app.
              </p>
            </div>

            {/* Use of Information */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">How We Use Information</h3>
              <p className="text-gray-300">
                Your information is used to process orders, provide customer support, improve app performance, send promotional updates (with your consent), and ensure a secure shopping experience.
              </p>
            </div>

            {/* Data Sharing */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Data Sharing</h3>
              <p className="text-gray-300">
                We do not sell your personal information. We may share your data with trusted third-party services such as payment processors, delivery partners, and analytics providers strictly for operational purposes.
              </p>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Security</h3>
              <p className="text-gray-300">
                We implement industry-standard security measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute protection of your information.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Your Rights</h3>
              <p className="text-gray-300">
                You can access, update, or request deletion of your personal information by contacting our support team. You may also opt out of receiving promotional communications at any time.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Contact Us</h3>
              <p className="text-gray-300">
                If you have questions or concerns about our privacy practices, please contact us at <a href="mailto:mohallabazaar.in@gmail.com" className="text-green-400 underline">mohallabazaar.in@gmail.com</a>.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
