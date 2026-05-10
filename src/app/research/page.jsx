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
    },
    {
        id: 2,
        title: 'Role of PRP Therapy on Diabetic Foot Ulcer (DFU)',
        icon: <FaFlask />,
        description:
            'A Bangladesh-based study evaluating PRP therapy outcomes in diabetic foot ulcer patients.',
        journal: 'Medical Research Publication',
        year: '2022',
    },
    {
        id: 3,
        title: 'Random Donor Platelet vs Single Donor Platelet',
        icon: <FaMicroscope />,
        description:
            'Comparative study of platelet transfusion effectiveness in thrombocytopenic patients.',
        journal: 'Hematology & Transfusion Research',
        year: '2023',
    },
];

const stats = [
    {
        id: 1,
        icon: <FaBookMedical />,
        title: 'Research Papers',
        value: '10+',
    },
    {
        id: 2,
        icon: <FaUserMd />,
        title: 'Medical Studies',
        value: '15+',
    },
    {
        id: 3,
        icon: <FaHospital />,
        title: 'Hospital Collaborations',
        value: '5+',
    },
    {
        id: 4,
        icon: <MdScience />,
        title: 'Clinical Research',
        value: '20+',
    },
];

const ResearchPage = () => {
    return (
        <div className="bg-[#f4f8ff] min-h-screen py-10 md:py-16">
            {/* Hero Section */}
            <div className="w-11/12 max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-[#0463fa] to-[#0a84ff] rounded-3xl p-6 md:p-12 text-white shadow-xl">
                    <div className="flex flex-col gap-5">
                        <span className="w-fit bg-white/20 border border-white/30 px-4 py-2 rounded-full text-sm md:text-base">
                            Research & Publications
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                            Medical Research <br />
                            & Scientific Publications
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl leading-relaxed">
                            Discover our published medical research works, PRP therapy studies,
                            diabetic foot ulcer treatment research, and platelet transfusion studies
                            conducted in Bangladesh.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl p-5 md:p-7 shadow-md hover:shadow-xl transition duration-300"
                    >
                        <div className="text-3xl md:text-4xl text-[#0463fa] mb-4">
                            {item.icon}
                        </div>

                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                            {item.value}
                        </h2>

                        <p className="text-gray-500 mt-2 text-sm md:text-base">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* Research Cards */}
            <div className="w-11/12 max-w-7xl mx-auto mt-14">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Featured Publications
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                        Scientific articles and medical publications focused on PRP therapy,
                        diabetic wound healing, platelet transfusion, and clinical medicine.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {researchData.map((research) => (
                        <div
                            key={research.id}
                            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition duration-300 border border-blue-100"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-[#0463fa] flex items-center justify-center text-3xl mb-5">
                                {research.icon}
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                                {research.title}
                            </h3>

                            <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
                                {research.description}
                            </p>

                            <div className="mt-6 flex items-center justify-between border-t pt-4">
                                <div>
                                    <p className="text-xs text-gray-400">Journal</p>
                                    <h4 className="font-semibold text-sm md:text-base text-gray-700">
                                        {research.journal}
                                    </h4>
                                </div>

                                <span className="bg-[#0463fa] text-white px-4 py-2 rounded-full text-sm">
                                    {research.year}
                                </span>
                            </div>

                            <button className="mt-6 w-full bg-[#0463fa] hover:bg-[#0352cf] text-white py-3 rounded-xl transition duration-300 font-medium">
                                View Research
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResearchPage;