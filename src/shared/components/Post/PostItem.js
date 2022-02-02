import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';
import './PostItem.css';

const PostItem = (props) => {
  let content;
  // FEATURED VERSION IS FOR HOMEPAGE SELECTED POSTS
  if (props.type === 'featured-version') {
    content = (
      <div className='featured-post-container'>
        <img
          src={props.imageSrc}
          alt={`${props.title} Cover`}
          className='featured-post-image'
        />
        <div className='featured-post-title'>{props.title}</div>
      </div>
    );
  }

  // POST VERSION IS FOR POST ROUTE
  if (props.type === 'normal-version') {
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
