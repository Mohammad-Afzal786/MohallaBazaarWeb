"use client";

import React from "react";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-gray-900 text-white">

            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
                <div className="absolute top-0 left-0 w-48 h-48 bg-purple-600 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fadeIn">
                    Download the <span className="text-green-400">Mohalla Bazaar</span> App
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-10 animate-fadeIn delay-200">
                    Your one-stop solution for local shopping. Fast, secure & reliable.
                </p>

                <a
                    href="/MohallaBazaar.apk"
                   
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
                            <div className="absolute -top-8 -right-8 w-20 h-20 bg-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition duration-500 blur-3xl"></div>
                            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition duration-500 blur-3xl"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Statistics Section */}
            <section id="stats" className="py-16 sm:py-20 md:py-24 bg-gray-900 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 sm:mb-16">Our Impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-0">
                    {[
                        { value: "100+", label: "category" },
                        { value: "1K+", label: "products" },
                        { value: "30 min", label: "delivery time" },
                    ].map((stat, i) => (
                        <div key={i} className="p-6 sm:p-6 md:p-6 bg-gray-800/60 rounded-3xl shadow-lg hover:shadow-2xl transition">
                            <p className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-white-400 mb-2">{stat.value}</p>
                            <p className="text-gray-300 text-sm sm:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Installation Steps Section */}
            <section id="install" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-6 text-center bg-gray-900">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 sm:mb-16">How to Install Mohalla Bazaar App</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {[
                        { icon: "⬇️", title: "Step 1: Download the APK", desc: "Open your browser, visit our official website, and download the Mohalla Bazaar APK for Android." },
                        { icon: "📲", title: "Step 2: Install the App", desc: "Tap the downloaded APK and allow installation from unknown sources to install Mohalla Bazaar on your device." },
                        { icon: "🎉", title: "Step 3: Explore the App", desc: "Launch the app to browse local shops, place orders, and enjoy fast & secure shopping right from your phone." },
                    ].map((step, i) => (
                        <div key={i} className="p-6 sm:p-8 bg-gray-800/60 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 sm:hover:-translate-y-3">
                            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">{step.icon}</div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-green-400">{step.title}</h3>
                            <p className="text-gray-300 text-sm sm:text-base">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-gray-800 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 sm:mb-16">What Users Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-0">
                    {[
                        { text: "“Shopping local has never been easier. I found all my favorite stores in one app!”", name: "Adnan" },
                        { text: "“Fast deliveries and smooth checkout. Love the app!”", name: "Sameer" },
                        { text: "User-friendly UI, makes shopping fun and easy.", name: "Shahid" },
                    ].map((t, i) => (
                        <div key={i} className="p-6 sm:p-8 bg-gray-700/60 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 sm:hover:-translate-y-2 relative">
                            <div className="absolute -top-4 left-4 text-5xl sm:text-6xl text-purple-400">“</div>
                            <p className="text-gray-300 text-sm sm:text-base mb-2 sm:mb-4">{t.text}</p>
                            <h4 className="font-bold text-white text-sm sm:text-base">{t.name}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
