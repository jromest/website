import Head from "next/head";
import Image from "next/image";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Bio } from "@/components/Bio";
import { config } from "config";

const webDesignImage = "/responsive-design.svg";
const checkIcon = "/checkmark-outline.svg";
const agroworksImage = "/agroworks-screenshot.jpg";
const ideaboxImage = "/ideabox-creative-screenshot.jpg";
const avatarImg = "/avatar.jpg";
const metaImage = "/meta-image.png";

const { author, title, description, bio, email, socials, siteUrl } = config;

const checkList = [
  "JavaScript Developer",
  "Web Designer",
  "Community Advocate",
  "Life-long Learner",
];

const projects = [
  {
    name: "Agroworks",
    description:
      "UI dashboard for an exchange platform for agricultural commodities trading. It was build during a hackathon using React and SASS and contributed to the UX/UI.",
    imageSrc: agroworksImage,
    livePreview: "https://jromest.github.io/agroworks/#/dashboard",
    source: "https://github.com/jromest/agroworks",
  },
  {
    name: "IdeaBox Creatives",
    description:
      "It is a fictional creative landing page template. It is a personal project built with responsive flexbox, CSS, and jQuery. Feel free to use it as a starter for your website.",
    imageSrc: ideaboxImage,
    livePreview: "https://jromest.github.io/ideabox-creatives/",
    source: "https://github.com/jromest/ideabox-creatives",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={siteUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content={socials.twitterHandle} />
        <meta name="twitter:creator" content={socials.twitterHandle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImage} />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaImage} />
      </Head>

      <Layout>
        <>
          <Hero
            title={author}
            description="front end web developer and designer"
          />

          <section className="px-5 py-16 leading-9 sm:py-20">
            <article className="section-container">
              <div className="flex flex-col items-center justify-around pb-12 sm:flex-row sm:pb-20">
                <Image
                  src={webDesignImage}
                  alt="responsive web design"
                  width={414}
                  height={344}
                />

                <ul className="mt-12 sm:mt-0">
                  {checkList.map((item, index) => (
                    <li key={index} className="flex items-center leading-10">
                      <Image
                        className="mr-4"
                        src={checkIcon}
                        alt=""
                        width={25}
                        height={25}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mb-6">
                I&apos;m a front end web developer based in Manila, Philippines.
                I design and develop experiences that make people&apos;s lives
                simple. I specialize in <strong>JavaScript</strong> and{" "}
                <strong>React</strong> and its ecosystem that I learned mostly
                self-taught and growing my skills and learning new things every
                day.
              </p>

              <p>
                Outside of work, I am probably cycling, bike packing or
                traveling. Otherwise, probably watching movies or reading books.
              </p>
            </article>
          </section>

          <section className="bg-gray-100 px-5 py-16 leading-9 sm:py-20">
            <article className="section-container">
              <h2 className="mb-12 text-3xl font-bold">Blog</h2>

              <h3 className="mb-6 font-bold">Coming soon...</h3>

              <p className="mb-6">
                I&apos;m working on a blog to share my ideas, document my
                learning journey, and write articles about what I&apos;ve
                learned. Mainly about learning to code, web development, and
                javascript.
              </p>

              <p>
                Follow me on twitter{" "}
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  @jromest_
                </a>{" "}
                for updates.
              </p>
            </article>
          </section>

          <section
            id="projectSection"
            className="px-5 py-16 leading-9 sm:py-20"
          >
            <article className="section-container">
              <h2 className="mb-12 text-3xl font-bold">Projects</h2>

              {projects.map((project, index) => (
                <article key={index} className="mb-16">
                  <Image
                    className="mb-6"
                    src={project.imageSrc}
                    alt={`screenshot of ${project.name}`}
                    width={960}
                    height={446}
                  />

                  <h3 className="mb-6 font-bold">{project.name}</h3>

                  <p className="mb-6">{project.description}</p>

                  <a
                    className="link mr-6"
                    href={project.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`open live preview of ${project.name}`}
                  >
                    Live Preview
                  </a>

                  <a
                    className="link"
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`source code of ${project.name}`}
                  >
                    Source
                  </a>
                </article>
              ))}

              <h3 className="mb-12 text-2xl font-bold">Open Source</h3>

              <article>
                <h4 className="mb-6 font-bold">filipino-badwords-lists</h4>

                <p className="mb-6">
                  My first npm package a highly consumable list of bad
                  (profanity) Filipino words. Inspired by badwords-list. If you
                  know a Filipino bad word(s) that is not on the list, please
                  contribute to the list and make the web a better place.
                </p>

                <p>
                  <a
                    className="link mr-6"
                    href="https://www.npmjs.com/package/filipino-badwords-list"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NPM Package
                  </a>

                  <a
                    className="link"
                    href="https://github.com/jromest/filipino-badwords-list"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                </p>
              </article>

              <article className="mt-16">
                <h4 className="mb-6 font-bold">freeCodeCamp 404 Page</h4>

                <p className="mb-6">
                  My first contribution to freeCodeCamp, I made a freeCodeCamp
                  themed 404 image, and the page displays a random quote. It was
                  implemented under <code>learn.freecodecamp.org</code>{" "}
                  sub-domain.
                </p>

                <a
                  className="link mr-6"
                  href="https://learn.freecodecamp.org/404"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                </a>

                <a
                  className="link"
                  href="https://github.com/freeCodeCamp/learn/pull/194/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Pull Request
                </a>
              </article>
            </article>
          </section>

          <section
            id="contactSection"
            className="bg-gray-100 px-5 py-16 leading-9 sm:py-20"
          >
            <article className="section-container">
              <h2 className="mb-12 text-3xl font-bold">Stay Connected</h2>

              <p className="mb-6">
                Send me an email or say hi on twitter if you would like to chat.
                I&apos;d love to hear from you.
              </p>

              <a href={`mailto:${email}`}>
                <button className="btn-primary">Send me an email</button>
              </a>

              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-secondary text-slate-800">
                  Say hi on twitter &#8594;
                </button>
              </a>
            </article>
          </section>

          <section className="px-5 py-16 leading-9 sm:py-20">
            <Bio image={avatarImg} name={author} bio={bio} />
          </section>
        </>
      </Layout>
    </>
  );
}
