import Image from 'next/image';
import React from 'react';
import { FaUserDoctor } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Edq = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto my-10">
                {/* Heading */}
                <div className="flex flex-col mt-5 items-center justify-center gap-3 text-center">
                    <h2 className="text-sm sm:text-base md:text-xl inline border border-blue-200 text-[#989797] rounded-full py-2 px-4">
                        আমাদের বিশেষজ্ঞ
                    </h2>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        শিক্ষাগত যোগ্যতা / Educational Qualifications
                    </h1>
                </div>

                {/* Main Section */}
                <div className="flex flex-col lg:flex-row mt-8 items-stretch justify-between rounded-xl gap-6">

                    {/* Left Card */}
                    <div className="flex flex-col items-center justify-center rounded-2xl gap-3 bg-[#eef2ff] p-5 sm:p-7 lg:w-[35%]">
                        <Image
                            src={"/dr-abm-2.jpeg"}
                            alt="dr abm profile photo"
                            height={400}
                            width={350}
                            className="rounded-2xl w-full max-w-[350px] object-cover"
                        />

                        <h2 className="text-2xl sm:text-3xl mt-3 text-center font-semibold">
                            ডা. এবিএম কামরুল হাসান
                        </h2>

                        <p className="text-[#989797] text-center text-sm sm:text-base">
                            ট্রান্সফিউশন ও রিজেনারেটিভ মেডিসিন স্পেশালিস্ট।
                        </p>
                    </div>

                    {/* Right Card */}
                    <div className="bg-[#eef2ff] p-5 sm:p-7 rounded-2xl lg:w-[65%]">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
                            শিক্ষাগত যোগ্যতা ও পদবী
                        </h1>

                        {/* Qualifications */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

                            <p className="flex items-start gap-2 text-sm sm:text-base">
                                <FaUserDoctor className="text-xl text-[#0463fa] mt-1" />
                                MBBS - ব্যাচেলর অব মেডিসিন অ্যান্ড ব্যাচেলর অব সার্জারি
                            </p>

                            <p className="flex items-start gap-2 text-sm sm:text-base">
                                <FaUserDoctor className="text-xl text-[#0463fa] mt-1" />
                                BCS (Health) - বাংলাদেশ সিভিল সার্ভিস (স্বাস্থ্য)
                            </p>

                            <p className="flex items-start gap-2 text-sm sm:text-base">
                                <FaUserDoctor className="text-xl text-[#0463fa] mt-1" />
                                DBST - ডিপ্লোমা ইন ব্লাড ব্যাংক অ্যান্ড ট্রান্সফিউশন
                            </p>

                            <p className="flex items-start gap-2 text-sm sm:text-base">
                                <FaUserDoctor className="text-xl text-[#0463fa] mt-1" />
                                MCPS (Transfusion Medicine) - মেম্বার অব কলেজ অব
                                ফিজিশিয়ানস অ্যান্ড সার্জনস
                            </p>

                            <p className="flex items-start gap-2 text-sm sm:text-base">
                                <FaUserDoctor className="text-xl text-[#0463fa] mt-1" />
                                PGT (Medicine) - পোস্ট গ্র্যাজুয়েট ট্রেনিং ইন মেডিসিন
                            </p>

                            <p className="flex items-start gap-2 text-sm sm:text-base">
                                <FaUserDoctor className="text-xl text-[#0463fa] mt-1" />
                                CCD, EDC (BIRDEM) - সার্টিফিকেট ইন ডায়াবেটোলজি
                            </p>

                            <p className="flex items-start gap-2 text-sm sm:text-base">
                                <FaUserDoctor className="text-xl text-[#0463fa] mt-1" />
                                Fellowship in Diabetology (India) - ডায়াবেটোলজিতে
                                ফেলোশিপ
                            </p>

                            <p className="flex items-start gap-2 text-sm sm:text-base">
                                <FaUserDoctor className="text-xl text-[#0463fa] mt-1" />
                                MSC in Stem Cell & Regenerative Medicine - স্টেম সেল ও
                                রিজেনারেটিভ মেডিসিনে মাস্টার্স
                            </p>

                            <p className="flex items-start gap-2 text-sm sm:text-base md:col-span-2">
                                <FaUserDoctor className="text-xl text-[#0463fa] mt-1" />
                                Advanced Diploma in Dermatology & Sexology (UK) -
                                ডার্মাটোলজি ও সেক্সোলজিতে অ্যাডভান্সড ডিপ্লোমা
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="mt-10 flex flex-col items-center text-center space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                                বিস্তারিত তথ্য/যোগাযোগ করতে:
                            </h2>

                            <p className="flex items-center gap-2 text-sm sm:text-lg">
                                <IoCall className="text-2xl text-[#0463fa]" />
                                কল: 01854460146
                            </p>

                            <p className="flex items-center gap-2 text-sm sm:text-lg break-all">
                                <MdEmail className="text-2xl text-[#0463fa]" />
                                ইমেইল: drabmkamrulhasan@gamil.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edq;