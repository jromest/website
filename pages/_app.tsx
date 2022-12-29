import type { AppProps } from "next/app";
import { Karla } from "@next/font/google";
import "../styles/globals.css";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${karla.variable} bg-dark-purple font-sans text-xl font-normal text-slate-800`}
    >
      <Component {...pageProps} />
    </div>
  );
}
