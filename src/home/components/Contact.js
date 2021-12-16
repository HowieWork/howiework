import { MdCallMade } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
  return (
    <section className='responsive-width section-contact'>
      <div className='center-flex-row tiny-gap contact-title'>
        <div></div> Get in touch
      </div>
      <div className='center-flex-column small-gap contact-container '>
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
