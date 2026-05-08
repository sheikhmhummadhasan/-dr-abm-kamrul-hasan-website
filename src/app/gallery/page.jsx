import React from 'react';

export const metadata = {
    title: "Diabetic Foot Care & PRP Center Sirajganj",
    description:
        "ডায়াবেটিক ফুট কেয়ার, PRP থেরাপি, চুল পড়া, ত্বক ও হাঁটু ব্যথার আধুনিক চিকিৎসা কেন্দ্র।",
};

const GallaryPage = () => {
    return (
        <div>
            <div className="">
                <div className="relative h-[30vh] w-full bg-[url('/happy-doc.avif')] bg-cover bg-center bg-no-repeat">

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                            Meet Our Specialist Doctor
                        </h1>
                    </div>
                </div>
                <div className="">
                    
                </div>
            </div>
        </div>
    );
};

export default GallaryPage;