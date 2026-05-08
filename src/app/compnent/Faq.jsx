"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
    {
        question: "What is PRP Therapy and how does it help in wound healing?",
        answer: "PRP (Platelet-Rich Plasma) Therapy is an advanced regenerative treatment prepared from the patient’s own blood. The blood is processed to collect platelet-rich plasma, which contains growth factors and healing proteins. When applied to a wound, PRP helps improve tissue repair, increases blood supply, reduces inflammation, and accelerates the natural healing process.It is especially useful for chronic non- healing ulcers and diabetic foot wounds.",
    },
    {
        question: "Is PRP Therapy effective for diabetic foot ulcers and non-healing wounds",
        answer: "Yes, PRP Therapy has shown promising results in diabetic foot ulcers, pressure sores, and other chronic non-healing wounds. It supports faster wound closure, healthy tissue formation, and infection control when combined with proper diabetic management, dressing, antibiotics, and foot care.However, results may vary depending on the patient’s blood sugar control, infection severity, circulation, and overall health condition.",
    },
    {
        question: "How many PRP sessions are usually needed for better results?",
        answer: "The number of PRP sessions depends on the size, depth, and condition of the wound. In many cases, patients may need 3–6 sessions, usually performed weekly or according to the wound condition.Some patients show improvement after the first few sessions, while severe or long-standing ulcers may require additional treatment and follow-up care.",
    },
    {
        question: "Is PRP Therapy painful or does it have any side effects?",
        answer: "PRP Therapy is generally considered safe because it uses the patient’s own blood. Most patients experience only mild discomfort during the procedure.Minor pain, redness, or swelling at the treatment site may occur temporarily. Serious side effects are rare when the procedure is performed under sterile medical conditions by trained professionals.",
    },
    {
        question: "How long does a PRP session take and when can I return to normal activities?",
        answer: "A typical PRP session usually takes around 30–60 minutes, including blood collection, preparation, wound cleaning, and PRP application.Most patients can return to their normal daily activities on the same day or the following day, depending on the wound condition and doctor’s advice.",
    },
    {
        question: "Can PRP Therapy prevent amputation in severe diabetic foot infection cases?",
        answer: "In selected cases, PRP Therapy may help improve wound healing and reduce the risk of amputation when combined with proper infection control, wound care, vascular assessment, and diabetes management.However, not every severe infection can be treated with PRP alone. Advanced infections, gangrene, or poor blood circulation may still require surgical treatment or amputation to save the patient’s life.",
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