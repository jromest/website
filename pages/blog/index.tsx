import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";

import { Layout } from "@/components/Layout";
import { BlogPost } from "@/utils/types";
import { config } from "config";
import { getBlogPost } from "@/utils/mdx";

const { author, description, socials, siteUrl } = config;

const title = `Blog Posts - ${author}`;

const metaImage = "/meta-image.png";

interface BlogProps {
  blogPosts: BlogPost[];
}

const Blog: NextPage<BlogProps> = ({ blogPosts }) => {
  const canonicalUrl = `${siteUrl}/blog`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content={socials.twitterHandle} />
        <meta name="twitter:creator" content={socials.twitterHandle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImage} />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaImage} />
      </Head>

      <Layout>
        <section className="px-5 py-16 leading-9 sm:py-20">
          <article className="section-container">
            <h1 className="relative z-0 mb-14 w-max text-4xl font-bold after:absolute after:bottom-1 after:left-0 after:right-0 after:-z-10 after:h-1/2 after:-rotate-1 after:bg-yellow-gold">
              Blog Posts
            </h1>

            <ul className="space-y-9">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <h2 className="text-3xl font-bold">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-dark-purple"
                    >
                      {post.data.title}
                    </Link>
                  </h2>

                  <p className="my-2">{post.data.description}</p>

                  <time className="text-lg text-slate-600">
                    {post.data.createdAt}
                  </time>
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
