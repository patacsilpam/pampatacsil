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
        <p className="md:text-4xl text-2xl md:max-w-md text-center font-light px-2">
          Let's work something great together.
        </p>
        <a
          href="mailto:pamelampatacsil@gmail.com"
          className="bg-black text-white text-center mt-3 p-3 max-w-[250px] w-full flex justify-center gap-2 z-20 "
        >
          Get in Touch <Send />
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
