import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// начальное состояние:
const initialState = { items: [] };
// срез (slice) с именем "contacts" и определенными действиями (actions):
const contactsSlice = createSlice({
    // Cоздаем срез (slice) с указанным именем "contacts" и начальным состоянием initialState
  name: 'contacts',
  initialState,

  reducers: {
    // действие (action) для добавления контакта
    addContact: {
      newContact({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
      reducer(state, { payload }) {
        state.items.push(payload);
      },
    },
    // действие (action) для удаления контакта
    removeContact(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});
// конфигурация для redux-persist с указанием ключа и хранилища:
const persistConfig = {
  key: 'contacts',
  storage,
};
//  редюсер, который объединяет редюсер из среза и redux-persist:
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
//  действия (actions) для использования в компонентах:
export const { addContact, removeContact } = contactsSlice.actions;

// Selector getContactsItems, который возвращает массив контактов из состояния
export const getContactsItems = state => state.contacts.items;
