import React from "react";

const MobileApp = () => {
  return (
    <div className="bg-[#EBEDF6] md:h-[400px] h-[350px] w-[400px] relative group overflow-hidden rounded-sm">
      <div className="absolute bottom-0 z-50 group-hover:opacity-100 opacity-0 w-full h-20 px-3 py-10  bg-gradient-to-b from-[#f0eeee0f] to-[#111010e1] transition-opacity duration-300 flex items-center">
        <span className="text-white text-xl font-semibold font-openSans">
          TapAndEat
        </span>
      </div>
      <div>
        <img
          src="/images/projects/mobile-app-1.png"
          alt=""
          className="h-[250px] absolute z-20 -bottom-20 left-20  transform -rotate-12"
          style={{ transform: "rotate(-40deg)" }}
        />
      </div>
      <div className="-mt-24">
        <img
          src="/images/projects/mobile-app-2.png"
          alt=""
          className="h-[250px] absolute z-20 bottom-16 left-32  transform -rotate-45 translate-x-1 -skew-x-3"
        />
      </div>
      <div className="mt-24">
        <img
          src="/images/projects/mobile-app-3.png"
          alt=""
          className="mt-20 h-[250px] absolute z-20 -top-1 -right-3  transform -rotate-45 translate-x-1 -skew-x-3"
        />
      </div>
    </div>
  );
};

export default MobileApp;
