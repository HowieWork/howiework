import PostList from '../components/PostList';
import { POST_DATA } from '../../data/postData';
import './Posts.css';

const Posts = () => {
  return (
    <div className='center-flex-column responsive-width posts-container'>
      {/* BELOW IS FOR SIMILAR VIEW AS PORTFOLIO PAGE */}
      <div className='responsive-width container-gap'></div>
      {/* PROGRAMMING */}
      <section id='programming' className='responsive-width'>
        <div className='center-flex-row tiny-gap category-title'>
          <div></div> Programming
        </div>
        <PostList category='programming' data={POST_DATA} />
      </section>
      {/* DESIGN */}
      {/* ARCHITECTURE */}
    </div>
  );
};

export default Posts;
