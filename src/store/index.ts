import meetingRoomSlice from "./meetingRoom/meetingRoomSlice";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authUserSlice from "./authUser/authUserSlice";
import contactSlice from "./contact/contactSlice";

export const store = configureStore({
  reducer: {
    authUser: authUserSlice,
    meetingRoom: meetingRoomSlice,
    contact: contactSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
