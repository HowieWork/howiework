import PhotoList from '../components/PhotoList';
import { PHOTO_DATA } from '../../data/photoData';

import './Photos.css';

const Photos = () => {
  return (
    <div className='center-flex-column responsive-width photos-container'>
      {/* BELOW IS FOR SIMILAR VIEW AS PORTFOLIO PAGE */}
      <div className='responsive-width container-gap'></div>
      {/* DAILY LIFE */}
      <section id='daily-life' className='responsive-width'>
        <div className='center-flex-row tiny-gap category-title'>
          <div></div> Daily Life
        </div>
        <PhotoList layout='grid-4' data={PHOTO_DATA.slice(0, 4)} />
      </section>

      {/* HUMANKIND */}
      <section id='humankind' className='responsive-width'>
        <div className='center-flex-row tiny-gap category-title'>
          <div></div> Human
        </div>
        <PhotoList layout='grid-2' data={PHOTO_DATA.slice(4, 8)} />
      </section>

      {/* LIVING ON EARTH */}
      <section id='living-on-earth' className='responsive-width'>
        <div className='center-flex-row tiny-gap category-title'>
          <div></div> City
        </div>
        <PhotoList layout='grid-1' data={PHOTO_DATA.slice(8, 10)} />
      </section>
    </div>
  );
};

export default Photos;
