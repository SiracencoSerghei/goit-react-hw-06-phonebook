
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";
import { persistedContactsReducer } from "../redux/contacts/contactSlice";
import { filterSlice } from "../redux/filter/filterSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"], // Array of reducers to persist
};

const persistedReducer = persistReducer(
  persistConfig,
  persistedContactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

persistor.subscribe(() => {
  console.log("Persisted state:", store.getState());
});
