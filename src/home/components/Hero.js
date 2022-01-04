import { useContext } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import Button from '../../shared/components/FormElements/Button';
import { ThemeContext } from '../../shared/context/theme-context';

import './Hero.css';

const Hero = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <section className='section-hero'>
      {/* HERO TITLE */}
      <div className='center-flex-row hero-title'>
        <div className='hero-title--text'>
          <h2>Hi, I'm Howie</h2>
          <p>Developer / Designer</p>
        </div>
        <div className='center-flex-row hero-title--image'>
          <img
            src={`/assets/headshot-${
              themeContext.isDarkTheme ? 'dark' : 'light'
            }.png`}
            alt='howie wang'
          />
        </div>
      </div>

      {/* HERO DESCRIPTION */}
      <div className='center-flex-column tiny-gap hero-description'>
        <p>
          Howie is a front-end focused web developer based in US with a
          background of architecture. He loves design and technologies. He
          belives “There are no boundaries between medium.”
        </p>
        <p>
          Howie self-taught web development. His current focus includes React,
          Next.js and Node.js. His diverse background equips him with both
          design and develop skills.
        </p>
        <p>Currently, he is working on his own product called Snap App.</p>
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

      {/* TODO UPDATE SCROLL */}
      <div className='center-text hero-cta-scroll'>
        PLEASE SCROLL PLACEHOLDER
      </div>
    </section>
  );
};

export default Hero;
