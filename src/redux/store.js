import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './sliceContacts';
import { filterReducer } from './sliceFilter';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },  
});

