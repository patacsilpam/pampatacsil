import { Footer } from "@/components/ui/footer";
import { ChevronLeft } from "lucide-react";
import { Poppins, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const fontMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"] });
export default function Page() {
  return (
    <section
      className={`mt-14 px-3 space-y-7 text-white max-w-3xl mx-auto text-justify leading-relaxed tracking-normal ${fontMono.className}`}
    >
      <article>
        <p
          className={`inline-flex  items-center font-bold text-2xl md:text-4xl tracking-wide ${poppins.style}`}
        >
          <Link href={"/"} title="Back" className="-ml-5">
            <ChevronLeft size={52} />
          </Link>
          <span className="ml-10">Hello, I'm Pam 👋</span>
        </p>
      </article>
      <article className="mt-7">
        <p>
          I like building things that work — mostly to turn ideas into something
          real, sometimes just to see what’s possible.
        </p>
      </article>
      <article>
        <p>
          I enjoy understanding how things connect and simplifying what’s
          complex. I work best when solving problems that need both logic and
          structure — the kind that reward patience and precision.
        </p>
      </article>
      <article>
        <p>
          Beyond coding, I slow things down — reading old books and taking
          photos. Lately, I’ve been diving into Zero to One by Peter Thiel,
          exploring how small ideas can grow into something bigger.
        </p>
      </article>
      <article>
        <p className="font-semibold mb-3">📚 Favorite Books & Movies</p>
        <p className="mb-3">
          What I know and how I think are shaped by the things I’ve read and
          watched. Here are a few that left a mark:
        </p>
        <ul className="list-disc ml-10">
          <li>The Psychology of Money</li>
          <li>Interstellar</li>
          <li>When Nietzsche Wept</li>
          <li>Notes from the Underground</li>
        </ul>
      </article>
      <article>
        <p className="font-semibold mb-3">💭 Favorite Quote</p>
        <p className="border border-neutral-400 bg-neutral-800 p-5">
          “He who has a why to live can bear almost any how.” — Friedrich
          Nietzsche
        </p>
      </article>
      <article className="">
        <p>
          I’m most responsive over{" "}
          <a
            className="text-neutral-400"
            href="mailto:pamelampatacsil@gmail.com"
          >
            email
          </a>{" "}
          and occasionally active on <a href="">Twitter</a>. Always open to good
          conversations and interesting ideas.
        </p>
      </article>

      <article className="text-center mt-10">
        <div className="border-[1px] border-neutral-800 max-w-4xl" />
        <Footer />
      </article>
    </section>
  );
}
