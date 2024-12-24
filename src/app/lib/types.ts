export interface BlogPost {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  views: number;
  slug: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

export type Category = 'All' | 'Development' | 'Design' | 'Technology' | 'Career';

