import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';
import { RiWhatsappLine } from 'react-icons/ri';

const Appoinment = () => {

    const contact = [
        {
            id: 1,
            icon: <FaPhoneAlt />,
            number: '01768780446',
            href: '',
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        {
            id: 2,
            icon: <FaPhoneAlt />,
            number: ' 01854460146',
            href: '',
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        {
            id: 3,
            icon: <FaFacebookF />,
            number: 'Facebook page',
            href: 'https://www.facebook.com/profile.php?id=61580894236206',
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        {
            id: 4,
            icon: <FaYoutube />,
            number: 'Youtube Channel',
            href: 'https://youtube.com/@dr.kamrulhealthcare?si=ye5f6vcHDIdjUxj9',
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        {
            id: 5,
            icon: <RiWhatsappLine />,
            number: 'Whatsapp',
            href: 'https://wa.me/8801712704840',
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        {
            id: 6,
            icon: <MdOutlineMail />,
            number: 'drabmkamrulhasan@gmail.com',
            href: 'https://mail.google.com/mail/?view=cm&fs=1&to=drabmkamrulhasan@gmail.com',
            target: '_blank',
            rel: 'noopener noreferrer'
        },
    ]
    // #033095
    // #0361F6
    return (
        <div>
            <div className="lg:bg-gray-50 p-4 md:p-5 my-10 lg:my-15 w-11/12 lg:w-10/12 mx-auto">

                <div>
                    <h3 className="text-2xl md:text-3xl text-[#033095] font-semibold text-center py-3">
                        Book An Appoinment
                    </h3>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch gap-5 justify-between">

                    {/* Left Side */}
                    <div className="w-full lg:w-1/2">

                        <div>
                            <h4 className="text-lg md:text-xl my-3 font-semibold text-[#0361f6]">
                                BOOK APPOINMENT
                            </h4>

                            <h2 className="text-2xl md:text-3xl mb-9 text-[#0361f6] font-bold">
                                Get Expert Transfusion & Regenerative Medicine Specialist Today.
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#EEF2FF] rounded-2xl p-5 md:p-10 lg:p-15">

                                {
                                    contact.map((e) => {
                                        return (
                                            <a
                                                key={e.id}
                                                className="relative overflow-hidden group bg-gradient-to-r flex items-center justify-center gap-2 px-2 py-4 rounded text-white cursor-pointer text-base md:text-xl from-[#0361F6] to-[#033095]"
                                                href={e.href || "#"}
                                                target={e.target}
                                                rel={e.rel}
                                            >

                                                {/* hover light effect */}
                                                <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700"></span>

                                                <h2 className="relative z-10 text-center">{e.icon}</h2>
                                                <h2 className="relative z-10 text-center break-all">
                                                    {e.number}
                                                </h2>

                                            </a>
                                        )
                                    })
                                }

                            </div>
                        </div>

                        <div className="mb-5">

                            <div className="border-l-4 mt-6 lg:mt-10 p-5 bg-[#EEF2FF] rounded border-l-[#0351f6]">
                                <h2 className="text-lg md:text-xl mb-2 font-semibold text-[#0351f6] flex items-center gap-2">
                                    <IoLocationSharp className='text-2xl text-[#0351f6]' />
                                    Location
                                </h2>

                                <p>
                                    Chamber shedule <br />
                                    Diabetic foot care & PRP Center (Diagnostic Hospital ),  Sirajganj
                                </p>
                                <div className='flex items-center justify-end mt-3'>
                                    <Link className='text-[#0351f6] text-right' href={'https://www.facebook.com/share/18bVg3iPj8/'} target='_blank' rel='noopener noreferrer'>Visite Now</Link>

                                </div>
                            </div>

                            <div className="border-l-4 mt-6 lg:mt-10 p-5 bg-[#EEF2FF] rounded border-l-[#0351f6]">
                                <h2 className="text-lg md:text-xl mb-2 font-semibold text-[#0351f6] flex items-center gap-2">
                                    <IoLocationSharp className='text-2xl text-[#0351f6]' />
                                    Location
                                </h2>

                                <p>
                                    Belkuchi Diabetic Hospital, Belkuchi, Sirajganj <br />
                                    Friday 10 am- 8.00 pm
                                </p>
                                <div className='flex items-center justify-end mt-3'>
                                    <Link className='text-[#0351f6] text-right' target='_blank' rel='noopener noreferrer' href={'https://www.facebook.com/share/1CxRos2iMB/'}>Visite Now</Link>
                                    {/* target: '_blank',
                                    rel: 'noopener noreferrer' */}

                                </div>
                            </div>

                            <div className="border-l-4 mt-6 lg:mt-10 p-5 bg-[#EEF2FF] rounded border-l-[#0351f6]">
                                <h2 className="text-lg md:text-xl mb-2 font-semibold text-[#0351f6] flex items-center gap-2">
                                    <IoLocationSharp className='text-2xl text-[#0351f6]' />
                                    Location
                                </h2>

                                <p>
                                    Care Hospital, Ullapara, Sirajganj
                                    Saturday <br />
                                    10.30 am - 2.30 pm
                                </p>
                                <div className='flex items-center justify-end mt-3'>
                                    <Link className='text-[#0351f6] text-right' href={'https://www.facebook.com/share/1B9PtcbqY9/'}target='_blank' rel='noopener noreferrer' >Visite Now</Link>

                                </div>
                            </div>

                            <div className="border-l-4 mt-6 lg:mt-10 p-5 bg-[#EEF2FF] rounded border-l-[#0351f6]">
                                <h2 className="text-lg md:text-xl mb-2 font-semibold text-[#0351f6] flex items-center gap-2">
                                    <IoLocationSharp className='text-2xl text-[#0351f6]' />
                                    Location
                                </h2>

                                <p>
                                    Dinajpur <br />
                                    Sunday - Tuesday
                                    4.00 pm- 9.00 pm
                                </p>
                                <div className='flex items-center justify-end mt-3'>
                                    <Link target='_blank' rel='noopener noreferrer' className='text-[#0351f6] text-right' href={'https://www.facebook.com/share/1BusPitjKy/'} >Visite Now</Link>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side Map */}
                    <div className="w-full lg:w-1/2 lg:mt-40">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.776976410945!2d88.65382621083678!3d25.612326176156163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb531621454f35%3A0x53bca20d62020e8e!2z4Kah4Ka-4Kef4Ka-4Kas4KeH4Kaf4Ka_4KaVIOCmq-CngeCmnyDgppXgp4fgp5_gpr7gprAg4KaP4Kao4KeN4KahIOCmquCmvyDgpobgprAg4Kaq4Ka_IOCmuOCnh+CmqOCnjeCmn-CmvuCmsCDgpqzgpr_gpqHgpr8g4Kay4Ka_4Kau4Ka_4Kaf4KeH4KahLCDgpqbgpr_gpqjgpr7gppzgpqrgp4HgprAg4Ka24Ka-4KaW4Ka-!5e0!3m2!1sen!2sbd!4v1778146477432!5m2!1sen!2sbd"
                            className='rounded-2xl w-full h-[350px] md:h-[500px] lg:h-full'
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Appoinment;