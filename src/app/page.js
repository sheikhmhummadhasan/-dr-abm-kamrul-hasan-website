import Image from "next/image";
import Navbar from "./compnent/Navbar";
import Hero from "./compnent/Hero";
import Appoinment from "./compnent/Appoinment";
import AboutKamrul from "./compnent/AboutKamrul";
import Service from "./compnent/Service";
import Posible from "./compnent/Posible";
import Edq from "./compnent/Edq";
import FAQ from "./compnent/Faq";
import PatientReviews from "./compnent/Review";

export const metadata = {
  title: "Dr ABM Kamrul Hasan | Diabetic Foot & Wound Care Expert",
  description:
    "ডায়াবেটিক ফুট, দীর্ঘদিনের ক্ষত, চুল পড়া/টাক, ত্বকের সমস্যা এবং যৌন দুর্বলতায় PRP (Platelet Rich Plasma) এবং Stem Cell Therapy চিকিৎসক",
  icons: {
    icon: "/favicon.png",
  },
};

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Appoinment></Appoinment>
      <AboutKamrul></AboutKamrul>
      <Service></Service>
      <Posible></Posible>
      <Edq></Edq>
      <FAQ></FAQ>
      <PatientReviews></PatientReviews>
    </>
  );
}
