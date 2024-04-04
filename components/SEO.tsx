import React from "react";
import Head from "next/head";
import { config } from "config";

const { author, socials } = config;

const metaImage = "/meta-image.png";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  type?: string;
}

export const SEO = ({
  title,
  description,
  canonicalUrl,
  type = "website",
}: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content={socials.twitterHandle} />
      <meta name="twitter:creator" content={socials.twitterHandle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={author} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
    </Head>
  );
};
