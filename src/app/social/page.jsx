import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: "Dr ABM Kamrul Hasan | Diabetic Foot & Wound Care Expert",
  description:
    "ডায়াবেটিক ফুট, দীর্ঘদিনের ক্ষত, চুল পড়া/টাক, ত্বকের সমস্যা এবং যৌন দুর্বলতায় PRP (Platelet Rich Plasma) এবং Stem Cell Therapy চিকিৎসক",
  icons: {
    icon: "/favicon.png",
  },
};

const SocialWorkPage = () => {
    
    const images = Array.from({ length: 14 }, (_, i) => `/sc-${i + 1}.jpeg`);
    return (
        <div className="bg-[#eef2ff] min-h-screen py-6">

            {/* Title */}
            <div className="w-11/12 max-w-7xl mx-auto bg-white rounded-[32px] shadow-xl p-6 sm:p-8 md:p-10 lg:p-14">

                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">

                        <h1 className="text-gray-800 leading-snug">

                            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0463fa] mb-3">
                                আজীবন সদস্য
                            </span>

                            <span className="block text-base sm:text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
                                Blood Transfusion Society of Bangladesh (BTSB)
                            </span>

                            <span className="block text-base sm:text-lg md:text-xl font-medium text-gray-700 leading-relaxed mt-1">
                                Asian Association of Transfusion Medicine (AATM)
                            </span>

                            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0463fa] mt-8 mb-3">
                                প্রতিষ্ঠাতা উপদেষ্টা
                            </span>

                            <span className="block text-base sm:text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
                                নাসরিন আমির সেবা কেন্দ্র (NASK)
                            </span>

                            <span className="block text-base sm:text-lg md:text-xl font-medium text-gray-700 leading-relaxed mt-1">
                                শেলবরিষা সমাজ কল্যাণ সংস্থা (SSKS)
                            </span>

                            <span className="block text-lg sm:text-xl md:text-2xl font-semibold text-[#0463fa] mt-6">
                                Dr. Kamrul's Poor Fund
                            </span>

                        </h1>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <div className="overflow-hidden rounded-[28px] shadow-lg border-4 border-[#eef2ff]">
                            <Image
                                src="/spek-doc-1.jpeg"
                                alt="doc speaking"
                                width={380}
                                height={450}
                                className="object-cover hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Container */}
            <div className="w-11/12 max-w-7xl mx-auto py-10">

                <div className="bg-white rounded-[32px] p-4 sm:p-6 md:p-8 shadow-lg">

                    {/* Image Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        <div className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="overflow-hidden">
                                <img src="/s-logo-1.jpeg" className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition duration-500" />
                            </div>
                        </div>

                        <div className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="overflow-hidden">
                                <img src="/s-logo-2.jpeg" className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition duration-500" />
                            </div>
                        </div>

                        <div className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="overflow-hidden">
                                <img src="/s-logo-3.jpeg" className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition duration-500" />
                            </div>
                        </div>

                    </div>

                    {/* Paragraph */}
                    <p className="text-[#6b7280] text-center text-sm sm:text-base md:text-lg leading-7 sm:leading-8 mt-8 max-w-6xl mx-auto px-2 sm:px-4">
                        ডাক্তার হওয়া মানেই শুধু রোগী দেখা নয়; বরং মানুষের পাশে দাঁড়ানো, মানবতার সেবা করা এবং সমাজের প্রতি দায়িত্ববোধ থেকে কাজ করাও একজন চিকিৎসকের অন্যতম কর্তব্য।
                        এই লক্ষ্য ও স্বপ্নকে ধারণ করে ২০১৭ সালে আমি আমার নিজ জেলা সিরাজগঞ্জের বেলকুচি উপজেলার প্রত্যন্ত গ্রাম শেলবরিষাতে প্রতিষ্ঠা করি “শেলবরিষা সমাজ কল্যাণ সংস্থা”...
                    </p>

                </div>
            </div>
            <div className="w-11/12 ageimmax-w-7xl mx-auto bg-white rounded-[32px] shadow-xl p-4 sm:p-6 md:p-8 lg:p-10">

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300"
                        >

                            <div className="overflow-hidden">
                                <Image
                                    src={image}
                                    alt={`social-work-${index + 1}`}
                                    width={600}
                                    height={400}
                                    className="w-full h-[250px] sm:h-[300px] md:h-[320px] object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default SocialWorkPage;