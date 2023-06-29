export type User = {
  email: string;
  id: string;
  nickname: string;
  picture: string;
  provider: string;
};

export type FavoriteContact = {
  id: string;
  createdBy: User;
  contact: User;
  userId: string;
};

export type Meeting = {
  id: string;
  topic: string;
  start: string;
  end: string;
  createdBy: User;
  userId: string;
  waitingRoom: boolean;
  participants: MeetingsOnUsers[];
};

export type MeetingsOnUsers = {
  meetingId: string;
  participantId: string;
};

export type CreateMeetingDto = {
  topic: string;
  start: string;
  end: string;
  waitingRoom: boolean;
};

export type UpdateMeetingParticipantsDto = {
  participantId: string;
};

export type UpdateProfileDto = {
  nickname: string;
  picture: string;
};
