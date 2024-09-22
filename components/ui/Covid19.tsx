import React from "react";

const Covid19 = () => {
  return (
    <div className="bg-[#EBEDF6] md:h-[400px] h-[350px] w-[400px] relative group overflow-hidden rounded-sm">
      <div className="absolute bottom-0 z-50 group-hover:opacity-100 opacity-0 w-full h-20 px-3 py-10  bg-gradient-to-b from-[#f0eeee0f] to-[#111010e1] transition-opacity duration-300 flex items-center">
        <span className="text-white text-xl font-semibold font-openSans">
          CovBot
        </span>
      </div>
      <div>
        <img
          src="/images/projects/covid-19-1.png"
          alt=""
          className=" w-full absolute z-20 -bottom-5 left-32 skew-x-6  transform -rotate-45 scale-150"
          style={{ transform: "rotate(-12deg)" }}
        />
      </div>
      <div className="">
        <img
          src="/images/projects/covid-19-2.png"
          alt=""
          className="h-[500px] absolute left-5"
          style={{ transform: "rotate(-12deg)" }}
        />
      </div>
    </div>
  );
};

export default Covid19;
