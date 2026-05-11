import React from 'react';
import { FaBookMedical, FaMicroscope, FaUserMd, FaHospital, FaFlask } from 'react-icons/fa';
import { MdScience, MdHealthAndSafety } from 'react-icons/md';

const researchData = [
    {
        id: 1,
        title: 'Treatment Of Chronic Foot Ulcers In Patients With Diabetes Using PRP',
        icon: <MdHealthAndSafety />,
        description:
            'Research on the effectiveness of Platelet-Rich Plasma (PRP) therapy for diabetic foot ulcers and chronic wound healing.',
        journal: 'International Journal of Medical & Pharmaceutical Research',
        year: '2022',
        href: '/one.pdf',
    },
    {
        id: 2,
        title: 'Decoding the Science of Fingerprints: The Influence of Sex and BloodGroup on Dermatoglyphic Traits among Medical Students',
        icon: <FaFlask />,
        description:'International Journal of forensic Expert Alliance',
        journal: 'Medical Research Publication',
        year: '2024',
        href: '/tow.pdf',
    },
    {
        id: 3,
        title: '3. The Pattern of Hematological Abnormalities in NS1 Positive Dengue Fever',
        icon: <FaMicroscope />,
        description:
            'Asian Hematology Research Journal.',
        journal: 'Hematology & Transfusion Research',
        year: '2023',
        href: '/three.pdf',
    },
    {
        id: 4,
        title: '4. Platelet-Rich Plasma Therapy for Hair Loss Treatment in North Bengal Medical College, Sirajganj, Bangladesh',
        icon: <FaBookMedical />,
        description:
            'International Journal of Dermatology Sciences.',
        journal: 'Clinical Hematology Journal',
        year: '2023',
        href: '/four.pdf',
    },
    {
        id: 5,
        title: 'Role of Platelet Rich Plasma (PRP) Therapy on Diabetic Foot Ulcer (DFU): A Prospective Study in Bangladesh',
        icon: <MdScience />,
        description:
            'Jouranl Of SMMAMC.',
        journal: 'Medical Science Review',
        year: '2023',
        href: '/five.pdf',
    },
];

const ResearchPage = () => {
    return (
        <div className="bg-[#f4f8ff] min-h-screen py-10 md:py-16">

            {/* Hero */}
            <div className="w-11/12 max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-[#0463fa] to-[#0a84ff] rounded-3xl p-6 md:p-12 text-white shadow-xl">
                    <h1 className="text-3xl md:text-6xl font-bold">
                        Medical Research & Publications
                    </h1>
                    <p className="mt-4 text-white/90">
                        PRP therapy, diabetic foot ulcer treatment & platelet transfusion studies.
                    </p>
                </div>
            </div>

            {/* Cards */}
            <div className="w-11/12 max-w-7xl mx-auto mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                {researchData.map((research) => (
                    <a
                        key={research.id}
                        href={research.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition duration-300 border border-blue-100 block"
                    >

                        {/* Icon */}
                        <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#0463fa] flex items-center justify-center text-2xl mb-4">
                            {research.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-800">
                            {research.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mt-3 text-sm">
                            {research.description}
                        </p>

                        {/* Footer */}
                        <div className="mt-5 flex justify-between items-center border-t pt-4">
                            <span className="text-xs text-gray-500">
                                {research.journal}
                            </span>

                            <span className="bg-[#0463fa] text-white px-3 py-1 rounded-full text-xs">
                                {research.year}
                            </span>
                        </div>

                        {/* Button feel */}
                        <button className="mt-6 w-full bg-[#0463fa] hover:bg-[#0352cf] text-white py-3 rounded-xl transition duration-300 font-medium">
                            View PDF →
                        </button>

                    </a>
                ))}

            </div>
        </div>
    );
};

export default ResearchPage;