import { IBM_Plex_Mono, Poppins } from "next/font/google";
import Link from "next/link";
const fontMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"] });

type ProjectProps = {
  id: number;
  name: string;
  description: string;
  imgSrc: string;
  projectLink: string;
  displayedLink: string;
};
export const Project = ({
  id,
  name,
  description,
  imgSrc,
  projectLink,
  displayedLink,
}: ProjectProps) => {
  return (
    <>
      {(id == 1 || id == 2) && (
        <section className="relative inline-grid items-center overflow-hidden  bg-neutral-900 border border-neutral-600 rounded-xl p-6">
          <Link href={projectLink}>
            <h3 className="text-xl font-medium">{name}</h3>
            <p className={`text-sm font-mono mt-3 ${fontMono.className}`}>
              {description}
            </p>
            <p
              className={`mt-5 bg-black w-fit font-mono px-2 ${fontMono.className}`}
            >
              {displayedLink}
            </p>
          </Link>
        </section>
      )}
      {id == 3 && (
        <section className=" relative overflow-hidden  bg-neutral-900 border border-neutral-600 rounded-xl p-6">
          <Link href={projectLink}>
            <h3 className="text-2xl font-medium">{name}</h3>
            <p className={`text-sm font-mono mt-3 ${fontMono.className}`}>
              {description}
            </p>
            <p className={`mt-3 bg-black w-fit  px-2 ${fontMono.className}`}>
              {displayedLink}
            </p>
            <ul
              className={`font-mono mt-5 rounded-md border border-neutral-800 px-2 ${fontMono.className}`}
            >
              <p className="py-3"> Features</p>
              <li className="bg-neutral-800 p-3 rounded-md">
                Full Menu Access
              </li>
              <li className="py-3">Schedule Pickup</li>
              <li className="py-3">Delivery Management</li>
              <li className="py-3">Order History</li>
            </ul>

            {/*<p className="mt-5 bg-black w-fit font-mono px-2">pyng.live</p>*/}
          </Link>
        </section>
      )}
    </>
  );
};
