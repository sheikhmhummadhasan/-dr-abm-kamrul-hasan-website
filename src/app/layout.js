import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./compnent/Navbar";
import Footer from "./compnent/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Dr ABM Kamrul Hasan | Diabetic Foot & Wound Care Expert",
  description:
    "ডায়াবেটিক ফুট, দীর্ঘদিনের ক্ষত, চুল পড়া/টাক, ত্বকের সমস্যা এবং যৌন দুর্বলতায় PRP (Platelet Rich Plasma) এবং Stem Cell Therapy চিকিৎসক",
  icons: {
    icon: "/favicon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
