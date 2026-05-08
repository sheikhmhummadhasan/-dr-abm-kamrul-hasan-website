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
