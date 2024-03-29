import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

import { BLOG_POST_PATH, blogPostFilePath } from "../../utils/mdx";
import { Layout } from "../../components/Layout";
import { config } from "../../config";

const { author, socials, siteUrl } = config;

const metaImage = "/meta-image.png";

interface BlogPostMeta {
  title: string;
  description: string;
  createdAt: string;
  tags: string[];
}

interface BlogPostProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: BlogPostMeta;
  slug: string;
}

const BlogPost: NextPage<BlogPostProps> = ({ source, meta, slug }) => {
  const { title, description, createdAt } = meta;

  const canonicalUrl = `${siteUrl}/blog/${slug}`;

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
            <div className="mb-14 flex flex-col items-start">
              <h1 className="relative z-0 text-4xl font-bold after:absolute after:bottom-1 after:left-0 after:right-0 after:-z-10 after:h-6 after:-rotate-1 after:bg-yellow-gold after:md:h-1/2">
                {title}
              </h1>
              <time className="text-gray-500">{createdAt}</time>
            </div>

            <div className="prose prose-xl">
              <MDXRemote {...source} />
            </div>
          </article>
        </section>
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = blogPostFilePath
    .map((filePath) => filePath.replace(/\.mdx?$/, ""))
    .map((slug) => ({
      params: { slug },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const blogPostPath = path.join(BLOG_POST_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(blogPostPath, "utf8");

  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      meta: data,
      slug: params.slug,
    },
  };
};

export default BlogPost;
