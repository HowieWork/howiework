import { useContext } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import Button from '../../shared/components/FormElements/Button';
import { ThemeContext } from '../../shared/context/theme-context';

import headshotLight from '../../assets/site/headshot-light.png';
import headshotDark from '../../assets/site/headshot-dark.png';

import './Hero.css';

const Hero = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <section className='section-hero'>
      {/* HERO TITLE */}
      <div className='center-flex-row hero-title'>
        <div className='hero-title--text'>
          <h2>Hi, I'm Howie</h2>
          <p>Developer | Designer</p>
        </div>
        <div className='center-flex-row hero-title--image'>
          <img
            src={themeContext.isDarkTheme ? headshotDark : headshotLight}
            alt='howie wang'
          />
        </div>
      </div>

      {/* HERO DESCRIPTION */}
      <div className='center-flex-column tiny-gap hero-description'>
        <div>
          Howie is a front-end focused web developer based in US with a
          background in architecture.
        </div>
        <div>
          His interest in tech started with work experience at WeWork. Working
          with people from different background opens his mind and reveals more
          opportunity and potential. Later at SOM, he worked on{' '}
          <Button to='/posts/anti-office' secondary hoverUnderline>
            an interior project involving VR
          </Button>{' '}
          . He{' '}
          <Button
            to='/posts/thoughts-about-self-teaching-web-development'
            secondary
            hoverUnderline
          >
            self-taught web development
          </Button>{' '}
          and gradually realized his true passion.
        </div>
        <div>
          <Button
            to='/posts/what-ive-learned-about-architecture-and-web-development'
            secondary
            hoverUnderline
          >
            His diverse background
          </Button>{' '}
          equips him with both design and development skills. Currently, he is
          focusing on polishing his MERN stack skills.
        </div>
      </div>

      {/* HERO CTA */}
      <div className='hero-cta'>
        <Button to='/portfolio' primary>
          <div className='center-flex-row tiny-gap'>
            Portfolio
            <span className='center-flex-row'>
              <MdKeyboardArrowRight />
            </span>
          </div>
        </Button>
      </div>

      {/* TODO UPDATE SCROLL CURRENTLY DISABLED*/}
      {/* <div className='center-text hero-cta-scroll'>
        <div className='scroll-down'></div>
      </div> */}
    </section>
  );
};

export default Hero;
