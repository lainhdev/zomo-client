import { createSlice } from "@reduxjs/toolkit";
import { getAuthUserThunk, updateUserInfoThunk } from "./authUserThunk";
import { User } from "../../utils/types";

const initialState: User = {
  email: "",
  id: "",
  nickname: "",
  picture: "",
  provider: "",
};

export const authUser = createSlice({
  name: "authUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuthUserThunk.fulfilled, (state, action) => {
      console.log("getAuthUserThunk.fulfilled");
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
      state.picture = action.payload.picture;
      state.provider = action.payload.provider;
    });
    builder.addCase(updateUserInfoThunk.fulfilled, (state, action) => {
      console.log("updateUserInfoThunk.fulfilled");
      state.nickname = action.payload.nickname;
      state.picture = action.payload.picture;
    });
  },
});

export default authUser.reducer;
