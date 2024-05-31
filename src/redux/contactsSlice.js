import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContact } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleError = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContact.pending, handlePending)
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContact.rejected, handleError)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleError)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleError);
  },
});
export const contactReducer = contactsSlice.reducer;
