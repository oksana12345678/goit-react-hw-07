import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "contacts",
  storage,
};
const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactReducer),
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
