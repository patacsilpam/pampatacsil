import React from "react";

const TravelOrder = () => {
  return (
    <div className="bg-[#EBEDF6] md:h-[400px] h-[350px] w-[400px] relative group overflow-hidden rounded-sm">
      <div className="absolute bottom-0 z-50 group-hover:opacity-100 opacity-0 w-full h-20 px-3 py-10  bg-gradient-to-b from-[#f0eeee0f] to-[#111010e1] transition-opacity duration-300 flex items-center">
        <span className="text-white text-xl font-semibold font-openSans">
          IPass: Travel Order System
        </span>
      </div>
      <div>
        <img
          src="/images/projects/travel-order-1.png"
          alt=""
          className="mt-44 ml-24  absolute z-20 top-10 left-24 shadow-md"
          style={{ transform: "rotate(-12deg)", scale: "1.5" }}
        />
      </div>
      <div className="">
        <img
          src="/images/projects/travel-order-2.png"
          alt=""
          className="-rotate-12 mt-24 ml-20 shadow-md"
          style={{ transform: "rotate(-12deg)", scale: "1.7" }}
        />
      </div>
    </div>
  );
};

export default TravelOrder;
