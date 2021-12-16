import { MdCallMade } from 'react-icons/md';

import Button from '../../shared/components/FormElements/Button';

import './Contact.css';

const Contact = () => {
  return (
    <section className='responsive-width section-contact'>
      <div className='center-flex-row tiny-gap contact-title'>
        <div></div> Get in touch
      </div>

      {/* TODO CHANGE DIV TO LINK */}
      <div className='center-flex-column small-gap contact-container '>
        {/* FIXME BUTTON CSS STYLE AND TARGET BLANK */}
        {/* <Button href='https://github.com/howiework'>GitHub</Button> */}
        <div className='center-flex-row tiny-gap contact-text'>
          GitHub <MdCallMade />
        </div>
        <div className='center-flex-row tiny-gap contact-text'>
          Instagram <MdCallMade />
        </div>
        <div className='center-flex-row tiny-gap contact-text'>
          LinkedIn <MdCallMade />
        </div>
        <div className='center-flex-row tiny-gap contact-text'>
          Email <MdCallMade />
        </div>
      </div>
    </section>
  );
};

export default Contact;
