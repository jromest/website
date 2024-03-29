import fs from "fs";
import path from "path";

export const BLOG_POST_PATH = path.join(process.cwd(), "content");

export const blogPostFilePath = fs
  .readdirSync(BLOG_POST_PATH)
  .filter((filePath) => /\.mdx?$/.test(filePath));
