import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Layout } from "../../components/Layout";
import { config } from "../../config";
import Link from "next/link";

interface BlogPost {
  data: {
    title: string;
    createdAt: string;
  };
  content: string;
  slug: string;
}

const { author, description, socials, siteUrl } = config;

const title = `Blog Posts - ${author}`;

const metaImage = "/meta-image.png";

const BLOG_POST_PATH = path.join(process.cwd(), "content");

const blogPostFilePath = fs
  .readdirSync(BLOG_POST_PATH)
  .filter((path) => /\.mdx?$/.test(path));

const getBlogPost = (): BlogPost[] => {
  const blogPosts = blogPostFilePath.map((filePath) => {
    const source = fs.readFileSync(path.join(BLOG_POST_PATH, filePath), "utf8");

    const { data, content } = matter(source);

    return {
      data,
      content,
      slug: filePath.split(".")[0],
    } as BlogPost;
  });

  const sortedBlogPosts = blogPosts.sort(
    (a, b) => +new Date(b.data.createdAt) - +new Date(a.data.createdAt),
  );

  return sortedBlogPosts;
};

interface BlogProps {
  blogPosts: BlogPost[];
}

const Blog: NextPage<BlogProps> = ({ blogPosts }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

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
        <section className="px-5 py-16 leading-9 sm:py-20">
          <article className="section-container">
            <h1 className="relative z-0 mb-14 w-max text-4xl font-bold after:absolute after:bottom-1 after:left-0 after:right-0 after:-z-10 after:h-1/2 after:bg-yellow-gold">
              Blog Posts
            </h1>

            <ul>
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <h2 className="text-3xl font-bold">
                    <Link href={`/blog/${post.slug}`}>{post.data.title}</Link>
                  </h2>
                  <p>{post.data.createdAt}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const blogPosts = getBlogPost();

  return {
    props: {
      blogPosts,
    },
  };
};

export default Blog;
