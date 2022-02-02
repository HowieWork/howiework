import { useEffect, useState } from 'react';
import './DrawingItem.css';

const DrawingItem = ({ imageSrc, title }) => {
  const [imageFile, setImageFile] = useState();

  useEffect(() => {
    import(`../../assets/site/drawing/${imageSrc}`)
      .then((res) => {
        setImageFile(res.default);
      })
      .catch((err) => console.log(err));
  }, [imageSrc]);

  return (
    <div className='drawing-image-container'>
      <img src={imageFile} alt={title} />
    </div>
  );
};

export default DrawingItem;
