import { createSlice } from "@reduxjs/toolkit";
import {
  createMeetingThunk,
  deleteMeetingThunk,
  getAllMeetingsThunk,
  joinMeetingThunk,
  updateMeetingParticipantsThunk,
} from "./meetingThunk";
import { Meeting } from "../../utils/types";
interface IMeetingRoomInterface {
  isOpen: boolean;
  meetingRooms: Meeting[];
  inviteMeeting: Meeting | null;
  onGoingMeeting: Meeting | null;
}
const initialState: IMeetingRoomInterface = {
  isOpen: false,
  meetingRooms: [],
  inviteMeeting: null,
  onGoingMeeting: null,
};

export const meetingRoom = createSlice({
  name: "meetingRoom",
  initialState,
  reducers: {
    setIsOpenMeetingRoom: (state, action) => {
      state.isOpen = action.payload;
    },
    setInviteMeeting: (state, action) => {
      state.inviteMeeting = action.payload;
    },
    setOngoingMeeting: (state, action) => {
      state.onGoingMeeting = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMeetingsThunk.fulfilled, (state, action) => {
      console.log("getAllMeetingsThunk.fulfilled");
      state.meetingRooms = action.payload;
    });
    builder.addCase(createMeetingThunk.fulfilled, (state, action) => {
      console.log("createMeetingThunk.fulfilled");
      const newArr = state.meetingRooms.concat(action.payload);
      state.meetingRooms = newArr;
    });
    builder.addCase(
      updateMeetingParticipantsThunk.fulfilled,
      (state, action) => {
        console.log("updateMeetingParticipantsThunk.fulfilled");
        const newArr = state.meetingRooms;
        const idx = newArr.findIndex(
          (meeting) => meeting.id === action.payload.id
        );
        newArr[idx] = action.payload;
        state.meetingRooms = newArr;
      }
    );
    builder.addCase(joinMeetingThunk.fulfilled, (state, action) => {
      console.log("joinMeetingThunk.fulfilled");
      const newArr = state.meetingRooms.concat(action.payload);
      state.meetingRooms = newArr;
    });
    builder.addCase(deleteMeetingThunk.fulfilled, (state, action) => {
      console.log("deleteMeetingThunk.fulfilled");
      const newArr = state.meetingRooms;
      const idx = newArr.findIndex(
        (meeting) => meeting.id === action.payload.id
      );
      newArr.splice(idx, 1);
      state.meetingRooms = newArr;
    });
  },
});

export const { setIsOpenMeetingRoom, setInviteMeeting, setOngoingMeeting } =
  meetingRoom.actions;

export default meetingRoom.reducer;
