import { BlogPost, Category } from './types'

export const blogPosts: BlogPost[] = [
  // Development Category
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    category: 'Development',
    description: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
    content: '<p>TypeScript has become an essential tool in modern React development. This comprehensive guide will walk you through setting up a new React project with TypeScript, explaining key concepts and best practices along the way.</p><p>We\'ll cover everything from initial setup to advanced type patterns that will help you write more maintainable code.</p>',
    date: 'March 15, 2024',
    readTime: '5 min',
    views: 124,
    slug: 'react-typescript-guide'
  },
  {
    id: '2',
    title: 'Advanced React Hooks Patterns',
    category: 'Development',
    description: 'Deep dive into advanced React hooks patterns and custom hook creation.',
    content: '<p>React Hooks have revolutionized how we write React components. In this article, we\'ll explore advanced patterns and techniques for creating custom hooks that are both powerful and reusable.</p><p>Learn how to compose hooks, handle complex state management, and optimize performance.</p>',
    date: 'March 14, 2024',
    readTime: '8 min',
    views: 156,
    slug: 'advanced-react-hooks'
  },
  {
    id: '3',
    title: 'Building Scalable APIs with Node.js',
    category: 'Development',
    description: 'Learn best practices for building scalable and maintainable APIs using Node.js.',
    content: '<p>Creating scalable APIs requires careful planning and implementation. This guide covers essential patterns and practices for building robust APIs with Node.js that can grow with your application.</p><p>We\'ll discuss architecture, error handling, authentication, and more.</p>',
    date: 'March 13, 2024',
    readTime: '10 min',
    views: 198,
    slug: 'scalable-nodejs-apis'
  },

  // Design Category
  {
    id: '4',
    title: 'Mastering UI/UX Design Principles',
    category: 'Design',
    description: 'Essential principles for creating user-friendly and aesthetically pleasing interfaces.',
    content: '<p>Good design is more than just aesthetics. This comprehensive guide covers fundamental UI/UX principles that will help you create interfaces that are both beautiful and functional.</p><p>Learn about color theory, typography, layout, and user psychology.</p>',
    date: 'March 12, 2024',
    readTime: '7 min',
    views: 189,
    slug: 'ui-ux-principles'
  },
  {
    id: '5',
    title: 'Design Systems: From Theory to Practice',
    category: 'Design',
    description: 'A comprehensive guide to creating and implementing design systems.',
    content: '<p>Design systems are crucial for maintaining consistency across large applications. This article walks through the process of creating, implementing, and maintaining a design system.</p><p>Learn about component libraries, documentation, and team collaboration.</p>',
    date: 'March 11, 2024',
    readTime: '9 min',
    views: 167,
    slug: 'design-systems-guide'
  },
  {
    id: '6',
    title: 'Responsive Design Best Practices',
    category: 'Design',
    description: 'Modern approaches to creating responsive and adaptive web designs.',
    content: '<p>In today\'s multi-device world, responsive design is more important than ever. This guide covers modern approaches to creating websites that work seamlessly across all devices.</p><p>Learn about fluid grids, flexible images, and media queries.</p>',
    date: 'March 10, 2024',
    readTime: '6 min',
    views: 145,
    slug: 'responsive-design'
  },

  // Technology Category
  {
    id: '7',
    title: 'The Future of AI in Tech',
    category: 'Technology',
    description: 'Exploring how artificial intelligence is shaping the future of technology.',
    content: '<p>AI is revolutionizing every aspect of technology. This article explores current trends and future predictions for AI in various tech sectors.</p><p>Learn about machine learning applications, ethical considerations, and emerging technologies.</p>',
    date: 'March 9, 2024',
    readTime: '7 min',
    views: 234,
    slug: 'future-of-ai'
  },
  {
    id: '8',
    title: 'Cloud Computing Trends',
    category: 'Technology',
    description: 'Latest trends and best practices in cloud computing and infrastructure.',
    content: '<p>Cloud computing continues to evolve rapidly. This article examines current trends and best practices in cloud computing, from serverless architecture to multi-cloud strategies.</p><p>Understand the latest developments in cloud technology and their impact.</p>',
    date: 'March 8, 2024',
    readTime: '8 min',
    views: 178,
    slug: 'cloud-computing-trends'
  },
  {
    id: '9',
    title: 'Cybersecurity Essentials',
    category: 'Technology',
    description: 'Essential cybersecurity practices for modern web applications.',
    content: '<p>Security is crucial in today\'s digital landscape. This comprehensive guide covers essential cybersecurity practices that every developer and organization should implement.</p><p>Learn about common vulnerabilities, security protocols, and best practices.</p>',
    date: 'March 7, 2024',
    readTime: '9 min',
    views: 212,
    slug: 'cybersecurity-essentials'
  },

  // Career Category
  {
    id: '10',
    title: 'Navigating Your Tech Career Path',
    category: 'Career',
    description: 'Strategies for planning and advancing your career in the tech industry.',
    content: '<p>The tech industry offers diverse career paths. This article provides insights and strategies for planning your tech career, from entry-level positions to leadership roles.</p><p>Learn about skill development, networking, and identifying opportunities for growth.</p>',
    date: 'March 6, 2024',
    readTime: '7 min',
    views: 189,
    slug: 'tech-career-path'
  },
  {
    id: '11',
    title: 'Effective Technical Interview Preparation',
    category: 'Career',
    description: 'Tips and strategies for acing technical interviews in the software industry.',
    content: '<p>Technical interviews can be challenging. This comprehensive guide covers effective strategies for preparing for and excelling in technical interviews.</p><p>Learn about common interview formats, problem-solving techniques, and how to showcase your skills.</p>',
    date: 'March 5, 2024',
    readTime: '8 min',
    views: 223,
    slug: 'tech-interview-prep'
  },
  {
    id: '12',
    title: 'Building a Strong Personal Brand in Tech',
    category: 'Career',
    description: 'How to create and maintain a personal brand that stands out in the tech industry.',
    content: '<p>In the competitive tech industry, a strong personal brand can set you apart. This article explores strategies for building and maintaining a personal brand that resonates with employers and peers.</p><p>Learn about online presence, networking, and thought leadership.</p>',
    date: 'March 4, 2024',
    readTime: '6 min',
    views: 167,
    slug: 'personal-branding-tech'
  }
]

export const getPostsByCategory = (category: Category): BlogPost[] => {
  return blogPosts.filter(post => post.category === category)
}

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id)
}

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
}

export const getTrendingPosts = (): BlogPost[] => {
  const trendingPosts: BlogPost[] = [];
  const categories: Category[] = ['Development', 'Design', 'Technology', 'Career'];
  
  categories.forEach(category => {
    const post = blogPosts.find(post => post.category === category);
    if (post) {
      trendingPosts.push(post);
    }
  });

  return trendingPosts;
}

export const categories: Category[] = ['All', 'Development', 'Design', 'Technology', 'Career'];

