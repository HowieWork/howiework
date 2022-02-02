---
category: 'programming'
title: 'How I learn Next.js'
slug: 'how-i-learn-nextjs'
date: 'Jan 23, 2022'
duration: '17 min read'
keywords: ['next', 'framework', 'react', 'tutorial']
excerpt: 'This post documents my progress of learning Next.js from start to end. It includes roadmap, key concepts, multiple side project and final personal project.'
isFeatured: true
imageSrc: '../../howiework/assets/post/image/how-i-learn-nextjs/cover.webp'
readMoreUrl: 'posts/how-i-learn-nextjs'
---

_This post documents my progress of learning Next.js from start to end. It includes roadmap, key concepts, multiple side project and final personal project._

**UPDATE 01/23/2022:** Complete post.

## Intro

After I completed complete React course and finished up my very first MERN project. I dive into a popular framework for React - Next.js. This post will document the whole process. It works as a record of my self-teaching experience. Also, I can always go back to this post to review what I've learned.

Before starting the course, I have a personal design project called Lunch Break I did two years ago. It is a blog product focusing on work life balance. And I always wanted to create my own platform. Also, while building my portoflio blog seciton, I am facing issues of render post data and SEO. I thought it might be time to finally pick up Next.js.

Course link: [Next.js & React - The Complete Guide](https://www.udemy.com/course/nextjs-react-the-complete-guide/)

## About course

### 1. Summary

There are two paths for this course.I choose the complete path, which teaches Next.js in depth. Next.js has key features like pre-rendering, SSR, data fetching, file-based routing and authentication. My goal is to use Next.js to finally implement an personal design project I worked on using Next.js.

### 2. Content

- File-based routing
- Page pre-rendering and data fetching
- API routes and fullstack capabilities
- Optimizing NextJS apps
- Working with app-wide state (React context)
- Deploying NextJS apps
- Adding authentication

## Project

Final personal project - Lunch Break: [Demo](www.example.com) | [GitHub](www.example.com)

## Roadmap

### Day 1

Jan 3, 2022: I learned a basic introduction of Next.js and File-based routing.

**Keywords**
server-side render, file-based routing, full-stack

**Main concepts**

1. **Next.js** is the React (fullstack\*) framework for production. \*Easily integrate with backend code
2. **Framework** vs library: more built-in features; clear guides
3. Built-in **Server-side rendering (SSR)**: render in server not in client; SEO favors; Pre-rendered page on initial load.
4. Setup: `npx create-next-app`
5. Scripts:
   (1) dev - Runs `next dev` which starts Next.js in development mode;
   (2) build - Runs `next build` which builds the application for production usage;
   (3) start - Runs `next start` which starts a Next.js production server.
6. **File-based routing**: define pages and routes with files and folders instead of code. File-based routing vs. Code-based routing.
7. Nested folder structure. `index.js`: root page of given folder; `[id].js`/`[id]`: dynamic path / folder.
8. Get values from URLs: `useRouter` hook from `"next/router"`; `.pathname` `.query`; catch all paths `[...ANYNAME].js`
9. `Link` component from `"next/link"`
10. Navigation:

```js
// 1. DYNAMIC ROUTES
<Link href='...'>LINK NAME</Link>;

// 2. PROGRAMMATICALLY
const router = useRouter();
function loadHandler() {
  // 1) LOAD DATA
  // 2) DO SOMETHING
  // PUSH: CAN GO BACK TO PREV. PAGE
  router.push('/route-name');
  // REPLACE: CANNOT ...
  router.replace({pathname:'/PATH_NAME', query:{...}});
}
return <button onClick={loadHandler}>Load</button>;
```

10. Custom 404 page: `404.js`

**Questions**

1. What is routing in React?
   'We change what is visible on the screen based on the URL without sending an extra request to the server. Because we stay in the SPA built with React.'

2. Why isn't there an `index.html` under public folder in Next.js?
   Because of pre-render page feature. In Next.js, we can determine when to pre-render a page on initial load.

### Day 2

Jan 4, 2022: Review content of Day 1. Build a side project based on what learned.

**Keywords**
component, styling

**Main concepts**

1. Serving static files in Next.js: store under `public` folder. Files like images in this folder will be served statically. Files and folders stored outside of `public` are not made accessible by Next.js - visitors can not load files from there.
2. Working with regular React components: components should be stored outside `pages` folder, e.g. `components`. Recommended naming: `component-name.js` or `ComponentName.js`.
3. Styling: (1) Global: import `globals.css` to `_app.js`; (2) **CSS modules** `component-name.module.css` for single components.
4. About `Link` component:
   (1) If passing any non-text inside `Link` component, need to add nested `anchor` tag.
   (2) Styling `Link` component: add nested `anchor` tag.
5. Embed icons: create icon components, then import accordingly.
6. Custom `App`: Override component file `./pages/_app.js`. Next.js uses `App` component to initialize pages.
7. Remember to always handle the situation of 'Loading' / 'No data found' / 'Invalid inputs'.

### Day 3

Jan 5, 2022: Today is a relatively long section - Page pre-redering and data fetching.

**Keywords**
pre-rendering, data fetching

**Main concepts**

1. Next.js returns **pre-rendered page** and **hydrate with React code** once loaded. Next.js pre-renders all pages that have no dynamic data by default. Two forms of pre-rendering: static-side generation and server-side rendering.
2. `getStaticProps` (Static side generation \*SSG): pre-generate a page (with data prepared on the server-side) **during build time**; Pages are prepared ahead of time and cached by the server / CDN serving the app.
   (1) Only use from inside page components: `export async function getStaticProps(context) {...}`;
   (2) **Run any server-side code** inside the function; No access to certain client-side APIs, e.g. window object;
   (3) Code inside will not be bundled and sent back to the client. Safe to include some credential codes.
   (4) Next.js will execute `getStaticProps` first then the rest.
   (5) Return an object with `props` as one of properties `return {props:{...}},...`
3. Fetch data using filesystem: create absolute file path; read file.

```js
import path from 'path';
import fs from 'fs/promises';
const filePath = path.join(process.cwd(), 'data', 'data-name.json');
const jsonData = await fs.readFile(filePath);
const data = JSON.parse(jsonData);
```

4. Incremental static re-generation (ISR): use static-generation on a per-page basis, without rebuilding the entire site. `return {props:{...}, revalidate: NUM_IN_SECONDS}`
5. `getStaticProps` and config options
   (1) `notFound`: return 404 page.
   (2) `redirect`: redirect user to another page.
   (3) `context` working with dynamic parameters in server: `const {params} = context;`
6. `getStaticPaths` (Pre-generate paths \*routes): Inform Next.js of which instances of this **dynamic page** should be generated. Next.js executes codes in it before `getStaticProps`.
   (1) `return {paths:[{params: {id: '1'}},{params: {id: '2'}}...],...}`
   (2) `fallback: true`: the paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a 'fallback' version of the page on the first request to such a path. (Alternative) `fallback: blocking`
7. `getServerSideProps` (Server-side rendering \*SSR): need to **pre-render for every request** or need access to the request object, e.g. for cookies. Runs only on the server not during the build process.
   (1) `notFound`: return 404 page.
   (2) `redirect`: redirect user to another page.
   (3) `context` working with dynamic parameters in server: `const {params, req, res} = context;`
8. Client-side data fetching
   (1) Normal pattern: `useEffect()` `fetch`
   (2) (Alternative) Custom hook: `useSWR` \*Stale-while-revalidate
9. Combine pre-fetching with client-side fetching: could be the best scenario for user experiences.

**Questions**

1. What is JSON object?
   JSON is a global object, which contains methods for parsing JavaScript Object Notation and converting values to JSON. It can be used both on client / server sides.

2. What is crawler?
   'A crawler is a program that visits Web sites and reads their pages and other information in order to create entries for a search engine index.'

### Day 4

Jan 6, 2022: It is a project day for practicing what've learned from yesterday and how to optimize Next.js apps.

**Keywords**
Optimization, meta data, images

**Main concepts**

1. Steps of deciding how to render pages
   (1) Client-side rendering or pre-rendering
   (2) Static-side rendering or server-side rendering
2. Retrieve data from Firebase \*filter data
3. "head" content: `import Head from 'next/head'`

```js
<Head>
  <title>APP_TITLE</title>
  <meta
    name='description'
    content='SOME CONTENT CAN BE HELPFUL FOR GOOGLE SEO'
  />
</Head>
```

4. Application-wide settings
   (1) `_app.js`: Next.js uses the App component to initialize pages.
   (2) `_document.js`: A custom Document is commonly used to augment your application's `<html>` and `<body>` tags.

5. "Next image" component: Next.js generates optimized images on the fly. `import Image from 'next/image'`

### Day 5

Jan 7, 2022: Today includes two main topics:add backend code with API routes (fullstack React) and working with App-wide state (React context).

**Keywords**
API routes, request, response, context

**Main concepts**

1. API: application programming interface.
2. REST API: representational state transfer API (a specific form / structure for web APIs)
3. API routes: URLs that don't return pages (HTML) but instead provide a (REST) API. Requests are typically not set by entering URL in browser but via JavaScript code (Ajax)
4. Add and using API routes
   (1) `/pages/api`
   (2) Any server-side code can be executed inside `handler` function

   ```js
   function handler(req, res) {
     // SERVER-SIDE CODE, WILL NEVER BE EXPOSED ON CLIENT SIDE
   }
   export default handler;
   ```

5. Working with requests and responses
   (1) POST request handling example

   ```js
   // 1. HANDLE REQ METHOD
   if(req.method==='post') {
   // 2. EXTRACT DATA FROM REQUEST BODY
   const newData = {...req.body}
   // 3. STORE DATA IN A DATABASE OR FILE
   const filePath = path.join(process.cwd(), ...)
   const fileData = fs.readFileSync(filePath);
   const data = JSON.parse(fileData);
   data.push(newData);
   fs.writeFileSync(filePath, JSON.stringify(data));
   res.status(201).json({message:'Success', data:newData})
   }
   else{
   // NOTE: SEND RESPONSE HERE WON'T STOP EXECUTION IF THERE IS CODE OUTSIDE IF BLOCK
     res.status(200).json({message:'THIS WORKS!'})
   }
   ```

   POST request sending example

   ```js
   fetch('/api/SOME_ROUTE', {
     method: 'POST',
     body: JSON.stringify(SOME_JSON_DATA),
     headers: {
       'Content-Type': 'application/json',
     },
   })
     .then((res) => res.json())
     .then((data) => console.log(data));
   ```

   (2) GET request handling

   ```js
   fetch('/api/SOME_ROUTE')
     .then((res) => res.json())
     .then((data) => console.log(data));
   ```

6. Working with API routes for pre-render pages: you cannot send HTTP request but leverage the fact that API routes and regular pages are both running on the same server. But import corresponding code directly.

**Questions**

1. What is AJAX?
   'AJAX stands for Asynchronous JavaScript And XML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers.'

2. What is `.bind()` in JavaScript?
   The `bind()` method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

### Day 6 - 9

Jan 10, 2022: I combined two practical project sections into one and started the final project. Also, I will include great details of this project in a new post - [Rethink: a more advanced blog site]('www.example.com').

**Keywords**
final project

**Main concepts**

1. Final project planning
2. Main pages
3. `[slug].js` instead of `[id].js`: human-readable identifier

**Questions**

### Day 10 - 12

Jan 15, 2022: Continue to work on final project - Lunch Break. Start to implement Authentication. Sign up / log in feature; control certain pages access.

**Keywords**
authentication

**Main concepts**

1. How does authentication work?
   (1) Server-side sessions: store unique Identifier on server, send same identifier to client --> Client sends identifier along with requests to protected resources
   (2) Authentication tokens
   Create (but not store) 'permission' token on server, send token to client --> Client sends token along with requests to protected resources
2. SPAs works with tokens instead of sessions
3. JWT (JSON Web Token): issuer data + custom data + secret signing key
4. `NextAuth`: a complete open source authentication solution for Next.js applications.
5. How to store password to database? `bcryptjs`
6. Protecting Pages / Add page guards: client-side vs server-side
7. Protecting API routes: `getSession()` can be also used in BE.

**Questions**

1. How to understand `redirect: {...permanent: true/false}`? If set `permanent: true` it will `...cache the redirect forever...` , what will the browser do exactly? does it mean if I don't clear the cache it will always redirect to specified route?

### Day 13

Jan 18, 2022: Continue to work on final project - Lunch Break. Start to implement global notification with the help of React context
Jan 21, 2022: Complete styling, responsiveness and dark theme for blog site. And Prepare to work on deployment.

**Keywords**
context, portal

**Main concepts**

**Questions**

1. `document is not defined` when using portal?
   Fix: [create `Portal.js` helper wrapper in `/HOC`](<(https://dev.to/ataparvinghods/react-portals-and-how-to-use-them-next-js-and-cra-2dic)>) \*High Order Component
   Or [create `useHasMounted` custom hook](https://www.joshwcomeau.com/snippets/react-hooks/use-has-mounted/)

### Day 17

Jan 22, 2022: Learn how to deploy Next.js Apps. Continue working on personal project - LunchBreak.

**Keywords**
deployment

**Main concepts**

1. Deployment options
   (1) Standard build: `next build` creates `.next`folder with all production-ready codes (produces optimized production bundles and a server-side app: requires Node.js server)
   (2) Full static build: `next export` creates `out` folder with all production-ready codes (produces 100% static app; no Node.js server required)

2. Deployment steps
   (1) Add page metadata, optimize code (Next Image component; Next.js is already using lazy-loading), remove unnecessary dependencies
   (2) Use environment variables for variable data (e.g. database credentials, API Keys ...): `next.config.js`
   (3) Do a test build and test the production-ready app locally or on some test server
   (4) Deploy: hosting options: `Vercel` / `Netlify`

**Questions**

1. How to deploy Next.js App (static + server-side) using **Vercel** and **GitHub**?
   Flow would be `npm run build`, then push to GH, then Vercel.

2. Why do I need to push everything to GH instead of `.next` only?
   My understanding is `.next` contains all production-ready codes. And `.next` alone shouldn't be enough for Vercel to host?
   [Similar Q/A on Github](https://github.com/vercel/next.js/discussions/14339)

## Get my certification

![Next js certification](../../howiework/assets/post/image/how-i-learn-nextjs/next-certification-howie.jpg)
**Next.js certification**
