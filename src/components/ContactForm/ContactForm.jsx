import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getContactsItems, addContact } from '../../redux/contacts/contactSlice';
import { showInfoMessage, showSuccessMessage } from '../../utils/notifications';
import './ContactForm.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContactsItems);
  console.log('contacts', contacts);
  const dispatch = useDispatch();

  const onNameChange = (evt) => {
    const { value } = evt.currentTarget;

    const isExists = contacts.find(
      (contact) => contact.name.toLowerCase() === value.toLowerCase()
    );

    if (isExists) {
      showInfoMessage(`${value} is already in your phonebook`);
      return;
    }

    setName(value);
  };

  const onNumberChange = (evt) => {
    const { value } = evt.currentTarget;

    const isExists = contacts.find(
      (contact) => contact.number === value
    );

    if (isExists) {
      showInfoMessage(`Phone number ${value} is already in your phonebook`);
      return;
    }

    setNumber(value);
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const onContactFormSubmit = evt => {
    evt.preventDefault();
    const contact = {
        id: nanoid(),
        name: evt.target.name.value,
        number: evt.target.number.value,
      };
console.log('contact', contact);
    
    dispatch(addContact(contact));
    showSuccessMessage('New contact has been added in your phonebook');
    formReset();
  };

  return (
    <div className="formWrapper">
      <form onSubmit={onContactFormSubmit}>
        <label  htmlFor="name">
        <h3>Name</h3>
        <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value={name}
  onChange={onNameChange}
/>
        </label>
        <br />
        <label htmlFor='number'>
        <h3>Number</h3>
        <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={number}
  onChange={onNumberChange}
  disabled={!name} // Disable if name is empty
/>
        </label>
        <br />
        <button
  type="submit"
  className="buttonForm"
  disabled={!name || !number} // Disable if name or number is empty
>
  Add contact
</button>
      </form>
    </div>
  );
};

export default ContactForm;
