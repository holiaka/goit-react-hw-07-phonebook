import { createSlice} from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
     },
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected](state, action) {      
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
     },
    [addContact.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected](state, action) {      
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
     },
    [deleteContact.fulfilled](state, action) {
      console.log(state.items, action.payload);
      state.items = [...state.items.filter(item => item.id !== action.payload.id)];
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected](state, action) {      
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const contactReducer = contactSlice.reducer;
