

import Image from "next/image";
const LandingPage = () => {
  return (
    <div className="bg-[#EBEDF6] md:h-[400px] h-[350px] w-[400px] relative group overflow-hidden rounded-sm">
      <div className="absolute bottom-0 z-50 group-hover:opacity-100 opacity-0 w-full h-20 px-3 py-10  bg-gradient-to-b from-[#f0eeee0f] to-[#111010e1] transition-opacity duration-300 flex items-center filter  ">
        <span className="text-white text-xl font-semibold font-openSans">
          Mang Mac's Landing Page
        </span>
      </div>
      <div>
        <Image
          src="/images/projects/landing-page-1.webp"
          alt="mang-macs-landing-page"
          className=" absolute z-20 top-10 left-28"
          width={400}
          height={400}
          style={{ transform: "rotate(-20deg)", scale: "1.2" }}
        />
      </div>
      <div className="-mt-20">
        <Image
          src="/images/projects/landing-page-2.webp"
          alt="mang-macs-landing-page"
          className="-mt-[80px] -ml-16"
          width={400}
          height={400}
          style={{ transform: "rotate(0deg)", scale: "1.6" }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
