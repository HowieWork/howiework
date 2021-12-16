import './PostItem.css';

const PostItem = ({ title, imageUrl }) => {
  return (
    <div className='post-container'>
      <div className='post-image'>
        <img src={imageUrl} alt={`${title} Cover`} />
      </div>
      <div className='post-title'>{title}</div>
    </div>
  );
};

export default PostItem;
