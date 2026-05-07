'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="w-full bg-base-100 shadow-sm">
      <div className="navbar px-3 sm:px-5 lg:px-10">

        {/* LEFT */}
        <div className="navbar-start">

          {/* MOBILE MENU */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/service">Service</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* LOGO */}
          <Link
            href="/"
            className="text-[#0463fa] text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold ml-1"
          >
            Dr. ABM Kamrul Hasan
          </Link>
        </div>

        {/* CENTER MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 font-semibold">

            <Link className={path === "/" ? "text-[#0463fa] font-bold" : ""} href="/">
              Home
            </Link>

            <Link className={path === "/about" ? "text-[#0463fa] font-bold" : ""} href="/about">
              About
            </Link>

            <Link className={path === "/service" ? "text-[#0463fa] font-bold" : ""} href="/service">
              Service
            </Link>

            <Link className={path === "/gallery" ? "text-[#0463fa] font-bold" : ""} href="/gallery">
              Gallery
            </Link>

            <Link className={path === "/contact" ? "text-[#0463fa] font-bold" : ""} href="/contact">
              Contact
            </Link>

          </ul>
        </div>

        {/* RIGHT BUTTON */}
        <div className="navbar-end">
          <a
            href="https://wa.me/8801712704840"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group flex items-center gap-2 bg-[#0436fa] text-white px-3 sm:px-4 lg:px-5 py-2 rounded-full text-xs sm:text-sm lg:text-base font-semibold"
          >

            {/* light effect */}
            <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700"></span>

            <span className="relative z-10">Book Appointment</span>
            <FaLongArrowAltRight className="relative z-10" />
          </a>
        </div>

      </div>
    </nav>
  );
}