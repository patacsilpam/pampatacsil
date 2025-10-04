import { Github, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const fontMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"] });
type BannerProps = {
  imgSrc: string;
  name?: string;
  title?: string;
  description?: string;
};
export const Banner = ({ imgSrc, name, title, description }: BannerProps) => {
  return (
    <section className="max-w-4xl w-full px-3 md:px-0">
      <article className="flex flex-row  gap-x-3 md:gap-x-7">
        <div>
          <div>
            {" "}
            <Image
              src={imgSrc}
              alt="Banner Image"
              width={500}
              height={500}
              className="h-36 md:h-80 w-full object-cover rounded-md mx-auto md:mx-0"
            />
            <Link
              href={"https://www.linkedin.com/in/pamelapatacsil/"}
              className={`flex md:hidden items-center  mt-3 text-xs gap-x-3  border border-neutral-600 rounded-md p-2 ${fontMono.className}`}
            >
              <Linkedin size={12} />
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="mb-3 md:mb-10 space-y-1 md:space-y-4 ">
            {" "}
            <h1
              className={`text-xl md:text-3xl lg:text-4xl font-black tracking-wide ${poppins.className}`}
            >
              <strong>{name}</strong>
            </h1>
            <p
              className={`text-lg md:text-2xl font-extralight ${fontMono.className}`}
            >
              {title}
            </p>
            <p
              className={`max-w-full md:max-w-[400px] text-justify  text-xs md:text-sm text-neutral-400 tracking-wide ${fontMono.className}`}
            >
              {description} <span className="text-neutral-600">Read More.</span>
            </p>
          </div>
          <div className="hidden md:flex flex-row gap-x-6">
            <a
              href={"mailto:pamelampatacsil@gmail.com"}
              className={`flex gap-x-3  border border-neutral-600 rounded-md p-2 ${fontMono.className}`}
            >
              <MessageCircle />
              Send Email
            </a>
            <Link
              href={"https://github.com/patacsilpam"}
              className={`flex gap-x-3  border border-neutral-600 rounded-md p-2 ${fontMono.className}`}
            >
              <Github />
              GitHub
            </Link>
            <Link
              href={"https://www.linkedin.com/in/pamelapatacsil/"}
              className={`flex gap-x-3  border border-neutral-600 rounded-md p-2 ${fontMono.className}`}
            >
              <Linkedin />
              LinkedIn
            </Link>
          </div>
        </div>
      </article>
      <div className="mt-1 flex md:hidden flex-row w-full gap-x-3">
        <a
          href={"mailto:pamelampatacsil@gmail.com"}
          className={`flex items-center justify-center gap-x-3 text-xs w-full  border border-neutral-600 rounded-md p-2 ${fontMono.className}`}
        >
          <MessageCircle size={16} />
          Send Email
        </a>
        <Link
          href={"https://github.com/patacsilpam"}
          className={`flex items-center justify-center gap-x-3 w-full text-xs   border border-neutral-600 rounded-md p-2 ${fontMono.className}`}
        >
          <Github size={16} />
          GitHub
        </Link>
      </div>
    </section>
  );
};
