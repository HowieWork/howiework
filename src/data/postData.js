// TODO HOW TO DYNAMICALLY IMPORT/EXTRACT ALL NEEDED DATA INFO FROM PUBLIC DOCUMENTS?
/*
CATEGORIES: programming; design; architecture

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

export const POST_DATA = [
  {
    category: 'programming',
    title: 'Build a more advanced blog site',
    slug: 'build-a-more-advanced-blog-site',
    date: 'Jan 24, 2022',
    duration: '7 min read',
    keywords: ['next.js', 'react', 'blog', 'fullstack'],
    excerpt:
      'I have been rethinking a better way of building blog site. Lunch Break is a more advanced blog site built with Next.js. It will include features like authentication (user sign up and log in), newsletter subscription feature, show all/featured posts, filter posts, comments etc.',
    isFeatured: true,
    imageSrc:
      '../../documents/post/image/build-a-more-advanced-blog-site/cover.webp',
    readMoreUrl: '/posts/build-a-more-advanced-blog-site',
  },
  {
    category: 'programming',
    title: "What I've learned about architecture and web development",
    slug: 'what-ive-learned-about-architecture-and-web-development',
    date: 'Jan 6, 2022',
    duration: '12 min read',
    keywords: ['web', 'development', 'architecture'],
    excerpt:
      'With a background in architecture and now web development, I have the chance of comparing these two different industries based on my own experiences. This post concludes my thoughts.',
    isFeatured: true,
    imageSrc:
      '../../documents/post/image/what-ive-learned-about-architecture-and-web-development/cover.webp',
    readMoreUrl:
      '/posts/what-ive-learned-about-architecture-and-web-development',
  },
  {
    category: 'programming',
    title: 'Thoughts about self-teaching web development',
    slug: 'thoughts-about-self-teaching-web-development',
    date: 'Jan 6, 2022',
    duration: '8 min read',
    keywords: ['self-teach', 'web', 'development', 'programming'],
    excerpt:
      'I share my thoughts about self-teaching web development in this post. It will be updated based on my learning progress.',
    isFeatured: true,
    imageSrc:
      '../../documents/post/image/thoughts-about-self-teaching-web-development/cover.webp',
    readMoreUrl: '/posts/thoughts-about-self-teaching-web-development',
  },
  {
    category: 'programming',
    title: 'Markdown Post Template',
    slug: 'markdown-post-template',
    date: 'Dec 29, 2021',
    duration: '2 min read',
    keywords: ['markdown', 'CSS', 'template', 'tutorial'],
    excerpt:
      'This article will provide a template for most future posts on this site. The goal is to make most posts look styling consistent. As a template, this section usually works an introduction, which explain what this post is about and how audience can get most out of it.',
    isFeatured: false,
    imageSrc: '../../documents/post/image/markdown-post-template/cover.webp',
    readMoreUrl: 'posts/markdown-post-template',
  },
  {
    category: 'programming',
    title: 'How I learn Next.js',
    slug: 'how-i-learn-nextjs',
    date: 'Jan 23, 2022',
    duration: '17 min read',
    keywords: ['next', 'framework', 'react', 'tutorial'],
    excerpt:
      'This post documents my progress of learning Next.js from start to end. It includes roadmap, key concepts, multiple side project and final personal project.',
    isFeatured: true,
    imageSrc: '../../documents/post/image/how-i-learn-nextjs/cover.webp',
    readMoreUrl: 'posts/how-i-learn-nextjs',
  },
  {
    category: 'TODOPLACEHOLDER',
    title: 'How I built my first MERN project',
    slug: 'how-i-built-my-first-mern-project',
    date: 'Dec 29, 2021',
    duration: 'X min read',
    keywords: ['fullstack', 'MERN', 'app'],
    excerpt:
      'This post documents how I built my first MERN project - Snap App. It is a photo sharing platform for people who love architecture. It will focus on the general process and key concepts.',
    isFeatured: false,
    imageSrc:
      '../../documents/post/image/how-i-built-my-first-mern-project/cover.webp',
    readMoreUrl: '/posts/how-i-built-my-first-mern-project',
  },

  {
    category: 'PLACEHOLDER',
    title: 'How to build a flexible React button',
    slug: 'how-to-build-a-flexible-react-button',
    date: 'Dec 29, 2021',
    duration: 'X min read',
    keywords: ['markdown', 'CSS', 'template'],
    excerpt:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    isFeatured: false,
    imageSrc:
      '../../documents/post/image/how-to-build-a-flexible-react-button/cover.webp',
    readMoreUrl: '/posts/how-to-build-a-flexible-react-button',
  },

  {
    category: 'design',
    title: 'Museum',
    slug: 'museum',
    date: 'Jan 1, 2020',
    duration: '14 min read',
    keywords: ['UI/UX', 'App', 'Design', 'Museum'],
    excerpt:
      'I have been working on a museum app during the past month. This post documents the working process from research to wireframming to prototyping in great detail.',
    isFeatured: false,
    imageSrc: '../../documents/post/image/museum/cover.webp',
    readMoreUrl: 'posts/museum',
  },
  {
    category: 'design',
    title: 'NMAAHC',
    slug: 'nmaahc',
    date: 'Jan 1, 2020',
    duration: '5 min read',
    keywords: ['Branding', 'Design', 'Museum'],
    excerpt:
      'I have been working on a museum app during the past month. This post documents the branding pard of this project.',
    isFeatured: false,
    imageSrc: '../../documents/post/image/nmaahc/cover.webp',
    readMoreUrl: 'posts/nmaahc',
  },
  {
    category: 'design',
    title: 'Lunch Break',
    slug: 'lunch-break',
    date: '2019',
    duration: '5 min read',
    keywords: ['Branding', 'Design', 'Blog'],
    excerpt:
      'A product that helps people to kill the time during their lunch break.',
    isFeatured: false,
    imageSrc: '../../documents/post/image/lunch-break/cover.webp',
    readMoreUrl: '/posts/lunch-break',
  },
  {
    category: 'architecture',
    title: 'Sounding Ground',
    slug: 'sounding-ground',
    date: ' 2017',
    duration: '12 min read',
    keywords: ['park', 'history', 'sound', 'arch'],
    excerpt:
      'A redesign for Market Street Park, a public park in Charlottesville after the proposed removal of the Robert Edward Lee sculpture on the site by the city council',
    isFeatured: false,
    imageSrc: '../../documents/post/image/sounding-ground/cover.webp',
    readMoreUrl: 'posts/sounding-ground',
  },
  {
    category: 'architecture',
    title: 'Inclusive Center',
    slug: 'inclusive-center',
    date: ' 2016',
    duration: '8 min read',
    keywords: ['inclusive', 'activity', 'center'],
    excerpt:
      'A proposal to build a new student center connecting a variety of academic and recreational functions & re-connecting existing buildings. Aim to engage more audience with physical disabilities by setting a fully integrated barrier-free system.',
    isFeatured: false,
    imageSrc: '../../documents/post/image/inclusive-center/cover.webp',
    readMoreUrl: 'posts/inclusive-center',
  },
  {
    category: 'architecture',
    title: 'Talking to History',
    slug: 'talking-to-history',
    date: ' 2013',
    duration: '6 min read',
    keywords: ['history', 'preservation', 'expansion'],
    excerpt:
      'An expansion of a historical building built during the Republic of China. A project brings a balance between historical heritage and contemporary architectural technics.',
    isFeatured: false,
    imageSrc: '../../documents/post/image/talking-to-history/cover.webp',
    readMoreUrl: 'posts/talking-to-history',
  },
  {
    category: 'architecture',
    title: 'Appalachia',
    slug: 'appalachia',
    date: '2017',
    duration: '7 min read',
    keywords: ['mining', 'preservation', 'industrial'],
    excerpt:
      'Propose a visitor center at a National Park Service site, which is a historic, but now defunct, coal mine. Reinvigorate the historic site by a small intervention, then a tectonic system, then a bigger model.',
    isFeatured: false,
    imageSrc: '../../documents/post/image/appalachia/cover.webp',
    readMoreUrl: 'posts/appalachia',
  },
  {
    category: 'architecture',
    title: 'Redefine Edge',
    slug: 'redefine-edge',
    date: '2012',
    duration: '4 min read',
    keywords: ['boundary', 'edge', 'preservation'],
    excerpt:
      'A new park mediates two distinct typologies - a field and a lake, inspired by the environment. This project creates not only a new relationship between architecture and landscape but also a dialogue between human and nature.',
    isFeatured: false,
    imageSrc: '../../documents/post/image/redefine-edge/cover.webp',
    readMoreUrl: 'posts/redefine-edge',
  },
  {
    category: 'architecture',
    title: 'Urban Resilience',
    slug: 'urban-resilience',
    date: ' 2014',
    duration: '4 min read',
    keywords: ['urban', 'perservation', 'module'],
    excerpt:
      'An innovative, urban-scale interpretive at a defunct Urban Village, also known as "Village in City" in developing countries. Investigate breathing new life into a pressing social issue. Portray a fresh, down-to-earth community life among high-density residential buildings.',
    isFeatured: false,
    imageSrc: '../../documents/post/image/urban-resilience/cover.webp',
    readMoreUrl: 'posts/urban-resilience',
  },
  {
    category: 'architecture',
    title: 'Moon Village',
    slug: 'moon-village',
    date: '2019',
    duration: '3 min read',
    keywords: ['moon', 'village', 'future'],
    excerpt:
      'I was honored to be selected as a part of the Moon Village research team while I worked for SOM. My role is to help the team to generate design concepts focusing on human-scale measurement and convey these key ideas through illustration.',
    isFeatured: false,
    imageSrc: '../../documents/post/image/moon-village/cover.webp',
    readMoreUrl: 'posts/moon-village',
  },
  {
    category: 'architecture',
    title: 'Anti-office',
    slug: 'anti-office',
    date: ' 2018',
    duration: '5 min read',
    keywords: ['interior', 'office', 'material'],
    excerpt:
      'After visiting the site and several rounds of meetings, the team developed a whole-new design system, called "Anti-office", which consists of Building Scheme, Architectural Bars, and Architectural Elements.',
    isFeatured: false,
    imageSrc: '../../documents/post/image/anti-office/cover.webp',
    readMoreUrl: 'posts/anti-office',
  },
];
