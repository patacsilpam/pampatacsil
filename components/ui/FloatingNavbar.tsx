"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { socialList } from "@/data/globals";
import { Menu } from "lucide-react";
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0,
        }}
        className={cn(
          "flex flex-row justify-between items-center  h-[90px]  fixed  inset-x-0 mx-auto  rounded-full  bg-white  z-[5000]  ",
          className
        )}
        style={{
          backdropFilter: "blur(20px) saturate(240%)",
          backgroundColor: "#f7f7f7",
          borderRadius: "2px",
        }}
      >
        <div>
          <div className="flex flex-col gap-x-10 p-10">
            <span className="text-sm md:text-xl font-extrabold text-[#0F0F12]">
              Pam Patacsil
            </span>
            <span className="font-openSans text-sm text-[#1D1E20]">
              Developer
            </span>
          </div>
        </div>
        <div className="flex gap-7">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn("relative  flex items-center")}
            >
              <span>
                <p className="hidden sm:block mx-5 text-sm  text-[#0F0F12] font-openSans font-semibold">
                  {navItem.name}
                </p>
              </span>
            </Link>
          ))}
        </div>
        <div className={`lg:flex flex-row  gap-5 px-10 ${isOpen ? 'block lg:hidden absolute top-20 animate-expand-height' : 'lg:block hidden '}`}>
          {socialList.map((item, key) => (
            <a
              key={key}
              href={item.link}
              className="cursor-pointer font-openSans font-semibold"
              target="_blank"
            >
              <p className=" text-sm font-openSans">{item.title}</p>
            </a>
          ))}
        </div>
        <div className="md:hidden block p-5" onClick={() => setOpen(!isOpen)}>
          <Menu />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
