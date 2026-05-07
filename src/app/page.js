import Image from "next/image";
import Navbar from "./compnent/Navbar";
import Hero from "./compnent/Hero";
import Appoinment from "./compnent/Appoinment";
import AboutKamrul from "./compnent/AboutKamrul";
import Service from "./compnent/Service";


export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Appoinment></Appoinment>
      <AboutKamrul></AboutKamrul>
      <Service></Service>
    </>
  );
}
