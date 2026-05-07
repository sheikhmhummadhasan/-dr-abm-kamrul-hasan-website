import Image from 'next/image';
import React from 'react';

const Posible = () => {
    return (
        <div>
            <div className="bg-[#0463fa] py-16 my-10">

                <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Text Section */}
                    <div className="flex-1 text-center lg:text-left">

                        <h2 className="inline-block text-sm sm:text-base md:text-lg border border-white text-white rounded-full py-2 px-4 mb-4">
                            Why Choose Us
                        </h2>

                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug">
                            Excellence in Diabetic Foot Care
                        </h1>

                        <p className="text-white/90 mt-5 text-sm sm:text-base leading-relaxed">
                            We combine advanced medical technology with compassionate, patient-centered care to deliver the best possible outcomes. Our approach focuses on accurate diagnosis, effective evidence-based treatments, and long-term healing. We are committed to restoring mobility, reducing pain, and improving your overall quality of life through safe and modern medical solutions you can trust.
                        </p>

                    </div>

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/posible-photo-2.jpeg"
                            alt="why choose us"
                            width={500}
                            height={400}
                            className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Posible;