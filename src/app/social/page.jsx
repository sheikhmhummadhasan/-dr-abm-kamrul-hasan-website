import React from 'react';

const SocialWorkPage = () => {
    return (
        <div>
            <div className="bg-[#eef2ff ]">
                <h1 className="w-11/12 max-w-7xl mx-auto pt-10 text-2xl p-5 font-semibold text-center">আবীবন সদস্য, Blood Transfusion Society of Bangladesh(BTSB), Asian Association of Transfusion Medicine(AATM) প্রতিষ্ঠাতা উপদেষ্টা,নাসরিন আমির সেবা কেন্দ্র (NASK),
                    শেলবরিষা সমাজ জল্যাণ সংস্থা (SSKS)
                    Dr. Kmarul's Poor Fund</h1>
                <div className="">
                    <div className="w-11/12 max-w-7xl mx-auto py-10">
                        {/* White Container */}
                        <div className="bg-white rounded-[32px] p-4 sm:p-6 md:p-8 shadow-lg">
                            {/* Image Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {/* Card 1 */}
                                <div className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="overflow-hidden">
                                        <img
                                            src="/s-logo-1.jpeg"
                                            alt="Social Work"
                                            className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="overflow-hidden">
                                        <img
                                            src="/s-logo-2.jpeg"
                                            alt="Social Work"
                                            className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="overflow-hidden">
                                        <img
                                            src="/s-logo-3.jpeg"
                                            alt="Social Work"
                                            className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    </div>
                                </div>

                            </div>
                            <p className='text-[#989797] text-center text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 mt-6 sm:mt-8 max-w-6xl mx-auto px-2 sm:px-4'>
                                ডাক্তার হওয়া মানেই শুধু রোগী দেখা নয়; বরং মানুষের পাশে দাঁড়ানো, মানবতার সেবা করা এবং সমাজের প্রতি দায়িত্ববোধ থেকে কাজ করাও একজন চিকিৎসকের অন্যতম কর্তব্য।
                                এই লক্ষ্য ও স্বপ্নকে ধারণ করে ২০১৭ সালে আমি আমার নিজ জেলা সিরাজগঞ্জের বেলকুচি উপজেলার প্রত্যন্ত গ্রাম শেলবরিষাতে প্রতিষ্ঠা করি “শেলবরিষা সমাজ কল্যাণ সংস্থা”—যা বর্তমানে সমাজসেবা অধিদপ্তর কর্তৃক নিবন্ধিত একটি সামাজিক সংগঠন।
                                পাশাপাশি আমার বাবা-মায়ের নামে প্রতিষ্ঠা করি “নাসরিন আমির সেবা কেন্দ্র”, যেখানে স্বল্প খরচে গ্রামের সাধারণ মানুষের স্বাস্থ্যসেবা প্রদান করা হয়। মাত্র ২০ টাকা ফি-এর বিনিময়ে প্রয়োজনীয় চিকিৎসা ও ওষুধের ব্যবস্থা করা হয়। এছাড়াও প্রতি মাসে বিশেষজ্ঞ ডাক্তারদের মাধ্যমে ফ্রি মেডিকেল ক্যাম্প আয়োজন করা হয়, যেখানে অসংখ্য রোগী সেবা গ্রহণ করে থাকেন।
                                মানবসেবার এই কার্যক্রমকে আরও বিস্তৃত করতে আমি পরিচালনা করছি “Dr. Kamrul’s Poor Fund”। এর মাধ্যমে প্রতি সপ্তাহে একজন অসহায় রোগীকে সম্পূর্ণ ফ্রি চিকিৎসা, প্রয়োজনীয় পরীক্ষা-নিরীক্ষা ও ওষুধের ব্যবস্থা করা হয়। একই সঙ্গে দরিদ্র ছাত্র-ছাত্রীদের পড়াশোনা ও প্রয়োজনীয় সহায়তা দেওয়ারও চেষ্টা করে যাচ্ছি।
                                মানুষের জন্য কাজ করার এই পথচলা যেন আরও অনেক দূর এগিয়ে যায়—এই প্রত্যাশা নিয়েই মানবতার সেবায় নিজেকে নিয়োজিত রাখতে চাই।
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialWorkPage;