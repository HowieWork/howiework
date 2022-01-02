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
    readMoreUrl: '/posts/how-i-built-my-first-mern-project',
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
    readMoreUrl: '/posts/thoughts-about-self-teaching-web-development',
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
    readMoreUrl: '/posts/how-to-build-a-flexible-react-button',
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
    category: 'architecture',
    title: 'Sounding Ground',
    slug: 'sounding-ground',
    date: 'Fall, 2017',
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
    date: 'Fall, 2016',
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
    date: 'Fall, 2013',
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
    date: 'Dec 29, 2021',
    duration: 'X min read',
    keywords: ['KEYWORD', 'KEYWORD', 'KEYWORD'],
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
    date: 'Dec 29, 2021',
    duration: 'X min read',
    keywords: ['KEYWORD', 'KEYWORD', 'KEYWORD'],
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
    date: 'Dec 29, 2021',
    duration: 'X min read',
    keywords: ['KEYWORD', 'KEYWORD', 'KEYWORD'],
    excerpt:
      'An innovative, urban-scale interpretive at a defunct Urban Village, also known as "Village in City" in developing countries. Investigate breathing new life into a pressing social issue. Portray a fresh, down-to-earth community life among high-density residential buildings',
    isFeatured: false,
    imageSrc: '../../documents/post/image/urban-resilience/cover.webp',
    readMoreUrl: 'posts/urban-resilience',
  },
  {
    category: 'architecture',
    title: 'Moon Village',
    slug: 'moon-village',
    date: 'Dec 29, 2021',
    duration: 'X min read',
    keywords: ['KEYWORD', 'KEYWORD', 'KEYWORD'],
    excerpt:
      'I was honored to be selected as a part of the Moon Village research team while I worked for SOM. My role is to help the team to generate design concepts focusing on human-scale measurement and convey these key ideas through illustration',
    isFeatured: false,
    imageSrc: '../../documents/post/image/moon-village/cover.webp',
    readMoreUrl: 'posts/moon-village',
  },
  {
    category: 'architecture',
    title: 'Anti-office',
    slug: 'anti-office',
    date: 'Dec 29, 2021',
    duration: 'X min read',
    keywords: ['KEYWORD', 'KEYWORD', 'KEYWORD'],
    excerpt:
      'After visiting the site and several rounds of meetings, the team developed a whole-new design system, called "Anti-office", which consists of Building Scheme, Architectural Bars, and Architectural Elements.',
    isFeatured: false,
    imageSrc: '../../documents/post/image/anti-office/cover.webp',
    readMoreUrl: 'posts/anti-office',
  },
];
