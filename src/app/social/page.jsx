import React from 'react';

const SocialWorkPage = () => {
    return (
        <div className="bg-[#eef2ff] min-h-screen py-6">

            {/* Title */}
            <h1 className="w-11/12 max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-8 
            text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed">

                <span className='text-5xl font-bold text-[#0436fa]'>আজীবন সদস্য </span> <br /> Blood Transfusion Society of Bangladesh (BTSB) <br /> Asian Association of Transfusion Medicine (AATM) <br />
                <span className='text-5xl font-bold text-[#0436fa]'>প্রতিষ্ঠাতা উপদেষ্টা </span> <br />নাসরিন আমির সেবা কেন্দ্র (NASK) <br /> শেলবরিষা সমাজ কল্যাণ সংস্থা (SSKS) <br />
                Dr. Kamrul's Poor Fund

            </h1>

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
        </div>
    );
};

export default SocialWorkPage;