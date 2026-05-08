import React from 'react';
import { FaHospital, FaNotesMedical, FaRegUserCircle, FaStethoscope, FaUserGraduate } from 'react-icons/fa';
import { FaLocationDot, FaUserDoctor } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { RiHospitalFill } from 'react-icons/ri';

export const metadata = {
    title: "Diabetic Foot Care & PRP Center Sirajganj",
    description:
        "ডায়াবেটিক ফুট কেয়ার, PRP থেরাপি, চুল পড়া, ত্বক ও হাঁটু ব্যথার আধুনিক চিকিৎসা কেন্দ্র।",
};

const AboutPage = () => {
    return (
        <div>
            <div className="bg-[#eef3ff] pb-10">

                {/* Top Background Image */}
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

                <div className="w-11/12 max-w-7xl mx-auto -mt-10 relative z-20">

                    {/* Doctor Intro */}
                    <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10 flex flex-col lg:flex-row items-center gap-6 mb-8">

                        <div className="flex items-center justify-center">
                            <div className="bg-[#0463fa] p-5 rounded-full">
                                <FaUserDoctor className="text-5xl text-white" />
                            </div>
                        </div>

                        <div className="text-center lg:text-left">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                                Dr. A B M Kamrul Hasan
                            </h1>

                            <h3 className="text-lg md:text-xl font-semibold text-[#0463fa] my-3">
                                Transfusion & Regenerative Medicine Specialist
                            </h3>

                            <p className="text-[#6b7280] leading-relaxed">
                                Expert in Diabetes Medicine, Diabetic Foot Management,
                                Transfusion & Regenerative Medicine.
                            </p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Left Side */}
                        <div className="bg-white rounded-3xl shadow-sm p-6 h-fit">

                            <h3 className="text-2xl font-bold border-l-4 border-[#0463fa] pl-3 mb-6">
                                Quick Info
                            </h3>

                            {/* Qualification */}
                            <div className="flex gap-4 mb-6">
                                <FaUserGraduate className="text-4xl text-[#0463fa]" />

                                <div>
                                    <h2 className="font-bold text-xl mb-2">
                                        Qualifications
                                    </h2>

                                    <p className="text-[#6b7280] leading-7 text-sm md:text-base">
                                        MBBS, BCS (Health) <br />
                                        DBST, MCPS (Transfusion Medicine) <br />
                                        PGT (Medicine) <br />
                                        CCD, EDC (BIRDEM) <br />
                                        Fellowship in Diabetology (India) <br />
                                        MSC in Stem Cell & Regenerative Medicine <br />
                                        Advanced Diploma in Dermatology & Sexology (UK)
                                    </p>
                                </div>
                            </div>

                            {/* Speciality */}
                            <div className="flex gap-4 mb-6">
                                <FaStethoscope className="text-3xl text-[#0463fa]" />

                                <div>
                                    <h2 className="font-bold text-lg">
                                        Speciality
                                    </h2>

                                    <p className="text-[#6b7280]">
                                        Diabetic Medicine
                                    </p>
                                </div>
                            </div>

                            {/* Workplace */}
                            <div className="flex gap-4">
                                <FaHospital className="text-3xl text-[#0463fa]" />

                                <div>
                                    <h2 className="font-bold text-lg">
                                        Workplace
                                    </h2>

                                    <p className="text-[#6b7280]">
                                        Dinajpur Medical College Hospital
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="lg:col-span-2 flex flex-col gap-6">

                            {/* About */}
                            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">

                                <h1 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-gray-800 mb-5">
                                    <FaRegUserCircle className="text-[#0463fa]" />
                                    About Me
                                </h1>

                                <p className="text-[#6b7280] leading-8">
                                    Dr. A B M Kamrul Hasan is a dedicated specialist in
                                    Transfusion and Regenerative Medicine, focusing on
                                    advanced and evidence-based medical care.
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-3 mt-6">

                                    <p className="py-2 px-4 rounded-full bg-[#eef2ff] border border-[#0463fa] text-sm font-medium">
                                        Diabetic Foot Treatment
                                    </p>

                                    <p className="py-2 px-4 rounded-full bg-[#eef2ff] border border-[#0463fa] text-sm font-medium">
                                        Hair & Beard Growth Therapy
                                    </p>

                                    <p className="py-2 px-4 rounded-full bg-[#eef2ff] border border-[#0463fa] text-sm font-medium">
                                        Skin Spot & Acne Treatment
                                    </p>

                                    <p className="py-2 px-4 rounded-full bg-[#eef2ff] border border-[#0463fa] text-sm font-medium">
                                        Knee Pain PRP Therapy
                                    </p>

                                    <p className="py-2 px-4 rounded-full bg-[#eef2ff] border border-[#0463fa] text-sm font-medium">
                                        Male Weakness Treatment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;