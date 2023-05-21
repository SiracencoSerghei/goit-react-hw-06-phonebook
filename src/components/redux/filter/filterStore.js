import { configureStore } from '@reduxjs/toolkit';
import { persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import { filterSlice } from '../filter/filterSlice';

export const filterStore = configureStore({
  reducer: {
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const filterPersistor = persistStore(filterStore);