import Link from 'next/link';
import React from 'react';

const notfound = () => {
    return (
        <div>
            <div className="min-h-screen bg-[#f5f9ff] flex items-center justify-center px-4">
                <div className="text-center max-w-2xl">

                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-5xl">
                            🩺
                        </div>
                    </div>

                    {/* 404 */}
                    <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-[#0463fa]">
                        404
                    </h1>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-3">
                        Doctor Not Available
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                        Sorry, the page you are looking for may have been removed,
                        renamed, or is temporarily unavailable.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                        <Link
                            href="/"
                            className="bg-[#0463fa] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                        >
                            Back to Home
                        </Link>

                        <Link
                            href="https://wa.me/8801712704840"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[#0463fa] text-[#0463fa] px-8 py-3 rounded-full font-semibold hover:bg-[#0463fa] hover:text-white transition"
                        >
                            Book Appointment
                        </Link>
                    </div>

                    {/* Extra */}
                    <div className="mt-12 text-gray-400 text-sm">
                        Need help? Contact our support team.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default notfound;