import { useEffect, useState, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { POST_DATA } from '../../data/postData';

import './PostDetail.css';

const PostDetail = () => {
  const [postData, setPostData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [postContent, setPostContent] = useState('');

  // DYNAMICALLY LOAD MARKDOWN FILES INTO REACT
  useEffect(() => {
    setIsLoading(true);
    const url = window.location.href.split('/');
    const fileName = url[url.length - 1].concat('.md');

    // SETUP POST DATA
    const targetPost = POST_DATA.filter(
      (post) => post.slug === url[url.length - 1]
    );
    setPostData(targetPost[0]);

    // NOTE DYNAMICALLY IMPORT MARKDOWN FILE
    import(`../../markdowns/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => {
            const { data, content } = matter(res);
            setPostData(data);
            setPostContent(content);
            setIsLoading(false);
          });
      })
      .catch(
        // FIXME HANDLE ERROR
        (err) => console.log(err)
      );

    // NOTE ALTERNATIVE: USING REQUIRE
    /*
    const markdownPath = require(`../../markdowns/${fileName}`).default;
    fetch(markdownPath)
      .then((res) => res.text())
      .then((res) => {
        const { content } = matter(res);
        setPostContent(content);
        setIsLoading(false);
      })
      .catch(
        // FIXME HANDLE ERROR
        (err) => console.log(err)
      );
      */
  }, []);

  const customRenderers = {
    code(code) {
      const { className, children } = code;

      // BLOCK CODE WITH SPECIFIED LANGUAGE
      if (className) {
        const language = className.split('-')[1];
        return (
          <SyntaxHighlighter
            style={atomDark}
            language={language}
            children={children}
            showLineNumbers={true}
          />
        );
      }

      // INLINE CODE
      if (!className) {
        return <code children={children} className='inline-code' />;
      }
    },
    p(p) {
      const { children, className, node } = p;

      // COUNT NUMBER OF IMAGE ELEMENTS
      let imgElNum = 0;
      node.children.forEach((el) => {
        el.tagName === 'img' && imgElNum++;
      });

      // 1) AT MOST ONE IMAGE
      if (imgElNum <= 1) {
        return <p children={children} className={className} />;
      }

      // 2) MORE THAN TWO IMAGES
      if (imgElNum >= 2) {
        return (
          <Fragment>
            <div
              children={children.slice(0, -1)}
              className={`image-group--${imgElNum < 5 ? imgElNum : 4}`}
            />
            {children.slice(-1)}
          </Fragment>
        );
      }
    },
  };

  // TODO STYLING LOADING AND NO DATA YET
  if (isLoading) return <p>Loading...</p>;

  if (!postData || !postContent) return <p>No data yet.</p>;

  return (
    <div className='center-flex-column responsive-width post-detail-container'>
      {/* BELOW IS FOR SIMILAR VIEW AS PORTFOLIO PAGE */}
      <div className='responsive-width container-gap'></div>
      {postData && (
        <div className='post-detail-heading-container'>
          <div
            className='post-detail-heading--image'
            style={{
              backgroundImage: `url(../${postData.imageSrc})`,
            }}
          />
          <div className='post-detail-heading--title'>{postData.title}</div>
          <div className='center-flex-row extra-tiny-gap post-detail-heading-sub-container'>
            <div>{postData.date}</div>
            <div>·</div>
            <div>{postData.duration}</div>
          </div>
          <div className='center-flex-row extra-tiny-gap post-detail-heading-sub-container'>
            <Fragment>
              {postData.keywords &&
                postData.keywords.map((keyword, index) => {
                  return (
                    <span key={index} className='post-detail-heading--keyword'>
                      {keyword}
                    </span>
                  );
                })}
            </Fragment>
          </div>
        </div>
      )}
      {postContent && (
        <div className='post-detail-content'>
          <ReactMarkdown
            remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            components={customRenderers}
            // FIXME TEST: CHANGE IMAGE URL
            // transformImageUri={(uri) => {
            //   return uri.startsWith('http')
            //     ? uri
            //     : `${process.env.PUBLIC_URL}${uri}`;
            // }}
          >
            {postContent}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
