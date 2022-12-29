import { Header } from "./Header";
import { Footer } from "./Footer";
import { config } from "../config";

interface LayoutProps {
  children: JSX.Element;
}

const { author } = config;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header name={author} />
      {children}
      <Footer name={author} />
    </>
  );
};
