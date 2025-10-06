import React from "react";

export default function DownloadPage() {
 return (
        <div className="flex flex-col min-h-screen font-sans bg-gray-900 text-white">

            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
                {/* Decorative glow shapes */}
                <div className="absolute top-0 left-0 w-48 h-48 bg-purple-600 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>

                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fadeIn">
                    Download the <span className="text-green-400">Mohalla Bazaar</span> App
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fadeIn delay-200">
                    Your one-stop solution for local shopping. Fast, secure & reliable.
                </p>

                <a href="/MohallaBazaar.apk" className="px-14 py-5 text-xl font-bold text-gray-900 bg-green-400 rounded-full shadow-lg hover:bg-green-500 transition transform hover:scale-105 animate-bounce">
                    ⬇️OFFICAIL DOWNLOAD APK
                </a>

                <p className="mt-6 text-sm text-gray-400">For Android devices only • Version 1.0.0</p>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 px-6 relative overflow-hidden text-center bg-gray-900">
                {/* Floating shapes */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-purple-600 rounded-full opacity-20 animate-pulse-slow blur-2xl"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500 rounded-full opacity-20 animate-pulse-slow blur-2xl"></div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 relative z-10">Our Features</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                    {[
                        { icon: "🛒", title: "Local Shopping", desc: "Find trusted shops in your neighborhood." },
                        { icon: "⚡", title: "Fast Delivery", desc: "Get your orders instantly." },
                       
                        { icon: "📱", title: "Easy UI", desc: "Smooth and friendly user experience." },
                    ].map((f, i) => (
                        <div key={i} className="p-8 bg-gray-800/60 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition duration-500 group relative overflow-hidden">
                            {/* Icon circle */}
                            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white text-4xl shadow-lg group-hover:scale-110 transition transform duration-500">
                                {f.icon}
                            </div>

                            <h3 className="font-bold text-xl mb-3">{f.title}</h3>
                            <p className="text-gray-300">{f.desc}</p>

                            {/* Decorative hover glow */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition duration-500 blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition duration-500 blur-3xl"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Statistics Section */}
            <section id="stats" className="py-24 bg-gray-900 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Our Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { value: "100+", label: "category" },
                        { value: "1K+", label: "products" },
                        { value: "30 min", label: "delivery time" },
                    ].map((stat, i) => (
                        <div key={i} className="p-6 bg-gray-800/60 rounded-3xl shadow-lg hover:shadow-2xl transition">
                            <p className="text-4xl font-extrabold text-white-400 mb-2">{stat.value}</p>
                            <p className="text-gray-300">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

          

            {/* Installation Steps Section */}
<section id="install" className="py-24 px-6 text-center bg-gray-900">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">How to Install Mohalla Bazaar App</h2>

    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Step 1 */}
        <div className="p-8 bg-gray-800/60 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3">
            <div className="text-6xl mb-6">⬇️</div>
            <h3 className="text-2xl font-bold mb-3 text-green-400">Step 1: Download the APK</h3>
            <p className="text-gray-300">Open your browser, visit our official website, and download the Mohalla Bazaar APK for Android.</p>
        </div>

        {/* Step 2 */}
        <div className="p-8 bg-gray-800/60 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3">
            <div className="text-6xl mb-6">📲</div>
            <h3 className="text-2xl font-bold mb-3 text-green-400">Step 2: Install the App</h3>
            <p className="text-gray-300">Tap the downloaded APK and allow installation from unknown sources to install Mohalla Bazaar on your device.</p>
        </div>

        {/* Step 3 */}
        <div className="p-8 bg-gray-800/60 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3">
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="text-2xl font-bold mb-3 text-green-400">Step 3: Explore the App</h3>
            <p className="text-gray-300">Launch the app to browse local shops, place orders, and enjoy fast & secure shopping right from your phone.</p>
        </div>
    </div>
</section>



  {/* Testimonials Section */}
            <section id="testimonials" className="py-24 bg-gray-800 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">What Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { text: "“Shopping local has never been easier. I found all my favorite stores in one app!”", name: "Adnan" },
                        { text: "“Fast deliveries and smooth checkout. Love the app!”", name: "Sameer" },
                        { text: "User-friendly UI, makes shopping fun and easy.", name: "shahid" },
                    ].map((t, i) => (
                        <div key={i} className="p-8 bg-gray-700/60 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 relative">
                            <div className="absolute -top-4 left-4 text-6xl text-purple-400">“</div>
                            <p className="text-gray-300 mb-4">{t.text}</p>
                            <h4 className="font-bold text-white">{t.name}</h4>
                        </div>
                    ))}
                </div>
            </section>



        </div>
    );
}
