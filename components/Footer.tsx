"use client"
import { socialList } from "@/data/globals";
import { useRef } from "react";
import {motion} from "framer-motion"
const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();

  const scrollRef = useRef(null);
  return (
    <div  
      ref={scrollRef}
      style={{ overflowY: "auto" }}>
      <motion.div 
        className="p-10 flex md:flex-row flex-col-reverse md:justify-between justify-center items-center md:text-left text-center"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.6 }}  >
        <span className="flex flex-col">
          <p>Built by Pam Patacsil</p>
          <p>&copy; {currentYear}</p>
        </span>
      <ul className="flex flex-row gap-5">
        {socialList.map((item, key) => (
          <a
            key={key}
            href={item.link}
            className="cursor-pointer "
            target="_blank"
          >
            {item.title}
          </a>
        ))}
      </ul>
      </motion.div>
    </div>
  );
};

export default Footer;
