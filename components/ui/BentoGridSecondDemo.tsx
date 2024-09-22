import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";

export default function BentoGridSecondDemo() {
  return (
    <div id="about">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            id={item.id}
            description={item.description}
            className={item.className}
            image={item.image}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className=" flex flex-1 w-full h-[500px] min-h-[9rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    id: 1,
    title: "The Dawn of Innovation",
    description:
      "I'm passionate about coding and enjoy building user-friendly mobile apps and websites. I love turning ideas into functional and accessible digital experiences that make a difference.",
    header: <Skeleton />,
    className: "md:col-span-2 ",
    image: "./workstation.webp",
  },
  {
    id: 2,
    title: "The Digital Revolution",
    description: "I constantly try to improve My tech stack",
    header: <Skeleton />,
    className: "md:col-span-1 bg-white",
    image: "./workstation.webp",
  },
  {
    id: 3,
    title: "The Art of Design",
    description: "Do you want to start a project together?.",
    header: <Skeleton />,
    className: "md:col-span-1",
    image: "./workstation.webp",
  },
  {
    id: 4,
    title: "The Power of Communication",
    description: "Currently building a JS Animation library",
    header: <Skeleton />,
    className: "md:col-span-2",
    image: "./workstation.webp",
  },
];
