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
          <p>Designer | Developer</p>
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
        {/* NOTE OPENING */}
        <div>
          Howie is a designer/developer based in the US with a background in
          architecture. He is always willing to embrace new technology. At
          school, he took programming courses like{' '}
          <Button
            href={process.env.PUBLIC_URL + '/documents/data_visualization.html'}
            secondary
            targetBlank
            hoverUnderline
          >
            Data Visualization
          </Button>{' '}
          and{' '}
          <Button
            to='/posts/inclusive-center'
            secondary
            targetBlank
            hoverUnderline
          >
            Grasshopper
          </Button>
          .{' '}
          <Button href='https://youtu.be/HY-1dhShcHk' secondary hoverUnderline>
            <span className='popcorn-banner'>
              *Watch a self-introduction video
            </span>
          </Button>{' '}
          to get to know me.
        </div>
        {/* NOTE PROFESSIONAL EXPERIENCE */}
        <div>
          His professional experience started at WeWork. Working with people
          from different backgrounds opens his mind and reveals more opportunity
          and potential. Later at SOM, he worked on{' '}
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
          and gradually realized his true passion.{' '}
          <Button href='https://t.co/PIA5QB1v0Q' secondary hoverUnderline>
            <span className='video-banner'>
              *Watch a portfolio presentation
            </span>
          </Button>{' '}
          to better understand how I worked on my projects.
        </div>
        {/* NOTE CURRENT STATUS */}
        <div>
          <Button
            to='/posts/what-ive-learned-about-architecture-and-web-development'
            secondary
            hoverUnderline
          >
            His diverse background
          </Button>{' '}
          equips him with both design and development skills. Currently, he's
          focused on building human-centered products for Sunwater Capital. In
          his spare time, he is working on{' '}
          <Button
            href='https://twitter.com/howiework/status/1496848333289271300'
            secondary
            hoverUnderline
          >
            Repeat App
          </Button>{' '}
          - which aims to improve language skills and building his own{' '}
          <Button
            href='https://howiework.github.io/react-guide/'
            secondary
            hoverUnderline
          >
            React Guide
          </Button>
          .
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
        <div className='hero-cta--presentation'>
          <Button
            href={
              process.env.PUBLIC_URL + '/documents/portfolio-presentation.pdf'
            }
            secondary
            targetBlank
            hoverUnderline
          >
            *Portfolio Presentation PDF
          </Button>
        </div>
      </div>

      {/* TODO UPDATE SCROLL CURRENTLY DISABLED*/}
      {/* <div className='center-text hero-cta-scroll'>
        <div className='scroll-down'></div>
      </div> */}
    </section>
  );
};

export default Hero;
