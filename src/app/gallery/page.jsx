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

const GallaryPage = () => {
    const photo = [
        {
            id: 1,
            photo: '/abc',
            alt: 'doc photo'
        }
    ]

    const video = [
        { id: 1, video: "/video-1.mp4" },
        { id: 2, video: "/video-2.mp4" },
        { id: 3, video: "/video-3.mp4" },
        { id: 4, video: "/video-4.mp4" },
        { id: 5, video: "/video-5.mp4" },
        { id: 6, video: "/video-6.mp4" },
        { id: 7, video: "/video-7.mp4" },
        { id: 8, video: "/video-8.mp4" },
        { id: 9, video: "/video-9.mp4" },
    ];

    return (
        <div>
            <div className="bg-[#eef2ff] min-h-screen pb-10">

                {/* Hero Section */}
                <div className="relative h-[25vh] sm:h-[30vh] md:h-[40vh] w-full bg-[url('/happy-doc.avif')] bg-cover bg-center bg-no-repeat">

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center h-full px-4">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold text-center">
                            Meet Our Specialist Doctor
                        </h1>
                    </div>
                </div>

                {/* Video Section */}
                <div className="w-11/12 max-w-7xl mx-auto mt-8">

                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
                        Our Video Gallery
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {video.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden p-3"
                            >
                                <video
                                    src={item.video}
                                    controls
                                    muted
                                    loop
                                    preload="metadata"
                                    className="w-full h-[220px] sm:h-[250px] object-cover rounded-xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-11/12 max-w-7xl mx-auto py-16">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-sm sm:text-base md:text-lg inline-block border border-blue-200 text-[#0463fa] rounded-full py-2 px-5 bg-blue-50">
                            Treatment Results
                        </h2>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 text-gray-900 leading-tight">
                            Before & After Treatment Gallery
                        </h1>

                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                            Explore real patient treatment transformations with advanced PRP therapy and specialized medical care.
                        </p>
                    </div>

                    {/* Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">

                            <div className="grid grid-cols-2">

                                {/* Before */}
                                <div className="relative">
                                    <Image
                                        src="/prp-before-1.jpeg"
                                        alt="Before PRP Hair Treatment"
                                        width={500}
                                        height={500}
                                        className="w-full h-64 object-cover"
                                    />

                                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                                        Before
                                    </span>
                                </div>

                                {/* After */}
                                <div className="relative">
                                    <Image
                                        src="/prp-after-1.jpeg"
                                        alt="After PRP Hair Treatment"
                                        width={500}
                                        height={500}
                                        className="w-full h-64 object-cover"
                                    />

                                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                                        After
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-bold text-gray-800">
                                    PRP Therapy Treatment Result
                                </h3>

                                <p className="text-gray-500 text-sm mt-2">
                                    Visible improvement after professional PRP therapy sessions.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">

                            <div className="grid grid-cols-2">

                                {/* Before */}
                                <div className="relative">
                                    <Image
                                        src="/prp-before-2.jpeg"
                                        alt="Before Skin Treatment"
                                        width={500}
                                        height={500}
                                        className="w-full h-64 object-cover"
                                    />

                                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                                        Before
                                    </span>
                                </div>

                                {/* After */}
                                <div className="relative">
                                    <Image
                                        src="/prp-after-2.jpeg"
                                        alt="After Skin Treatment"
                                        width={500}
                                        height={500}
                                        className="w-full h-64 object-cover"
                                    />

                                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                                        After
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-bold text-gray-800">
                                    PRP Therapy Treatment Result
                                </h3>

                                <p className="text-gray-500 text-sm mt-2">
                                    Visible improvement after professional PRP therapy sessions.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">

                            <div className="grid grid-cols-2">

                                {/* Before */}
                                <div className="relative">
                                    <Image
                                        src="/prp-before-3.jpeg"
                                        alt="Before PRP Therapy"
                                        width={500}
                                        height={500}
                                        className="w-full h-64 object-cover"
                                    />

                                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                                        Before
                                    </span>
                                </div>

                                {/* After */}
                                <div className="relative">
                                    <Image
                                        src="/prp-after-3.jpeg"
                                        alt="After PRP Therapy"
                                        width={500}
                                        height={500}
                                        className="w-full h-64 object-cover"
                                    />

                                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                                        After
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-bold text-gray-800">
                                    PRP Therapy Treatment Result
                                </h3>

                                <p className="text-gray-500 text-sm mt-2">
                                    Real treatment outcomes with expert medical care and PRP solutions.
                                </p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">

                            <div className="grid grid-cols-2">

                                {/* Before */}
                                <div className="relative">
                                    <Image
                                        src="/prp-before-4.jpeg"
                                        alt="Before PRP Therapy"
                                        width={500}
                                        height={500}
                                        className="w-full h-64 object-cover"
                                    />

                                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                                        Before
                                    </span>
                                </div>

                                {/* After */}
                                <div className="relative">
                                    <Image
                                        src="/prp-after-4.jpeg"
                                        alt="After PRP Therapy"
                                        width={500}
                                        height={500}
                                        className="w-full h-64 object-cover"
                                    />

                                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                                        After
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-bold text-gray-800">
                                    PRP Hair Treatment
                                </h3>

                                <p className="text-gray-500 text-sm mt-2">
                                    Real treatment outcomes with expert medical care and PRP solutions.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GallaryPage;