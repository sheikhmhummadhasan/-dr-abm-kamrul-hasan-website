"use client";

import React from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahim Ahmed",
    rating: 5,
    time: "2 weeks ago",
    review:
      "Doctor er behavior onek valo chilo. Treatment niye ami onek satisfied.",
  },
  {
    id: 2,
    name: "Sadia Islam",
    rating: 4.5,
    time: "1 month ago",
    review:
      "Service khub professional. Staff ra onek helpful chilo.",
  },
  {
    id: 3,
    name: "Hasan Ali",
    rating: 5,
    time: "3 weeks ago",
    review:
      "PRP treatment er result onek valo peyesi. Highly recommended.",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    rating: 4.8,
    time: "2 months ago",
    review:
      "Doctor shob kichu bistarito bujhiye dise. Environment o clean.",
  },
  {
    id: 5,
    name: "Karim Sheikh",
    rating: 5,
    time: "3 months ago",
    review:
      "Best treatment experience. Ami fully satisfied.",
  },
  {
    id: 6,
    name: "Mim Akter",
    rating: 4.7,
    time: "1 month ago",
    review:
      "Appointment process onek easy chilo. Doctor friendly.",
  },
  {
    id: 7,
    name: "Jannat Islam",
    rating: 5,
    time: "2 weeks ago",
    review:
      "Hair PRP treatment er result onek bhalo peyesi. Thanks doctor.",
  },
  {
    id: 8,
    name: "Rakib Hossain",
    rating: 4.9,
    time: "1 month ago",
    review:
      "Clinic environment clean and comfortable. Staff behavior awesome.",
  },
  {
    id: 9,
    name: "Tania Akter",
    rating: 4.6,
    time: "3 weeks ago",
    review:
      "Skin treatment niye onek satisfied. Doctor khub attentive.",
  },
  {
    id: 10,
    name: "Sabbir Khan",
    rating: 5,
    time: "2 months ago",
    review:
      "Khub valo service peyesi. Doctor onek experienced.",
  },
  {
    id: 11,
    name: "Nayeem Hasan",
    rating: 4.8,
    time: "1 month ago",
    review:
      "Appointment time maintain koreche. Overall great experience.",
  },
  {
    id: 12,
    name: "Farzana Rahman",
    rating: 5,
    time: "2 weeks ago",
    review:
      "Doctor patient der shathe onek politely kotha bolen.",
  },
  {
    id: 13,
    name: "Imran Sheikh",
    rating: 4.7,
    time: "3 months ago",
    review:
      "Knee pain treatment er por onek better feel kortesi.",
  },
  {
    id: 14,
    name: "Sumaiya Noor",
    rating: 4.9,
    time: "2 months ago",
    review:
      "Service quality and treatment system onek impressive.",
  },
  {
    id: 15,
    name: "Mehedi Hasan",
    rating: 5,
    time: "1 month ago",
    review:
      "Highly recommended clinic. Amar experience onek valo chilo.",
  },
];

const PatientReviews = () => {
    return (
        <section className="bg-[#eef2ff] py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="inline-block border border-blue-200 text-[#0361F6] rounded-full px-5 py-2 text-sm sm:text-base font-medium">
                        Patient Reviews
                    </h2>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-gray-900">
                        Trusted By 20+ Happy Patients
                    </h1>

                    <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
                        Patients are giving excellent feedback about treatment and service quality.
                    </p>
                </div>

                {/* Review Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* User Info */}
                            <div className="flex items-center gap-4">
                                <div className="text-[#0361F6] text-5xl">
                                    <FaUserCircle />
                                </div>

                                <div>
                                    <h3 className="font-bold text-base sm:text-lg text-gray-900">
                                        {review.name}
                                    </h3>

                                    <p className="text-gray-500 text-sm">
                                        {review.time}
                                    </p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mt-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        className={`text-lg ${star <= Math.floor(review.rating)
                                                ? "text-yellow-400"
                                                : "text-yellow-300"
                                            }`}
                                    />
                                ))}

                                <span className="ml-2 text-sm font-semibold text-gray-700">
                                    {review.rating}
                                </span>
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
                                {review.review}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PatientReviews;