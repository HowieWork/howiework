import DrawingList from '../components/DrawingList';
import { DRAWING_DATA } from '../../data/drawingData';
import './Drawings.css';

const Drawings = () => {
  return (
    <div className='center-flex-column responsive-width drawings-container'>
      {/* BELOW IS FOR SIMILAR VIEW AS PORTFOLIO PAGE */}
      <div className='responsive-width container-gap'></div>
      {/* WATERCOLOR */}
      <section id='watercolor' className='responsive-width'>
        <div className='center-flex-row tiny-gap category-title'>
          <div></div> Watercolor
        </div>
        <DrawingList layout='grid-2' data={DRAWING_DATA.slice(0, 2)} />
      </section>
      {/* CHARCOAL */}
      <section id='charcoal' className='responsive-width'>
        <div className='center-flex-row tiny-gap category-title'>
          <div></div> Charcoal
        </div>
        <DrawingList layout='grid-1' data={DRAWING_DATA.slice(2, 4)} />
      </section>
      {/* OIL PAINTING */}
      <section id='oil-painting' className='responsive-width'>
        <div className='center-flex-row tiny-gap category-title'>
          <div></div> Oil Painting
        </div>
        <DrawingList layout='grid-1' data={DRAWING_DATA.slice(4, 5)} />
      </section>
    </div>
  );
};

export default Drawings;
