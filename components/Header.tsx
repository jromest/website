import Link from "next/link";
import { Link as ScrollTo } from "react-scroll";
import { Social } from "./Social";

const navItems = [
  {
    name: "Projects",
    path: "projectSection",
  },
  {
    name: "Contact",
    path: "contactSection",
  },
];

interface HeaderProps {
  name: string;
}

export const Header = ({ name }: HeaderProps) => {
  return (
    <header className="sticky top-[-60px] z-10 bg-transparent-dark-purple p-5 text-white backdrop-blur-md sm:top-0">
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
                    <ScrollTo
                      to={nav.path}
                      smooth
                      offset={-50}
                      duration={500}
                      className="cursor-pointer rounded-sm py-2 px-3 transition duration-500 hover:bg-lighten-dark-purple sm:mr-4"
                    >
                      {nav.name}
                    </ScrollTo>
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
