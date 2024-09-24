"use client"; 
import React from 'react'
import { techList } from '@/data/globals'
import Image from 'next/image'
import { motion } from "framer-motion";
import { useRef } from "react";
const TechStack = () => {
  const scrollRef = useRef(null);
  return (
    <div 
      ref={scrollRef}
      style={{ overflowY: "auto" }}  
      className='flex flex-col justify-center items-center min-h-[768px] h-full'>
      <h1 className='md:text-5xl text-2xl px-2 font-semibold font-openSans md:my-16 my-5 text-center'>My Tech Stack</h1>
      <div className='grid  md:grid-cols-4 grid-cols-2 grid-rows-4 place-items-center '>
          {techList.map((item,key) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Slide up animation
              whileInView={{ opacity: 1, y: 0 }} // Fade in and slide into place
              viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of the element is visible
              transition={{ duration: 0.6 }} key={key} className='border border-[#edededf4] max-h-3xl h-full w-[200px] flex justify-center items-center'>
              <Image className='filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 p-8' src={item.icon} width={150} height={150} alt={item.title} title={item.title}/>
            </motion.div>
          ))}
      </div>
    </div>
  )
}

export default TechStack