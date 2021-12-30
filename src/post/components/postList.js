import { Fragment } from 'react/cjs/react.production.min';
import PostItem from '../../shared/components/Post/PostItem';
import './PostList.css';

const PostList = (props) => {
  // GET POSTS BELONG TO CERTAIN CATEGORIES
  const targetPosts = props.data.filter(
    (post) => post.category === props.category
  );

  // RENDER TARGET POSTS
  const postContent = targetPosts.map((post) => (
    <PostItem
      key={post.title}
      type='normal-version'
      title={post.title}
      date={post.date}
      duration={post.duration}
      excerpt={post.excerpt}
      imageSrc={post.imageSrc}
      readMoreUrl={post.readMoreUrl}
    />
  ));

  return <Fragment>{postContent}</Fragment>;
};

export default PostList;
