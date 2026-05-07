import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoCall, IoLocationSharp, IoLogoWhatsapp } from 'react-icons/io5';
import { MdEmail, MdKeyboardArrowRight } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import { TbWorld } from 'react-icons/tb';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-[#1b2c51] text-base-content p-10">
                <nav>
                    <h6 className="footer-title text-white">DR ABM KAMRUL HASAN</h6>
                    <a className="link link-hover text-white   flex items-center gap-1"> <MdKeyboardArrowRight />MBBS,BCS (Health)</a>
                    <a className="link link-hover  text-white flex items-center gap-1"> <MdKeyboardArrowRight />DBST, MCPS (Transfusion Medicine)</a>
                    <a className="link link-hover  text-white flex items-center gap-1"> <MdKeyboardArrowRight />PGT (Medicine)</a>
                    <a className="link link-hover  text-white flex items-center gap-1"> <MdKeyboardArrowRight />CCD, EDC (BIRDEM)</a>
                    <a className="link link-hover  text-white flex items-center gap-1"> <MdKeyboardArrowRight />Fellowship in Diabetology (India)</a>
                    <a className="link link-hover  text-white flex items-center gap-1"> <MdKeyboardArrowRight />MSC in Setm Cell & Regenerative Medicne</a>
                    <a className="link link-hover  text-white flex items-center gap-1"> <MdKeyboardArrowRight />Advanced Diploma in Dermatology & Sexology (UK)</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Specialized Services</h6>
                    <a className="link link-hover text-white flex items-center gap-1"><MdKeyboardArrowRight /> Diabetic Medicine.</a>
                    <a className="link link-hover text-white flex items-center gap-1"><MdKeyboardArrowRight /> Diabetic Foot Care / None Healing Ulcers.</a>
                    <a className="link link-hover text-white flex items-center gap-1"><MdKeyboardArrowRight /> PRP Therapy</a>
                    <a className="link link-hover text-white flex items-center gap-1"><MdKeyboardArrowRight /> Setm Cell-like Regenerative Treatment.</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Contact Information</h6>
                    <a className="link link-hover flex  gap-1 text-white"> Diabetic Foot Care & PRP Center
                        (Diagnostic Hospital), Sirajganj
                        📍<br /> Adjacent to Zila Parishad Mosque, Diarboddonath, Shialkol</a>
                    {/* <a className="link link-hover flex items-center gap-1 text-white"><IoLocationSharp className='text-xl'/> Dinajpur Sadar, Dinajpur.</a> */}
                    <a className="link link-hover text-white flex items-center gap-1"><IoCall className='text-xl' /> 01854460146</a>
                    <a className="link link-hover text-white flex items-center gap-1"><MdEmail className='text-xl' /> drabmkamrulhasan@gmail.com </a>
                    <a className="link link-hover text-white flex items-center gap-1"><MdEmail className='text-xl' /> abmkamrulhasan32@gmail.com </a>
                    <a className="link link-hover text-white flex items-center gap-1"><RiWhatsappFill className='text-xl' /> 8801712704840</a>
                    <a href='https://diabeticfootcarebdltd.com/?
                     target="_blank"
                            rel="noopener noreferrer"
' className="link link-hover text-white flex items-center gap-1"><TbWorld className='text-xl'/>https://diabeticfootcarebdltd.com/?</a>

                </nav>
                <nav>
                    <h6 className="footer-title text-white">PRP Therapy given on</h6>
                    <a className="link link-hover text-white flex items-center gap-1"><MdKeyboardArrowRight /> PRP on Diabetic Foot Infection / Diabetic Foot Ulcer</a>
                    <a className="link link-hover text-white flex items-center gap-1"><MdKeyboardArrowRight /> PRP on Non Healing Ulcer</a>
                    <a className="link link-hover text-white flex items-center gap-1"><MdKeyboardArrowRight /> Hair PRP</a>
                    <a className="link link-hover text-white flex items-center gap-1"><MdKeyboardArrowRight /> Facial PRP</a>
                    <a className="link link-hover text-white flex items-center gap-1"><MdKeyboardArrowRight /> PRP on Erectile Dysfunction (ED)</a>
                    <a className="link link-hover text-white flex items-center gap-1"><MdKeyboardArrowRight /> PRP on Osteoarthritis</a>
                </nav>

            </footer>
            <footer className="footer bg-gray-300 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p>
                        Dr A B M Kamrul Hasan.
                        <br />
                        © Dr.ABM Kamrul Hasan.All rights reserved.
                    </p>
                </aside>
                <nav className=" md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a target="_blank"
                            rel="noopener noreferrer"
                            href='https://youtube.com/@dr.kamrulhealthcare?si=ye5f6vcHDIdjUxj9'>
                            <FaYoutube className='text-3xl text-[#dc0606]' />
                        </a>
                        <a target="_blank"
                            rel="noopener noreferrer"
                            href='https://www.facebook.com/share/18XTGpZCwB/'>
                            <FaFacebook className='text-3xl text-[#0968d4]' />

                        </a>
                        <a target="_blank"
                            rel="noopener noreferrer"
                            href="https://wa.me/8801712704840">
                            <RiWhatsappFill className='text-3xl text-[#20be38]' />

                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;