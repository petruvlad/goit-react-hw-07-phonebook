import React from 'react';
import ContactItem from './ContactItem';
import './ContactList.css';

const ContactList = React.memo(({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactItem contact={contact} />
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ContactList;
