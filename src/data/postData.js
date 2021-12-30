// TODO HOW TO DYNAMICALLY IMPORT/EXTRACT ALL NEEDED DATA INFO FROM PUBLIC DOCUMENTS?
/*
NOTE POST DATA TEMPLATE
{
  category: 'SOME CATEGORY',
  title: 'SOME TITLE',
  slug: 'SLUG NAME',
  date: 'Dec 29, 2021',
  duration: 'X min read',
  keywords: ['markdown', 'CSS', 'template'],
  excerpt: 'SOME TEXT SOME TEXT SOME TEXT',
  isFeatured: false,
  imageSrc: '../../documents/post/image/POST-TITLE/IMAGE-NAME.IMAGE-FORMAT',
  readMoreUrl: 'SOME URL',
}
*/
// Categories: programming; design; architecture
export const POST_DATA = [
  {
    category: 'programming',
    title: "What I've learned about architecture and web development",
    slug: 'what-ive-learned-about-architecture-and-web-development',
    date: 'Dec 29, 2021',
    duration: 'X min read',
    keywords: ['web', 'development', 'architecture', 'study'],
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isFeatured: true,
    imageSrc:
      '../../documents/post/image/what-ive-learned-about-architecture-and-web-development/cover.webp',
    readMoreUrl:
      '/posts/what-ive-learned-about-architecture-and-web-development',
  },
  {
    category: 'programming',
    title: 'How I built my first MERN project',
    slug: 'how-i-built-my-first-mern-project',
    date: 'Dec 29, 2021',
    duration: 'X min read',
    keywords: ['markdown', 'CSS', 'template'],
    excerpt:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    isFeatured: true,
    imageSrc:
      '../../documents/post/image/how-i-built-my-first-mern-project/cover.webp',
    readMoreUrl: 'SOME URL',
  },
  {
    category: 'programming',
    title: 'Thoughts about self-teaching web development',
    slug: 'thoughts-about-self-teaching-web-development',
    date: 'Dec 29, 2021',
    duration: 'X min read',
    keywords: ['markdown', 'CSS', 'template'],
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    isFeatured: true,
    imageSrc:
      '../../documents/post/image/thoughts-about-self-teaching-web-development/cover.webp',
    readMoreUrl: 'SOME URL',
  },
  {
    category: 'programming',
    title: 'How to build a flexible React button',
    slug: 'how-to-build-a-flexible-react-button',
    date: 'Dec 29, 2021',
    duration: 'X min read',
    keywords: ['markdown', 'CSS', 'template'],
    excerpt:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    isFeatured: true,
    imageSrc:
      '../../documents/post/image/how-to-build-a-flexible-react-button/cover.webp',
    readMoreUrl: 'SOME URL',
  },
  {
    category: 'programming',
    title: 'Markdown Post Template',
    slug: 'markdown-post-template',
    date: 'Dec 29, 2021',
    duration: 'X min read',
    keywords: ['markdown', 'CSS', 'template'],
    excerpt:
      'Diam sit amet nisl suscipit adipiscing bibendum. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Justo nec ultrices dui sapien eget mi proin. Velit egestas dui id ornare arcu odio ut sem.',
    isFeatured: false,
    imageSrc: '../../documents/post/image/markdown-post-template/cover.webp',
    readMoreUrl: 'posts/markdown-post-template',
  },
];
