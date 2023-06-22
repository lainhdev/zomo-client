import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthUser } from "../../utils/api";

export const getAuthUserThunk = createAsyncThunk("authUser/get", async () => {
  const { data } = await getAuthUser();
  return data;
});
