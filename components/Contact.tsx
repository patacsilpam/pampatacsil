import { Send } from "lucide-react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative min-h-[450px] h-full flex flex-col justify-center items-center space-y-5  z-20"
    >
      {/*
      <img
        className="absolute top-0 bg-no-repeat bg-cover  opacity-30 overflow-hidden inset-0 -z-1 "
        src="/wavelines.png"
      /> */}
      <div className="z-20 grid place-items-center gap-y-2">
        <p className="md:text-5xl text-2xl max-w-4xl text-center font-light">
          {/*Let's work on something that leads to remarkable success. */}
          Let's work something great together
        </p>
        <p className="md:text-lg sm:text-md font-light shadow-inherit px-7">
          Together, we'll turn your vision into a reality and drive
          impactful results.
        </p>
        <a
          href="mailto:pamelampatacsil@gmail.com"
          className="bg-black text-white text-center p-3 max-w-[250px] w-full flex justify-center gap-2 z-20"
        >
          Get in Touch <Send />
        </a>
      </div>
    </div>
  );
};

export default Contact;
