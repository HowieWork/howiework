import { Fragment } from 'react/cjs/react.production.min';
import PostItem from '../../shared/components/Post/PostItem';
import './PostList.css';

const PostList = (props) => {
  let postContent;
  // TODO CATEGORIES
  postContent = (
    <Fragment>
      {props.data.map((post) => {
        return (
          <PostItem
            key={post.title}
            type='normal-version'
            readMoreUrl={post.readMoreUrl}
          />
        );
      })}
    </Fragment>
  );
  return <Fragment>{postContent}</Fragment>;
};

export default PostList;
