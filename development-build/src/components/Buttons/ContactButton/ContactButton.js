import React from 'react';
import './ContactButton.css';
import { ReactComponent as  MailIcon } from './MailIcon.svg';

function ContactButton(props) {
  return (
    <a
      href="mailto:danielkim4815@gmail.com"
      ref={props.sendRef}
      className={`ContactButton ${props.customClass}`}
    >
      <MailIcon />
      Contact
    </a>
  );
}

export default ContactButton;