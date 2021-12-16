import PostItem from '../../shared/components/Post/PostItem';
import './SelectedPosts.css';

const SelectedPosts = () => {
  return (
    <section className='responsive-width section-posts'>
      <div className='center-flex-row tiny-gap posts-title'>
        <div></div> Thoughts & ideas
      </div>
      <div className='posts-container'>
        {/* TODO UPDATE IMAGE URLS */}
        <PostItem
          title='What I learned from architecture and web?'
          imageUrl='#'
        />
        <PostItem title='How I built my first MERN project?' imageUrl='#' />
        <PostItem title='Tips for self-teach web development' imageUrl='#' />
        <PostItem title='How to build a flexible React button?' imageUrl='#' />
      </div>
    </section>
  );
};

export default SelectedPosts;
