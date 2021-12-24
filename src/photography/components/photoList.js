import { Fragment } from 'react/cjs/react.production.min';
import PhotoItem from './PhotoItem';
import './PhotoList.css';

const PhotoList = (props) => {
  const content = (
    <Fragment>
      {props.data.map((photo) => {
        return (
          <PhotoItem
            key={photo.title}
            title={photo.title}
            description={photo.description}
            imageSrc={photo.imageSrc}
          />
        );
      })}
    </Fragment>
  );
  return (
    <Fragment>
      {props.layout === 'grid-4' && (
        <div className='photos-container--grid-4'>{content}</div>
      )}
      {props.layout === 'grid-2' && (
        <div className='photos-container--grid-2'>{content}</div>
      )}
      {props.layout === 'grid-1' && (
        <div className='photos-container--grid-1'>{content}</div>
      )}
    </Fragment>
  );
};

export default PhotoList;
