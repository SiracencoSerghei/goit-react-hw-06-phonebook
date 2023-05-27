import React from 'react';
import ContactListItem from './ContactItem';
import { useSelector } from 'react-redux';
import {getContactsItems} from '../../redux/contacts/contactSlice';
import { getFilterValue } from '../../redux/filter/filterSlice';
import './ContactList.css';

const ContactList = () => {
  const contacts = useSelector(getContactsItems);
  const filter = useSelector(getFilterValue);

  return (
      <ul className="ContactsList">
        {contacts
          .filter(contact => {
            return contact.name.toLowerCase().includes(filter);
          })
          .map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
  );
};

export default ContactList;