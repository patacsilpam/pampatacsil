import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pam Patacsil | Developer",
  description:
    "I build things for the web. Mostly to make ideas real, sometimes just to see what’s possible. I’m driven to build fast, scalable, and polished products—MVPs, full platforms, and everything in between.",
  openGraph: {
    title: "Pam Patacsil",
    description:
      "I build things for the web. Mostly to make ideas real, sometimes just to see what’s possible. I’m driven to build fast, scalable, and polished products—MVPs, full platforms, and everything in between.",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 800,
        alt: "Pam Patacsil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pam Martin Patacsil ",
    description:
      "I build things for the web. Mostly to make ideas real, sometimes just to see what’s possible. I’m driven to build fast, scalable, and polished products—MVPs, full platforms, and everything in between.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black px-3`}>
        {children}

        {/* ✅ Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WN7L9YCR04"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WN7L9YCR04');
          `}
        </Script>
      </body>
    </html>
  );
}
