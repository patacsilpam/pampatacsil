"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="grid place-items-center">
      <div className="flex flex-row justify-around gap-2 max-w-3xl overflow-hidden my-44">
        <div className="">
          <Image
            src="/images/icon.png"
            alt="profile"
            width={450}
            height={150}
            className=""
          />
        </div>
        <div className="">
          <h1>Pamela Martin Patacsil</h1>
          <p>Front-End Developer</p>
          <p>La Union, Philippines</p>
          <p>
            Hi, I'm Pam, a software developer with nearly 2 years of experience.
            I build robust web applications using React, Laravel, Inertia, and
            MySQL. I also have expertise in front-end development with Next.js
            and mobile development using Java.
          </p>
        </div>
      </div>
      {/* <div className="-mt-4  h-3 bg-gradient-to-r from-[#0525c8d6] to-[#041d995f] animate-expand" />*/}

      {/**
             * <div className="grid place-items-center mt-[32px]">
              <strong className="text-neutral-200 border border-1 rounded-full p-2 bg-[#e3e2e80d]">
                <ArrowDown size={28} />
              </strong>
            </div><div className="flex md:flex-row flex-col gap-3 mt-5">
              <button className="bg-[#0527c8] h-12 w-[250px] md:w-60  text-white ">
                <span
                  className={`inline-flex cursor-pointer items-center justify-center
              px-7 text-sm font-medium text-white  gap-2`}
                >
                  RESUME
                  <Download />
                </span>
              </button>
              <MagicButton
                title="SHOW MY WORK"
                icon={<Navigation />}
                position="right"
                otherClasses="w-[96]"
              />
            </div> */}
    </div>
  );
};

export default Hero;
