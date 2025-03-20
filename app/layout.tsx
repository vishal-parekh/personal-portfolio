import { Footer, Navbar } from "components";
import { ActiveSectionContextProvider } from "contexts";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishal | Personal Portfolio",
  description: "Vishal is a full-stack developer with ~3 years of experience.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vishal | Personal Portfolio",
    description: "Vishal is a full-stack developer with ~3 years of experience.",
    images: [
      {
        url: "/favicon.ico",
        width: 32,
        height: 32,
        alt: "Vishal's Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-900 text-gray-50 text-opacity-90 relative pt-28 sm:pt-36`}
      >
        <ActiveSectionContextProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
