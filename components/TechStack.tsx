import { IBM_Plex_Mono } from "next/font/google";
const fontMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"] });
type techStackProps = {
  title: string;
  stacks: string[];
};
export const TechStack = ({ title, stacks }: techStackProps) => {
  return (
    <section className="">
      <article className="">
        <p className="mb-1 font-medium">{title}</p>
        {stacks.map((stack, index) => (
          <span
            key={index}
            className={`mb-2 md:mb-0 inline-flex items-center whitespace-nowrap rounded-md border border-neutral-600 mx-1 px-2 p-1 ${fontMono.className}`}
          >
            {stack}
          </span>
        ))}
      </article>
    </section>
  );
};
