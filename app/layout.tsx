import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pam Patacsil | Software Engineer",
  description: "A Web Developer based in the Philippines.",
  openGraph: {
    title: "Pam Patacsil | Software Engineer",
    description: "A Web Developer based in the Philippines.",
    images: [
      {
        url: "/icon.png", // Update the path to your image
        width: 800,
        height: 800,
        alt: "Pam Patacsil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pam Martin Patacsil ",
    description: "A Web Developer based in the Philippines.",
    images: ["/icon.png"], // Update with the actual image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black px-3`}>{children}</body>
    </html>
  );
}
