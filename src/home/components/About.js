import { MdKeyboardArrowRight } from 'react-icons/md';
import Button from '../../shared/components/FormElements/Button';
import './About.css';

const About = () => {
  return (
    <section className='responsive-width section-about'>
      <div className='center-flex-row tiny-gap about-title'>
        <div></div> About
      </div>

      <div className='center-flex-column tiny-gap about-container'>
        <div className='center-flex-row medium-gap about-text'>
          <span className='about-text--year'>2015</span>
          <span>
            Completed the Bachelor’s Program in China University of Mining and
            Technology (中国矿业大学)
          </span>
        </div>
        <div className='center-flex-row medium-gap about-text'>
          <span className='about-text--year'>2015</span>
          <span>Moved to United States from China</span>
        </div>
        <div className='center-flex-row medium-gap about-text'>
          <span className='about-text--year'>2018</span>
          <span>Completed the Master’s Program in University of Virginia.</span>
        </div>
        <div className='center-flex-row medium-gap about-text'>
          <span className='about-text--year'>2018</span>
          <span>Worked at WeWork, New York HQ</span>
        </div>
        <div className='center-flex-row medium-gap about-text'>
          <span className='about-text--year'>2019</span>
          <span>Worked at SOM, DC office</span>
        </div>
        <div className='center-flex-row medium-gap about-text'>
          <span className='about-text--year'>2020 to present</span>
          <span>Self-teaching web development</span>
        </div>
      </div>

      {/* ABOUT CTA */}
      <div className='about-cta'>
        {/* FIXME UPDATE TO */}
        <Button to='/resume.pdf' primary>
          <div className='center-flex-row tiny-gap'>
            Resume
            <span className='center-flex-row'>
              <MdKeyboardArrowRight />
            </span>
          </div>
        </Button>
      </div>
    </section>
  );
};

export default About;
