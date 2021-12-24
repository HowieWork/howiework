import './DrawingItem.css';

const DrawingItem = (props) => {
  return (
    <div className='drawing-image-container'>
      <img src={props.imageSrc} alt={props.title} />
    </div>
  );
};

export default DrawingItem;
