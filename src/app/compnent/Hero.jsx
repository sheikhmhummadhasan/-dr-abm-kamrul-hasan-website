import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-[#0453fa] text-white space-y-3 lg:space-y-0">

                <div className="px-5 py-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-semibold">
                        Dr. A B M Kamrul Hasan
                    </h1>

                    <p className='mb-3 text-[0.8rem] md:text-[1rem] font-semibold'>
                        Transfusion & Regenerative Medicine Specialist
                    </p>

                    <div className="grid grid-cols-2 lg:flex items-center gap-5 lg:gap-7 mt-10 lg:mt-15">

                        <div className="border-l p-2">
                            <h3 className="text-xl md:text-2xl font-semibold">
                                15+
                            </h3>
                            <p className="text-sm md:text-base">
                                Years of Experience
                            </p>
                        </div>

                        <div className="border-l p-2">
                            <h3 className="text-xl md:text-2xl font-semibold">
                                1500+
                            </h3>
                            <p className="text-sm md:text-base">
                                Successful PRP Treatments
                            </p>
                        </div>

                        <div className="border-l p-2">
                            <h3 className="text-xl md:text-2xl font-semibold">
                                99%
                            </h3>
                            <p className="text-sm md:text-base">
                                Success Rate
                            </p>
                        </div>

                        <div className="border-l p-2">
                            <h3 className="text-xl md:text-2xl font-semibold">
                                17000+
                            </h3>
                            <p className="text-sm md:text-base">
                               Diabetes Patients Treated
                            </p>
                        </div>

                    </div>
                </div>

                <div>
                    <Image
                        src={'/dr-kamrul-hero-img.jpeg'}
                        alt='dr abm kamrul hasan hero photo'
                        className='w-[280px] md:w-[400px] mt-6 rounded-xl lg:rounded-none lg:w-[700px] lg:mt-0 h-auto'
                        height={30}
                        width={500}
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;