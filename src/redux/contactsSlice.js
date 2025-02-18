import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      const newContact = { id: nanoid(), ...action.payload };
      state.items.push(newContact);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },

  addContact: (state, action) => {
    const isDuplicate = state.items.some(contact => contact.id === action.payload.id);
    if (!isDuplicate) {
      state.items.push(action.payload);
    }
  },
  
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
