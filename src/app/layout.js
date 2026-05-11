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
  title: "Dr ABM Kamrul Hasan | Best Diabetic Foot & Specialist Doctor in Bangladesh",
  description:
    "Dr ABM Kamrul Hasan provides advanced treatment for diabetic foot, PRP therapy, hair loss, skin and knee pain with modern medical care in Bangladesh.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "Dr ABM Kamrul Hasan",
    "diabetic foot treatment Bangladesh",
    "PRP therapy Bangladesh",
    "hair loss treatment",
    "knee pain doctor",
    "skin treatment Bangladesh",
  ],
  openGraph: {
    title: "Dr ABM Kamrul Hasan | Transfusion & Regenerative Medicine Specialist",
    description:
      "Advanced diabetic foot, PRP therapy and modern treatment in Bangladesh.",
    url: "https://drabmkamrulhasan.com/spek-doc-1.jpeg",
    type: "website",
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
