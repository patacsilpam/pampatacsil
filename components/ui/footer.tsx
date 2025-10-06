import Link from "next/link";

import { IBM_Plex_Mono } from "next/font/google";
const fontMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"] });
export const Footer = () => {
  return (
    <section className={`p-10 ${fontMono.className}`}>
      <p className="text-xs md:text-base">
        © 2025 Pam Patacsil. All rights reserved.
      </p>
      <Link
        target="_blank"
        href={"https://bryllim.com/"}
        className="text-xs md:text-base"
      >
        Inspired by: <span className=" text-neutral-600">see here</span>
      </Link>
    </section>
  );
};
