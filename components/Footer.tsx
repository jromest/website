import { Social } from "./Social";

interface FooterProps {
  name: string;
}

export const Footer = ({ name }: FooterProps) => (
  <footer className="bg-white px-5 pb-12 leading-9">
    <div className="section-container flex flex-col items-center justify-center text-center sm:flex-row sm:justify-between">
      <Social color="#666" />

      <small className="mt-6 sm:mt-0">
        &copy; {new Date().getFullYear()} {name}
      </small>
    </div>
  </footer>
);
