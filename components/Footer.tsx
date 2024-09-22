import React from "react";
import MagicButton from "./ui/MagicButton";
import { socialList } from "@/data/globals";
import Link from "next/link";

const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();
  return (
    <div className="p-10 flex md:flex-row flex-col-reverse md:justify-between justify-center items-center md:text-left text-center">
      <span className="flex flex-col">
        <p>Built by Pam Patacsil</p>
        <p>&copy; {currentYear}</p>
      </span>
      <ul className="flex flex-row gap-5">
        {socialList.map((item, key) => (
          <a
            key={key}
            href={item.link}
            className="cursor-pointer "
            target="_blank"
          >
            {item.title}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
