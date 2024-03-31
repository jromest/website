import Link from "next/link";
import { Social } from "./Social";

const navItems = [
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Projects",
    path: "/#projectSection",
  },
  {
    name: "Contact",
    path: "/#contactSection",
  },
];

interface HeaderProps {
  name: string;
}

export const Header = ({ name }: HeaderProps) => {
  return (
    <header className="bg-dark-purple p-5 text-white">
      <div className="section-container flex flex-row flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          {name}
        </Link>

        <nav
          className="order-3 mt-5 grow sm:order-none sm:mr-4 sm:mt-0"
          role="navigation"
        >
          <ul className="flex justify-around sm:justify-end">
            {navItems.length !== 0
              ? navItems.map((nav, index) => (
                  <li key={index}>
                    <Link
                      href={nav.path}
                      className="cursor-pointer rounded-sm px-3 py-2 transition duration-500 hover:bg-lighten-dark-purple sm:mr-4"
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </nav>

        <Social color="#fff" />
      </div>
    </header>
  );
};
