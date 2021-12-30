import { Fragment } from 'react/cjs/react.production.min';
import Button from '../FormElements/Button';
import './PostItem.css';

const PostItem = (props) => {
  let content;
  // FEATURED VERSION IS FOR HOMEPAGE SELECTED POSTS
  // FIXME UPDATE SHORTER VERSION FOR FEATURED POSTS
  if (props.type === 'featured-version') {
    content = (
      <div className='post-container'>
        <img
          src={props.imageSrc}
          alt={`${props.title} Cover`}
          className='post-image'
        />
        <div className='post-title'>{props.title}</div>
      </div>
    );
  }
  // POST VERSION IS FOR POST ROUTE
  // FIXME UPDATE NORMAL VERSION FOR POSTS
  if (props.type === 'normal-version') {
    content = (
      <div>
        <div>NORMAL VERSION</div>
        <Button to={props.readMoreUrl} secondary hoverUnderline>
          Read More
        </Button>
      </div>
    );
  }
  return <Fragment>{content}</Fragment>;
};

export default PostItem;
