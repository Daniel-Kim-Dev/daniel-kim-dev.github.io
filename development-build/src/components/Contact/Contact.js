import React from 'react';
import './Contact.css';
import ContactButton from './../Buttons/ContactButton/ContactButton';

function Contact(props) {
  return (
    <div id="Contact">
      <h2 ref={props.sendRef} className="ContactHeading">Contact</h2>
      <p ref={props.sendRef} className="ContactParagraph">
        If you're interested in getting in touch with me about potential work opportunities,
        please don't hesitate to send me an email. I'll do my best to
        respond back as soon as possible.
      </p>
      <ContactButton sendRef={props.sendRef} customClass="ContactContactButton" />
    </div>
  );
}

export default Contact;