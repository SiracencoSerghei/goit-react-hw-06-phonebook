import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/contactSlice';
import './ContactList.css';

const ContactListItem = ({contact}) => {
    const dispatch = useDispatch();

    const onClickRemove = e => {
      dispatch(removeContact(contact.id));
    };
    return (
        <li className="ContactListItem">
            <p>{contact.name}: {contact.number}</p>
            <button type="button" className="ContactsList-button" onClick={onClickRemove}>
          <FaTrashAlt />
            </button>
        </li>
    )
}

ContactListItem.propTypes = {
    contact: PropTypes.object.isRequired,
}
export default ContactListItem;