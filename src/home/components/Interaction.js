import { useState } from 'react';
import Checkbox from '../../shared/components/FormElements/Checkbox';
import './Interaction.css';

const Interaction = () => {
  const [isChecked, setIsChecked] = useState(true);

  const checkboxChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className='responsive-width section-interactive'>
      <Checkbox
        label='Interactive'
        onChange={checkboxChangeHandler}
        className='center-flex-row tiny-gap checkbox'
        value={isChecked}
      />

      {/* TODO ADD INTERACTION */}
      {isChecked && (
        <div className='interactive-container'>
          <div className='interactive-chat'>
            <div className='chat chat__howie' style={{ '--delay': '20s' }}>
              <div className='chat__content'>
                <p>😀</p>
              </div>
            </div>

            <div className='chat' style={{ '--delay': '19s' }}>
              <div className='chat__content'>
                <p>Thanks.</p>
              </div>
            </div>

            <div className='chat chat__howie' style={{ '--delay': '17.4s' }}>
              <div className='chat__content'>
                <p>Also, resume... if needed.</p>
              </div>
            </div>
            <div className='chat chat__howie' style={{ '--delay': '16s' }}>
              <div className='chat__content'>
                <p>Sure. Here is my contact.</p>
              </div>
            </div>
            <div className='chat' style={{ '--delay': '15.2s' }}>
              <div className='chat__content'>
                <p>Sounds cool! I would like to know more about it.</p>
              </div>
            </div>
            <div className='chat chat__howie' style={{ '--delay': '14s' }}>
              <div className='chat__content'>
                <p>So… Web dev is a perfect fit.</p>
              </div>
            </div>
            <div className='chat chat__howie' style={{ '--delay': '12s' }}>
              <div className='chat__content'>
                <p>But it is also fun. I enjoy both design and tech.</p>
              </div>
            </div>
            <div className='chat chat__howie' style={{ '--delay': '10.2s' }}>
              <div className='chat__content'>
                <p>It is… I post some stories along the way.</p>
              </div>
            </div>
            <div className='chat' style={{ '--delay': '9s' }}>
              <div className='chat__content'>
                <p>Must be challenging, is it?</p>
              </div>
            </div>

            <div className='chat chat__howie' style={{ '--delay': '7.8s' }}>
              <div className='chat__content'>
                <p>Then… expanded my interests into web development.</p>
              </div>
            </div>

            <div className='chat chat__howie' style={{ '--delay': '6.4s' }}>
              <div className='chat__content'>
                <p>Yes. I worked in architecture focusing on BIM… </p>
              </div>
            </div>

            <div className='chat' style={{ '--delay': '5.2s' }}>
              <div className='chat__content'>
                <p>So, changed your career?</p>
              </div>
            </div>

            <div className='chat' style={{ '--delay': '4s' }}>
              <div className='chat__content'>
                <p>Oh, ok. I heard you worked in architecture…</p>
              </div>
            </div>

            <div className='chat chat__howie' style={{ '--delay': '2.8s' }}>
              <div className='chat__content'>
                <p>a front-end focused developer based in US.</p>
              </div>
            </div>

            <div className='chat chat__howie' style={{ '--delay': '1.2s' }}>
              <div className='chat__content'>
                <p>Hi, I’m Howie...</p>
              </div>
            </div>

            <div className='chat ' style={{ '--delay': '.3s' }}>
              <div className='chat__content'>
                <p>👋 Howie?</p>
              </div>
            </div>
          </div>
          {/* TODO SHOW SCROLL IN THE END */}
          <div className='center-flex-row interactive-scroll'>
            PLEASE SCROLL
          </div>
        </div>
      )}
    </section>
  );
};

export default Interaction;
