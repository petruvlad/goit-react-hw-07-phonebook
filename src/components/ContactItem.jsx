// ContactItem.js
import React from 'react';
import './ContactItem.css';

const ContactItem = ({ contact }) => {
  return contact ? (
    <li>
      {contact.name} - {contact.number}
    </li>
  ) : null;
};

export default ContactItem;
