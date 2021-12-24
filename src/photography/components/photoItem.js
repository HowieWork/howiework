import './PhotoItem.css';

const PhotoItem = (props) => {
  return (
    <div className='photo-image-container'>
      <img src={props.imageSrc} alt={props.title} />
    </div>
  );
};

export default PhotoItem;
