import { useEffect, useState } from 'react';
import './PhotoItem.css';

const PhotoItem = ({ imageSrc, title }) => {
  const [imageFile, setImageFile] = useState();

  useEffect(() => {
    import(`../../assets/site/photography/${imageSrc}`)
      .then((res) => {
        setImageFile(res.default);
      })
      .catch((err) => console.log(err));
  }, [imageSrc]);

  return (
    <div className='photo-image-container'>
      <img src={imageFile} alt={title} />
    </div>
  );
};

export default PhotoItem;
