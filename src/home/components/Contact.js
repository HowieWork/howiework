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
        <Button
          href='https://github.com/howiework'
          secondary
          hoverUnderline
          targetBlank
        >
          <div className='center-flex-row tiny-gap contact-text'>
            GitHub <MdCallMade />
          </div>
        </Button>
        <Button
          href='https://www.instagram.com/howiework'
          secondary
          hoverUnderline
          targetBlank
        >
          <div className='center-flex-row tiny-gap contact-text'>
            Instagram <MdCallMade />
          </div>
        </Button>
        <Button
          href='https://www.linkedin.com/in/howiework'
          secondary
          hoverUnderline
          targetBlank
        >
          <div className='center-flex-row tiny-gap contact-text'>
            LinkedIn <MdCallMade />
          </div>
        </Button>
        <Button
          href='mailto:howiewang2020@gmail.com'
          secondary
          hoverUnderline
          targetBlank
        >
          <div className='center-flex-row tiny-gap contact-text'>
            Email <MdCallMade />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
