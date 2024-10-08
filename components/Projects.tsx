"use client";
import Covid19 from "./ui/Covid19";
import EckoPhotography from "./ui/EckoPhotography";
import LandingPage from "./ui/LandingPage";
import MangMacs from "./ui/MangMacs";
import MobileApp from "./ui/MobileApp";
import TravelOrder from "./ui/TravelOrder";
import {motion} from "framer-motion"
import { useRef } from "react";
export default function Projects() {
  const scrollRef = useRef(null);
  return (
    <div
      id="projects"
      className="min-h-[768px] h-full w-screen bg-[#000000] flex flex-col items-center justify-center p-10"
      ref={scrollRef}
      style={{ overflow: "auto" }}
    >
      <h1 className="text-white font-openSans md:text-5xl text-2xl max-w-2xl w-full text-center">
        Take a look at the latest project that I've crafted.
      </h1>
      <motion.div 
        className="grid place-items-center lg:grid-cols-2 grid-cols-1 gap-10 p-20"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.6 }} >
        <LandingPage />
        <MobileApp />
        <Covid19 />
        <MangMacs />
        <TravelOrder />
        <EckoPhotography />
      </motion.div>
    </div>
  );
}
