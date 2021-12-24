import { Fragment } from 'react/cjs/react.production.min';
import DrawingItem from './DrawingItem';
import './DrawingList.css';

const DrawingList = (props) => {
  const content = (
    <Fragment>
      {props.data.map((drawing) => {
        return (
          <DrawingItem
            key={drawing.title}
            title={drawing.title}
            description={drawing.description}
            imageSrc={drawing.imageSrc}
          />
        );
      })}
    </Fragment>
  );
  return (
    <Fragment>
      {props.layout === 'grid-2' && (
        <div className='drawings-container--grid-2'>{content}</div>
      )}
      {props.layout === 'grid-1' && (
        <div className='drawings-container--grid-1'>{content}</div>
      )}
    </Fragment>
  );
};

export default DrawingList;
