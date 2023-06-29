import { FavoriteContact, User } from "./../../utils/types";
import { createSlice } from "@reduxjs/toolkit";
import {
  createFavoriteContactThunk,
  deleteFavoriteContactThunk,
  getAllFavoriteContactsThunk,
  getAllUsersThunk,
} from "./contactThunk";

interface IContactState {
  contacts: User[];
  favoriteContacts: FavoriteContact[];
}
const initialState: IContactState = {
  contacts: [],
  favoriteContacts: [],
};

export const contact = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsersThunk.fulfilled, (state, action) => {
      console.log("getAllUsersThunk.fulfilled");
      state.contacts = action.payload;
    });
    builder.addCase(getAllFavoriteContactsThunk.fulfilled, (state, action) => {
      console.log("getAllFavoriteContactsThunk.fulfilled");
      state.favoriteContacts = action.payload;
    });
    builder.addCase(createFavoriteContactThunk.fulfilled, (state, action) => {
      console.log("createFavoriteContactThunk.fulfilled");
      const newArr = state.favoriteContacts.concat(action.payload);
      state.favoriteContacts = newArr;
    });
    builder.addCase(deleteFavoriteContactThunk.fulfilled, (state, action) => {
      console.log("deleteFavoriteContactThunk.fulfilled");
      const idx = state.favoriteContacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      const newArr = [...state.favoriteContacts];

      newArr.splice(idx, 1);
      state.favoriteContacts = newArr;
    });
  },
});

export default contact.reducer;
