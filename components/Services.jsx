"use client"; 
import { services } from "@/data/globals";
import { motion } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const scrollRef = useRef(null);

  return (
    <div
      id="about"
      className="bg-[#000000] w-screen flex flex-col justify-center items-center min-h-[768px] md:p-20 p-10 gap-10"
      ref={scrollRef}
      style={{ overflowY: "auto" }} 
    >
      <div className="text-white text-center md:space-y-5 space-y-1">
        <h1 className="md:text-5xl text-2xl font-light">
          My Approach
        </h1>
      </div>

      <div className="flex md:flex-row justify-center items-center flex-col gap-10">
        {services.map((service, key) => (
          <motion.div
            key={key}
            className="text-white md:w-[400px] w-full min-h-[350px] h-full p-5 bg-[#0f0f0f]"
            initial={{ opacity: 0, y: 50 }} // Slide up animation
            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide into place
            viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of the element is visible
            transition={{ duration: 0.6 }} // Customize the transition duration
          >
            <span>{<service.icon />}</span>
            <p className="text-2xl mt-8 mb-3 font-extrabold">
              <code>{service.title}</code>
            </p>
            <hr />
            <p className="text-sm font-light mt-8 text-[#e3e2e2]">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
