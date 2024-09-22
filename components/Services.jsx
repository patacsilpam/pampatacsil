import React from "react";
import { services } from "@/data/globals";
const Services = () => {
  return (
    <div
      id="about"
      className="bg-[#000000] flex flex-col justify-center items-center  w-screen min-h-[768px] md:p-20 p-10 gap-10"
    >
      <div className="text-white text-center md:space-y-5 space-y-1">
        <h1 className="md:text-5xl text-2xl  font-light">
          Envision. Craft. Engage
        </h1>
        <div className="max-w-2xl">
          <p className="font-openSans font-light md:text-xl text-sm text-[#f7f7f7] text">
            I turn your vision into reality with precise design and development,
            creating engaging digital experiences that resonate with your
            audience.
          </p>
        </div>
      </div>
      <div className=" flex md:flex-row justify-center items-center flex-col gap-10 ">
        {services.map((service, key) => (
          <div
            key={key}
            className="text-white md:w-[400px] w-full min-h-[300px] h-full p-5 bg-[#141414]"
          >
            <span>{<service.icon />}</span>
            <p className="text-2xl mt-8 mb-3 ">{service.title}</p>
            <hr />
            <p className="text-sm font-light mt-8 text-[#e3e2e2]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
