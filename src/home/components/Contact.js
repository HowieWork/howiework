import { useState } from "react";
import { MdCallMade } from "react-icons/md";
import emailjs from "emailjs-com";

import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Backdrop from "../../shared/components/UIElements/Backdrop";
import Input from "../../shared/components/FormElements/Input";

import { useForm } from "../../shared/hooks/form-hook.js";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators.js";

import "./Contact.css";

const Contact = () => {
  const [isSendMessage, setIsSendMessage] = useState(false);

  const requestServiceHandler = (event) => {
    event.preventDefault();
    setIsSendMessage((prev) => !prev);
  };

  const backdropHandler = () => {
    setIsSendMessage((prev) => !prev);
  };

  // REQUEST FORM
  const [formState, inputHandler] = useForm(
    {
      name: { value: "", isValid: false },
      email: { value: "", isValid: false },
    },
    false
  );

  const sendEmail = async (formElement) => {
    try {
      const response = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formElement,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    // SEND DATA TO GMAIL WITH HELP OF EMAILJS
    try {
      const response = await sendEmail(event.target);
      if (response.status === 200) {
        console.log("Thank you for your message!");
      }
    } catch (error) {
      // HANDLE ERROR
    }

    setIsSendMessage(false);
  };

  return (
    <section id="contact" className="responsive-width section-contact">
      {isSendMessage && <Backdrop onClick={backdropHandler} />}
      {isSendMessage && (
        <Modal>
          <form className="contact-send-message" onSubmit={formSubmitHandler}>
            <Input
              element="input"
              id="name"
              type="text"
              label="Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
            />
            <Input
              element="input"
              id="email"
              type="email"
              label="Email"
              validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid email address."
              onInput={inputHandler}
            />
            <Input
              element="textarea"
              id="message"
              label="Message"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
              errorText="Please enter a valid message, at least 10 characters."
              onInput={inputHandler}
            />
            <div className="send-message-btn">
              <Button
                type="submit"
                primary
                size="small"
                disabled={!formState.isValid}
              >
                Send Message
              </Button>
            </div>
          </form>
        </Modal>
      )}
      <div className="center-flex-row tiny-gap contact-title">
        <div></div> Get in touch
      </div>

      <div className="center-flex-column small-gap contact-container">
        <Button
          href="https://github.com/howiework"
          secondary
          hoverUnderline
          targetBlank
        >
          <div className="center-flex-row tiny-gap contact-text">
            GitHub <MdCallMade />
          </div>
        </Button>
        <Button
          href="https://www.instagram.com/howiework"
          secondary
          hoverUnderline
          targetBlank
        >
          <div className="center-flex-row tiny-gap contact-text">
            Instagram <MdCallMade />
          </div>
        </Button>
        <Button
          href="https://www.linkedin.com/in/howiework"
          secondary
          hoverUnderline
          targetBlank
        >
          <div className="center-flex-row tiny-gap contact-text">
            LinkedIn <MdCallMade />
          </div>
        </Button>
        <Button
          href="mailto:haowang.creative@gmail.com"
          secondary
          hoverUnderline
          targetBlank
        >
          <div className="center-flex-row tiny-gap contact-text">
            Email <MdCallMade />
          </div>
        </Button>
        <div>
          <Button type="button" primary onClick={requestServiceHandler}>
            <div className="center-flex-row tiny-gap">Send Message</div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
