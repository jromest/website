import Link from "next/link";

interface HeroProps {
  title: string;
  description: string;
}

export const Hero = ({ title, description }: HeroProps) => (
  <section className="bg-dark-purple bg-gradient-to-bl from-light-purple to-dark-purple px-5 py-16 sm:py-0">
    <article className="section-container flex flex-col justify-center text-center text-white sm:h-[400px] sm:text-left">
      <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
        Hi, I&apos;m <span className="whitespace-nowrap">{title}</span>
      </h1>

      <h2 className="mb-6 text-2xl">{description}</h2>

      <div>
        <Link href="#contactSection">
          <button className="btn-primary">Let&apos;s work together</button>
        </Link>

        <Link href="#projectSection">
          <button className="btn-secondary">
            Check out my projects &#8594;
          </button>
        </Link>
      </div>
    </article>
  </section>
);
