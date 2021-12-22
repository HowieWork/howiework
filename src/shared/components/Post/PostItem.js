import './PostItem.css';

const PostItem = ({ title, imageSrc }) => {
  return (
    <div className='post-container'>
      <div className='post-image'>
        <img src={imageSrc} alt={`${title} Cover`} />
      </div>
      <div className='post-title'>{title}</div>
    </div>
  );
};

export default PostItem;
