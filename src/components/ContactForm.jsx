// ContactForm.js
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAddContact }) => {
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleNameChange = event => {
    setContact({ ...contact, name: event.target.value });
  };

  const handleNumberChange = event => {
    setContact({ ...contact, number: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (contact.name.trim() === '' || contact.number.trim() === '') {
      alert('Name and number cannot be empty');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    onAddContact(newContact);

    setContact({ name: '', number: '' });
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={contact.name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={contact.number}
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
