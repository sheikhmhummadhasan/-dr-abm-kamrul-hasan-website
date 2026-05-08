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
  title: "Diabetic Foot Care & PRP Center Sirajganj",
  description:
    "ডায়াবেটিক ফুট কেয়ার, PRP থেরাপি, চুল পড়া, ত্বক ও হাঁটু ব্যথার আধুনিক চিকিৎসা কেন্দ্র।",
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
