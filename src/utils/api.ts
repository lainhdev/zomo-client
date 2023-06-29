import axios, { AxiosRequestConfig } from "axios";
import {
  CreateMeetingDto,
  FavoriteContact,
  Meeting,
  UpdateMeetingParticipantsDto,
  UpdateProfileDto,
  User,
} from "./types";

const API_URL = import.meta.env.VITE_REACT_APP_API_SERVER_URL;

const axiosClient = axios.create({ baseURL: API_URL });
const config: AxiosRequestConfig = { withCredentials: true };

export const getAuthUser = () =>
  axiosClient.get<User>(`/users/current`, config);

export const getAllUsers = () => axiosClient.get<User[]>(`/users`, config);

export const updateUserProfile = (params: UpdateProfileDto) =>
  axiosClient.patch<User>(`/users`, params, config);

export const getAllFavoriteContacts = () =>
  axiosClient.get<FavoriteContact[]>(`/favorite-contact`, config);

export const createFavoriteContact = (data: { favoriteUserId: string }) =>
  axiosClient.post<FavoriteContact>(`/favorite-contact`, data, config);

export const deleteFavoriteContact = (favoriteUserId: string) =>
  axiosClient.delete<FavoriteContact>(
    `/favorite-contact/${favoriteUserId}`,
    config
  );

export const createMeeting = (data: CreateMeetingDto) =>
  axiosClient.post<Meeting>(`/meeting`, data, config);

export const getAllMeetings = () =>
  axiosClient.get<Meeting[]>(`/meeting`, config);

export const updateMeetingParticipants = (
  id: string,
  data: UpdateMeetingParticipantsDto
) =>
  axiosClient.patch<Meeting>(
    `/meeting/${id}`,
    { participantId: data.participantId },
    config
  );

export const joinMeeting = (id: string) =>
  axiosClient.patch<Meeting>(`/meeting/${id}/join`, {}, config);

export const deleteMeeting = (id: string) =>
  axiosClient.delete<Meeting>(`/meeting/${id}`, config);
