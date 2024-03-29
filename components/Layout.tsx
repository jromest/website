import { Header } from "./Header";
import { Footer } from "./Footer";
import { config } from "../config";

interface LayoutProps {
  children: JSX.Element;
}

const { author } = config;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header name={author} />

      <main role="main" className="flex-1 bg-white">
        {children}
      </main>

      <Footer name={author} />
    </div>
  );
};
