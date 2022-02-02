import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css';

const PostItem = (props) => {
  const [imageFile, setImageFile] = useState();
  const { type, imageSrc } = props;

  useEffect(() => {
    type === 'featured-version' &&
      import(`../../../assets/post/image/${imageSrc}`)
        .then((res) => {
          setImageFile(res.default);
        })
        .catch((err) => console.log('CATCH IMPORT ERROR:', err));
  }, [type, imageSrc]);

  let content;
  // FEATURED VERSION IS FOR HOMEPAGE SELECTED POSTS
  if (type === 'featured-version') {
    content = (
      <div className='featured-post-container'>
        <img
          src={imageFile}
          alt={`${props.title} Cover`}
          className='featured-post-image'
        />
        <div className='featured-post-title'>{props.title}</div>
      </div>
    );
  }

  // POST VERSION IS FOR POST ROUTE
  if (type === 'normal-version') {
    content = (
      <Link to={props.readMoreUrl} className='post-link'>
        <div className='post-container'>
          <div className='post-title'>{props.title}</div>
          <div className='center-flex-row extra-tiny-gap post-sub-container'>
            <div>{props.date}</div>
            <div>·</div>
            <div>{props.duration}</div>
          </div>
          <div className='post-description'>{props.excerpt}</div>
        </div>
      </Link>
    );
  }
  return <Fragment>{content}</Fragment>;
};

export default PostItem;
