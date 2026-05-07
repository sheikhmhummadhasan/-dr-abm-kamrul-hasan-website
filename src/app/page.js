import Image from "next/image";
import Navbar from "./compnent/Navbar";
import Hero from "./compnent/Hero";
import Appoinment from "./compnent/Appoinment";


export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Appoinment></Appoinment>
    </>
  );
}
