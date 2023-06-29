import { toast } from "react-toastify";
import { CreateMeetingDto } from "../../utils/types";
import {
  createMeeting,
  deleteMeeting,
  getAllMeetings,
  joinMeeting,
  updateMeetingParticipants,
} from "./../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createMeetingThunk = createAsyncThunk(
  "meeting/createMeetingThunk",
  async (params: CreateMeetingDto) => {
    const { data } = await createMeeting(params);
    return data;
  }
);

export const getAllMeetingsThunk = createAsyncThunk(
  "meeting/getAllMeetingsThunk",
  async () => {
    const { data } = await getAllMeetings();
    return data;
  }
);

export const updateMeetingParticipantsThunk = createAsyncThunk(
  "meeting/updateMeetingParticipantsThunk",
  async ({ id, participantId }: { id: string; participantId: string }) => {
    const { data } = await updateMeetingParticipants(id, { participantId });
    toast.success("invited successfully");
    return data;
  }
);

export const joinMeetingThunk = createAsyncThunk(
  "meeting/joinMeetingThunk",
  async ({ id }: { id: string }) => {
    const { data } = await joinMeeting(id);
    return data;
  }
);

export const deleteMeetingThunk = createAsyncThunk(
  "meeting/deleteMeetingThunk",
  async (id: string) => {
    const { data } = await deleteMeeting(id);
    return data;
  }
);
