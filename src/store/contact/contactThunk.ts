import {
  createFavoriteContact,
  deleteFavoriteContact,
  getAllFavoriteContacts,
} from "./../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers } from "../../utils/api";

export const getAllUsersThunk = createAsyncThunk(
  "contact/getAllUsers",
  async () => {
    const { data } = await getAllUsers();
    return data;
  }
);

export const getAllFavoriteContactsThunk = createAsyncThunk(
  "contact/getAllFavoriteContacts",
  async () => {
    const { data } = await getAllFavoriteContacts();
    return data;
  }
);

export const createFavoriteContactThunk = createAsyncThunk(
  "contact/createFavoriteContact",
  async (params: { favoriteUserId: string }) => {
    const { data } = await createFavoriteContact(params);
    return data;
  }
);

export const deleteFavoriteContactThunk = createAsyncThunk(
  "contact/deleteFavoriteContact",
  async (favoriteContactId: string) => {
    const { data } = await deleteFavoriteContact(favoriteContactId);
    return data;
  }
);
