"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
    {
        question: "Question 1",
        answer: "Answer 1",
    },
    {
        question: "Question 2",
        answer: "Answer 2",
    },
    {
        question: "Question 3",
        answer: "Answer 3",
    },
    {
        question: "Question 4",
        answer: "Answer 4",
    },
    {
        question: "Question 5",
        answer: "Answer 5",
    },
    {
        question: "Question 6",
        answer: "Answer 6",
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-11/12 mx-auto py-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#0361F6]">
                    Frequently Asked Questions
                </h2>
            </div>

            <div className="space-y-4">
                {faqData.map((faq, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isActive
                                ? "bg-[#0361F6] text-white border-[#0361F6]"
                                : "bg-white border-gray-200"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                            >
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                                    {faq.question}
                                </h3>

                                <span className="text-lg">
                                    {isActive ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isActive
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p
                                        className={`px-5 pb-5 text-sm sm:text-base leading-relaxed ${isActive ? "text-white" : "text-gray-600"
                                            }`}
                                    >
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQ;