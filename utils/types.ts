export interface BlogPostData {
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
  tags: string[];
}

export interface BlogPost {
  data: BlogPostData;
  content: string;
  slug: string;
}
