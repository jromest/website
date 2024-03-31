import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Karla } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/prism-theme.css";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${karla.variable} bg-white font-sans text-xl font-normal text-slate-800`}
    >
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
