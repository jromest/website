export interface BlogPost {
  data: {
    title: string;
    description: string;
    createdAt: string;
  };
  content: string;
  slug: string;
}
