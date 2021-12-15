import { MdKeyboardArrowRight } from 'react-icons/md';
import Button from '../../shared/components/FormElements/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className='section-hero'>
      {/* HERO COVER IMAGE */}
      {/* TODO UPDATE IMAGE SRC */}
      <div className='center-flex-row hero-image'>
        <img src='' alt='howie wang cover' />
      </div>

      {/* HERO TITLE */}
      <div className='center-flex-row hero-title'>
        <div className='hero-title--text'>
          <h2>Hi, I'm Howie</h2>
          <p>Developer / Designer</p>
        </div>
        <div className='center-flex-row hero-title--image'>
          {/* TODO UPDATE IMAGE SRC */}
          <img src='' alt='howie wang' />
        </div>
      </div>

      {/* HERO DESCRIPTION */}
      <div className='center-flex-column tiny-gap hero-description'>
        <p>
          Howie is a front-end focused developer based in US with a background
          of architecture. He loves design and technologies. He belives “There
          are no boundaries between medium.”
        </p>
        <p>Currently, he is working on his own product called Snap App.</p>
      </div>

      {/* HERO CTA */}
      {/* FIXME CHANGE TO CUSTOM BUTTON */}
      <Button to='/portfolio' primary>
        <div className='center-flex-row tiny-gap'>
          Portfolio
          <span className='center-flex-row'>
            <MdKeyboardArrowRight />
          </span>
        </div>
      </Button>
    </section>
  );
};

export default Hero;
