import React from 'react';
import {
    FaUserMd,
    FaUser,
    FaRegSmile,
    FaWheelchair,
    FaMars,
    FaDumbbell,
    FaSpa,
    FaHeart,
    FaHandSparkles,
    FaSyringe
} from "react-icons/fa";

const Service = () => {
    const service = [
        {
            id: 1,
            icon: FaUserMd,
            name: "Diabetic Foot Treatment",
            description:
                "Advanced treatment service for diabetic foot wounds and long-term injuries with proper care.",
            couse: "পুরাতন ঘা শুকাতে সাহায্য করে।"
        },
        {
            id: 2,
            icon: FaUser,
            name: "Hair & Beard Growth Therapy",
            description:
                "Modern PRP therapy for hair fall, baldness problem, hair growth, and beard growth solution.",
            couse: "নতুন চুল গজাতে সাহায্য করে।"
        },
        {
            id: 3,
            icon: FaRegSmile,
            name: "Skin Spot & Acne Treatment",
            description:
                "Professional treatment for dark spots, acne, melasma, holes, burn marks, and stitch scars.",
            couse: "মুখের দাগ কমাতে সহায়তা করে।"
        },
        {
            id: 4,
            icon: FaWheelchair,
            name: "Knee Pain PRP Therapy",
            description:
                "Advanced PRP therapy service for knee pain and osteoarthritis treatment.",
            couse: "হাঁটুর ব্যথা কমাতে সাহায্য করে।"
        },
        {
            id: 5,
            icon: FaMars,
            name: "Male Weakness Treatment",
            description:
                "Special treatment service for male weakness including P-Short and O-Short problems.",
            couse: "দুর্বলতা কমাতে সহায়তা করে।"
        },
        {
            id: 6,
            icon: FaDumbbell,
            name: "Ligament Injury Treatment",
            description:
                "Professional care and therapy service for ligament injury and muscle recovery.",
            couse: "ইনজুরি দ্রুত ভালো করতে সাহায্য করে।"
        },
        {
            id: 7,
            icon: FaSpa,
            name: "Facial Therapy",
            description:
                "Modern facial therapy service for healthy, fresh, and glowing skin care.",
            couse: "ত্বক উজ্জ্বল করতে সহায়তা করে।"
        },
        {
            id: 8,
            icon: FaHeart,
            name: "Beauty Enhancement Treatment",
            description:
                "Advanced beauty and skin enhancement service for attractive and healthy appearance.",
            couse: "সৌন্দর্য বৃদ্ধি করতে সাহায্য করে।"
        },
        {
            id: 9,
            icon: FaHandSparkles,
            name: "Sweating Problem Treatment",
            description:
                "Special treatment service for excessive sweating problems in hands and feet.",
            couse: "অতিরিক্ত ঘাম কমাতে সাহায্য করে।"
        },
        {
            id: 10,
            icon: FaSyringe,
            name: "PRP Skin & Hair Care",
            description:
                "Complete PRP care solution for healthy skin, hair growth, and beauty treatment.",
            couse: "ত্বক ও চুল ভালো রাখতে সহায়তা করে।"
        }
    ];

    return (
        <div>
            <div className="w-11/12 mx-auto py-10">

                {/* Header */}
                <div className="flex items-center justify-center gap-5 flex-col text-center">
                    <h2 className="text-sm sm:text-base md:text-xl inline border border-blue-200 text-[#989797] rounded-full py-2 px-4">
                        Specialized Services
                    </h2>

                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#033095] my-2">
                        যে সকল রোগের চিকিৎসা করা হয়
                    </h1>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

                    {service.map((e) => {
                        const Icon = e.icon;

                        return (
                            <div
                                key={e.id}
                                className="group p-5 sm:p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <Icon className="text-xl sm:text-2xl" />
                                </div>

                                {/* Title */}
                                <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                    {e.name}
                                </h3>

                                {/* Description */}
                                <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed">
                                    {e.description}
                                </p>

                                {/* Footer */}
                                <div className="mt-3 text-xs text-green-600 font-medium">
                                    {e.couse}
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
};

export default Service;