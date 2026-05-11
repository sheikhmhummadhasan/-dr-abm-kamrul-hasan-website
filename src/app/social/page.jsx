import React from 'react';

const SocialWorkPage = () => {
    return (
        <div>
            <div className="">
                <div className="">
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
                </div>
                <div className="">
                    <div className="w-11/12 max-w-7xl mx-auto py-10">

                        {/* White Container */}
                        <div className="bg-white rounded-[32px] p-4 sm:p-6 md:p-8 shadow-lg">

                            {/* Image Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                                {/* Card 1 */}
                                <div className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="overflow-hidden">
                                        <img
                                            src="/s-logo-1.jpeg"
                                            alt="Social Work"
                                            className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="overflow-hidden">
                                        <img
                                            src="/s-logo-2.jpeg"
                                            alt="Social Work"
                                            className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="overflow-hidden">
                                        <img
                                            src="/s-logo-3.jpeg"
                                            alt="Social Work"
                                            className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialWorkPage;