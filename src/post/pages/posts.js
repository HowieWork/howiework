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
      <section id='design' className='responsive-width'>
        <div className='center-flex-row tiny-gap category-title'>
          <div></div> Design
        </div>
        <PostList category='design' data={POST_DATA} />
      </section>

      {/* ARCHITECTURE */}
      <section id='architecture' className='responsive-width'>
        <div className='center-flex-row tiny-gap category-title'>
          <div></div> Architecture
        </div>
        <PostList category='architecture' data={POST_DATA} />
      </section>
    </div>
  );
};

export default Posts;
