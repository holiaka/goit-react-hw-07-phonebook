import { createSlice} from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

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
      console.log(state, action)
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected](state, action) {      
      state.isLoading = false;
      state.error = action.payload;
    },

  }

  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.items.push(action.payload);
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name: name,
  //           number: number,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     return { list: state.list.filter(item => item.id !== action.payload) };
  //   },
  // },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
