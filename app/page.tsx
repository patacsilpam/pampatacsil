import { Banner } from "@/components/banner";
import { Project } from "@/components/project";
import { TechStack } from "@/components/TechStack";
import { Blocks, File, PanelsLeftBottomIcon, FileBadge } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/ui/footer";
import { IBM_Plex_Mono } from "next/font/google";
const fontMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return (
    <main className="max-w-5xl w-full mx-auto text-white">
      <section className="mt-10 mb-10 flex flex-col items-center">
        <Banner
          imgSrc={"/profile-pic.png"}
          name="Pam Martin Patacsil"
          title="Developer"
          description="I build things for the web. Mostly to make ideas real, sometimes just to see what’s possible. I’m driven to build fast, scalable, and polished products—MVPs, full platforms, and everything in between."
        />
        {/*<p className="mt-10 text-center text-neutral-800">Scroll Down</p>*/}
      </section>

      <section className="max-w-4xl w-full mx-auto">
        <h3 className=" inline-flex items-center gap-3 text-3xl font-medium my-3 mx-2">
          {" "}
          <PanelsLeftBottomIcon />{" "}
          <span className={`${fontMono.className}`}>Recent Projects</span>
        </h3>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-3">
          <div className="col-span-1 grid grid-rows-2 gap-4">
            <Project
              id={1}
              name="Omniza"
              description="A bespoke platform for curating luxury Ibiza experiences. Connects users with private villas, chefs, and boats."
              imgSrc="/images/projects/mobile-app-2.webp"
              projectLink="https://github.com/"
              displayedLink="omniza.vip"
            />

            <Project
              id={2}
              name="Pyng"
              description="A platform enabling experts to easily monetize 1-on-1 chat. Designed for inbound revenue generation without scheduling clutter."
              imgSrc="/images/projects/mobile-app-2.webp"
              projectLink="https://github.com/"
              displayedLink="pyng.live"
            />
          </div>

          <Project
            id={3}
            name="Foodie"
            description="A dedicated mobile ordering application for Mang Macs Restaurant. Streamlines pickup and delivery for the full menu and special offers."
            imgSrc="/images/projects/mobile-app-2.webp"
            projectLink="https://tinyurl.com/tap-and-eat"
            displayedLink="tinyurl.url/tapandeat"
          />
        </article>
      </section>
      <section className="max-w-4xl w-full mx-auto mt-7">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="col-span-2">
            <h3 className="font-mono inline-flex items-center gap-3 text-3xl font-medium my-3 mx-2">
              {" "}
              <Blocks />{" "}
              <span className={`${fontMono.className}`}>Tech Stack</span>
            </h3>
            <article className=" rounded-md p-3 bg-neutral-900 border border-neutral-600">
              <TechStack
                title="Front End"
                stacks={[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "NextJS",
                  "Tailwind CSS",
                ]}
              />
              <br />
              <TechStack
                title="Back End"
                stacks={["PHP", "Laravel", "NodeJS", "PostgreSQL", "MySQL"]}
              />
              <br />
              <TechStack
                title="Others"
                stacks={["Figma", "WordPress + Elementor", "Git", "GitHub"]}
              />
            </article>
          </article>

          <article className="col-span-1">
            <h3 className="font-mono inline-flex items-center gap-3 text-3xl font-medium my-3 mx-2">
              {" "}
              <FileBadge />{" "}
              <span className={`${fontMono.className}`}>Certications</span>
            </h3>
            <article className="p-3  bg-neutral-900 border border-neutral-600 rounded-md">
              <div className="bg-black font-mono p-2 rounded">
                <Link
                  target="_blank"
                  href={
                    "https://pdfhost.io/v/b3bS9UrYdk_Complete_2024_Web_Development_Bootcamp"
                  }
                  className={fontMono.className}
                >
                  Complete Web Development Bootcamp
                </Link>
              </div>
              <div className="bg-black font-mono mt-2 p-2 rounded">
                <Link
                  target="_blank"
                  href={
                    "https://pdfhost.io/v/b3bS9UrYdk_Complete_2024_Web_Development_Bootcamp"
                  }
                  className={fontMono.className}
                >
                  Cyber Range Exercise - DICT R1
                </Link>
              </div>
            </article>
            <article className="h-[84px] mt-2 p-3  w-full bg-neutral-900 border border-neutral-600 rounded-md">
              <div className=" border border-neutral-600 font-mono p-2 rounded">
                <Link
                  href={
                    "https://pdfhost.io/v/b3bS9UrYdk_Complete_2024_Web_Development_Bootcamp"
                  }
                  className="h-10 flex items-center gap-x-3"
                >
                  {" "}
                  <File />
                  <span className={fontMono.className}>View my CV</span>
                </Link>
              </div>
            </article>
          </article>
        </section>
      </section>

      <section className="max-w-4xl w-full mx-auto text-center mt-16">
        <div className="border-[1px] border-neutral-800 max-w-4xl" />
        <Footer />
      </section>
    </main>
  );
}
