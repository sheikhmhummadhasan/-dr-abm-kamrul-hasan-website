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
  title: "Dr ABM Kamrul Hasan | Best Diabetic Foot & Specialist Doctor in Bangladesh",
  description:
    "Dr ABM Kamrul Hasan provides advanced treatment for diabetic foot, PRP therapy, hair loss, skin and knee pain with modern medical care in Bangladesh.",
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
