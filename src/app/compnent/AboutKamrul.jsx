import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSolidRightArrowCircle } from 'react-icons/bi';

const AboutKamrul = () => {
    return (
        <div>
                <h1 className="text-4xl font-semibold text-center text-[#033095]">About</h1>
            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row items-center lg:items-start p-5 lg:p-10 rounded-2xl justify-between gap-8 mx-auto">

                {/* Images */}
                <div className="grid grid-cols-2 gap-3 md:gap-5 w-full lg:w-auto">
                    <Image src={'/about-photo-1.jpeg'} className='rounded-xl bg-blue-100 p-2 md:p-3' alt='about-photo-1' height={40} width={300} />
                    <Image src={'/about-photo-3.jpeg'} className='rounded-xl bg-blue-100 p-2 md:p-3' alt='about-photo-1' height={40} width={300} />
                    <Image src={'/about-photo-4.jpeg'} className='rounded-xl bg-blue-100 p-2 md:p-3' alt='about-photo-1' height={40} width={300} />
                    <Image src={'/about-photo-5.jpeg'} className='rounded-xl bg-blue-100 p-2 md:p-3' alt='about-photo-1' height={40} width={300} />
                </div>

                {/* Text */}
                <div className="w-full lg:w-[50%]">

                    <h1 className="text-lg md:text-xl inline border border-blue-200 py-2 px-4 rounded-full text-[#989797]">
                        About Dr. A B M Kamrul Hasan
                    </h1>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl my-5 font-semibold">
                        Transfusion & Regenerative Medicine Specialist
                    </h2>

                    <h3 className="text-base md:text-lg font-semibold text-[#989797] my-2">
                        ডা. এ বি এম কামরুল হাসান <br />
                        ট্রান্সফিউশন ও রিজেনারেটিভ মেডিসিন স্পেশালিস্ট।
                    </h3>

                    <div>

                        <p className='flex text-sm md:text-[0.9rem] mt-2 text-[#989797] items-center gap-1'>
                            <BiSolidRightArrowCircle className='text-[#0463fa] text-xl md:text-2xl' />
                            MBBS, BCS (Health) | DBST
                        </p>

                        <p className='flex text-sm md:text-[0.9rem] mt-2 text-[#989797] items-center gap-1'>
                            <BiSolidRightArrowCircle className='text-[#0463fa] text-xl md:text-2xl' />
                            MCPS (Transfusion Medicine)
                        </p>

                        <p className='flex text-sm md:text-[0.9rem] mt-2 text-[#989797] items-center gap-1'>
                            <BiSolidRightArrowCircle className='text-[#0463fa] text-xl md:text-2xl' />
                            PGT (Medicine)
                        </p>

                        <p className='flex text-sm md:text-[0.9rem] mt-2 text-[#989797] items-center gap-1'>
                            <BiSolidRightArrowCircle className='text-[#0463fa] text-xl md:text-2xl' />
                            CCD, EDC (BIRDEM)
                        </p>

                        <p className='flex text-sm md:text-[0.9rem] mt-2 text-[#989797] items-center gap-1'>
                            <BiSolidRightArrowCircle className='text-[#0463fa] text-xl md:text-2xl' />
                            Fellowship in Diabetology (India)
                        </p>

                        <p className='flex text-sm md:text-[0.9rem] mt-2 text-[#989797] items-center gap-1'>
                            <BiSolidRightArrowCircle className='text-[#0463fa] text-xl md:text-2xl' />
                            MSC in Stem Cell & Regenerative Medicine
                        </p>

                        <p className='flex text-sm md:text-[0.9rem] my-2 text-[#989797] items-center gap-1'>
                            <BiSolidRightArrowCircle className='text-[#0463fa] text-xl md:text-2xl' />
                            Advanced Diploma in Dermatology & Sexology (UK)
                        </p>

                    </div>

                    <p className='text-[#989797] text-sm md:text-base'>
                        Dr. A B M Kamrul Hasan is a dedicated specialist in Transfusion and Regenerative Medicine, focusing on advanced and evidence-based medical care. He is committed to providing safe and effective treatments aimed at improving patient health and recovery.

                        He also has clinical experience in managing diabetic foot conditions, with emphasis on early assessment, infection prevention, wound care, and overall limb health support. His approach prioritizes patient safety, proper medical evaluation, and personalized care plans.

                        With a strong focus on modern medical practices, Dr. Kamrul Hasan works to ensure better treatment outcomes and improved quality of life for his patients.
                    </p>

                    <Link href={'/about'} className='cursor-pointer text-[#0463fa] mt-5 inline-block'>
                        Read more
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default AboutKamrul;