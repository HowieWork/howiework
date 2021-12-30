import PostList from '../components/PostList';
import { POST_DATA } from '../../data/postData';
import './Posts.css';

const Posts = () => {
  return (
    <div className='center-flex-column responsive-width posts-container'>
      {/* BELOW IS FOR SIMILAR VIEW AS PORTFOLIO PAGE */}
      <div className='responsive-width container-gap'></div>
      {/* FIXME XXX POST CATEGORY */}
      <section id='FIXME XXX POST' className='responsive-width'>
        <div className='center-flex-row tiny-gap category-title'>
          <div></div> XXX Post
        </div>
        <PostList data={POST_DATA} />
      </section>
    </div>
  );
};

export default Posts;
