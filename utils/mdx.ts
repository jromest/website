import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { BlogPost } from "./types";

export const BLOG_POST_PATH = path.join(process.cwd(), "content");

export const blogPostFilePath = fs
  .readdirSync(BLOG_POST_PATH)
  .filter((filePath) => /\.mdx?$/.test(filePath));

export const getBlogPost = (n?: number): BlogPost[] => {
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

  if (n) return sortedBlogPosts.slice(0, n);

  return sortedBlogPosts;
};
