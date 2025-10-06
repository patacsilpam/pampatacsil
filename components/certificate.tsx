import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
const fontMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "700"] });
type CertificateProps = {
  certName: string;
  certLink: string;
};
export const Certificate = ({ certName, certLink }: CertificateProps) => {
  return (
    <section className="p-2">
      <article className=" bg-neutral-900 borderrounded-md">
        <div className="p-2 bg-black font-mono  rounded">
          <Link target="_blank" href={certLink} className={fontMono.className}>
            {certName}
          </Link>
        </div>
      </article>
    </section>
  );
};
