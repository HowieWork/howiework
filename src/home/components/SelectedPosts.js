import PostItem from '../../shared/components/Post/PostItem';
import { Link } from 'react-router-dom';
import { POST_DATA } from '../../data/postData';
import './SelectedPosts.css';

const SelectedPosts = () => {
  // GET FEATURED POSTS DATA
  const featuredPosts = POST_DATA.filter((post) => post.isFeatured === true);

  // RENDER CONTENT
  const content = featuredPosts.map((post) => (
    <Link key={post.title} to={post.readMoreUrl}>
      <PostItem
        type='featured-version'
        title={post.title}
        imageSrc={post.imageSrc}
      />
    </Link>
  ));

  return (
    <section className='responsive-width section-posts'>
      <div className='center-flex-row tiny-gap posts-title'>
        <div></div> Thoughts & ideas
      </div>
      <div className='selected-posts-container'>{content}</div>
    </section>
  );
};

export default SelectedPosts;
