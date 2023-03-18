import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64160c29351c4aed491649ca.mockapi.io/api/';

export const fetchContacts = createAsyncThunk(
  'contacts/allFetch',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('contacts');
            console.log("WAIT", response);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        
  }
);
