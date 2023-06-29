import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthUser, updateUserProfile } from "../../utils/api";
import { UpdateProfileDto } from "../../utils/types";
import { toast } from "react-toastify";

export const getAuthUserThunk = createAsyncThunk("authUser/get", async () => {
  const { data } = await getAuthUser();
  return data;
});

export const updateUserInfoThunk = createAsyncThunk(
  "authUser/update",
  async (params: UpdateProfileDto) => {
    const { data } = await updateUserProfile(params);
    toast.success("Change profile successfully");
    return data;
  }
);
