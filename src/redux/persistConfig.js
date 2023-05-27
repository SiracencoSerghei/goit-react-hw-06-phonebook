
import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import { contactsSlice } from "../redux/contacts/contactSlice";
import { filterSlice } from "../redux/filter/filterSlice";

const persistConfig = {
  key: "phonebook",
  storage,
};

const rootReducer = combineReducers({
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);


//   export const store = configureStore({
//     reducer: persistedReducer,
//   });
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
