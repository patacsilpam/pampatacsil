import React from "react";
import { experienceList } from "@/data/globals";
const ExperienceCard = () => {
  return (
    <div className="">
      {experienceList.map((item, key) => (
        <div className="flex flex-col justify-center items-center">
          <div
            key={key}
            className="max-w-lg w-full h-80 relative text-neutral-200 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="flex md:flex-row flex-col md:justify-start justify-center">
              <span className="md:w-1/5 sm:w-full">{item.year}</span>
              <div className="md:mx-5">
                <div>{item.title}</div>
                <div>{item.employer}</div>
              </div>
            </div>
          </div>
          {item.id < 5 && (
            <div className="relative grid place-items-center">
              <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              <div className="border-l-2 h-20"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
