import { useEffect, useState, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import './PostDetail.css';

const PostDetail = () => {
  const [postData, setPostData] = useState('');
  const [postContent, setPostContent] = useState('');

  // DYNAMICALLY LOAD MARKDOWN FILES INTO REACT
  useEffect(() => {
    const url = window.location.href.split('/');
    const fileName = url[url.length - 1].concat('.md');

    fetch(`${process.env.PUBLIC_URL}/documents/post/${fileName}`)
      .then((res) => res.text())
      .then((res) => {
        const { data, content } = matter(res);
        setPostData(data);
        setPostContent(content);
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
  };

  return (
    <div className='center-flex-column responsive-width post-detail-container'>
      {/* BELOW IS FOR SIMILAR VIEW AS PORTFOLIO PAGE */}
      <div className='responsive-width container-gap'></div>
      {postData && (
        <div className='post-detail-heading-container'>
          <div
            className='post-detail-heading--image'
            style={{
              backgroundImage: `url(${postData.imageSrc})`,
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
              {postData.keywords.map((keyword, index) => {
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
          >
            {postContent}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
