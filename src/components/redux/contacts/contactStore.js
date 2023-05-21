import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedContactsReducer } from '../contacts/contactSlice';

export const contactsStore = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const contactsPersistor = persistStore(contactsStore);
