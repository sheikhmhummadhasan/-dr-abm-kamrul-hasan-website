import React from 'react';

export const metadata = {
    title: "Diabetic Foot Care & PRP Center Sirajganj",
    description:
        "ডায়াবেটিক ফুট কেয়ার, PRP থেরাপি, চুল পড়া, ত্বক ও হাঁটু ব্যথার আধুনিক চিকিৎসা কেন্দ্র।",
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
            </div>
        </div>
    );
};

export default GallaryPage;