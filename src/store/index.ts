import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authUserSlice from "./authUser/authUserSlice";

export const store = configureStore({
  reducer: { authUser: authUserSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
