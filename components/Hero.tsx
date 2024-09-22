"use client";
import { ArrowDown, ArrowBigRight } from "lucide-react";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Navigation } from "lucide-react";
import { Download } from "lucide-react";
import { HeroHighlight } from "./ui/HeroHighlight";
const Hero = () => {
  return (
    <div className="min-h-[450px] h-full">
      <div className="flex flex-row justify-center items-center my-44">
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-4xl w-full md:text-center px-[3rem] ">
            {" "}
            <TextGenerateEffect
              words={`I'm Pam 👋, a software developer who turns ideas into interactive experience.`}
              className="text-[#1d1e20] font-openSans font-semibold md:max-w-3xl w-full"
            />
            {/* <div className="-mt-4  h-3 bg-gradient-to-r from-[#0525c8d6] to-[#041d995f] animate-expand" />*/}
            <div className="mt-5 transition ease-in-out  duration-75 delay-150">
              <p className="text-md font-light text-[#46474e]">
                With a focus on user-centered design, I leverage my coding and
                design expertise to create exceptional digital experiences.
                Committed to delivering innovative solutions that engage and
                delight users.
              </p>
            </div>
            
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
