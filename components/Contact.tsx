"use client"
import { Send } from "lucide-react";
import { useRef } from "react";
import {motion} from "framer-motion"
const Contact = () => {
  const scrollRef = useRef(null);
  return (
    <div
      id="contact"
      className="relative min-h-[450px] h-full flex flex-col justify-center items-center space-y-5  z-20"
      ref={scrollRef}
      style={{ overflowY: "auto" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.6 }}  
        className="z-20 grid place-items-center gap-y-2">
        <p className="md:text-5xl text-2xl max-w-4xl text-center font-light">
          Let's work something great together.
        </p>
        <p className="md:text-lg sm:text-md font-light shadow-inherit px-7">
          Together, we'll turn your vision into a reality and drive
          impactful results.
        </p>
        <a
          href="mailto:pamelampatacsil@gmail.com"
          className="bg-black text-white text-center p-3 max-w-[250px] w-full flex justify-center gap-2 z-20"
        >
          Get in Touch <Send />
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
