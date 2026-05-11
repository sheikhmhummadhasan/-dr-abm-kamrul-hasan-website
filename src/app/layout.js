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
    "ডায়াবেটিক ফুট কেয়ার, PRP থেরাপি, চুল পড়া, ত্বক ও হাঁটু ব্যথার আধুনিক চিকিৎসা কেন্দ্র।",
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
