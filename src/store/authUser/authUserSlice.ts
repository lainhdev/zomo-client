import { createSlice } from "@reduxjs/toolkit";
import { getAuthUserThunk } from "./authUserThunk";
import { AuthUser } from "../../utils/types";

const initialState: AuthUser = {
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
  },
});

export default authUser.reducer;
