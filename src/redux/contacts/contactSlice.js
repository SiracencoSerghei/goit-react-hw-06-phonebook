import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

const initialState = { items: [] };

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        const { id, name, number } = action.payload;
      state.items.push({ id, name, number });
      },
      newContact({ name, number }) {
        return {
          payload: {
            id:nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact(state, action) {
      const contactId = action.payload;
      state.items = state.items.filter((contact) => contact.id !== contactId);
    },
  },
});


//  действия (actions) для использования в компонентах:
export const { addContact, removeContact } = contactsSlice.actions;

// Selector getContactsItems, который возвращает массив контактов из состояния
export const getContactsItems = state => state.contacts.contacts.items;
