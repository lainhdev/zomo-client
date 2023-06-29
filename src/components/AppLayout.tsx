import { useEffect, useRef } from "react";
import MeetingRoom from "./MeetingRoom/MeetingRoom";
import NavigationBar from "./NavigationBar/NavigationBar";
import { useAppDispatch } from "../store/hooks";
import { getAuthUserThunk } from "../store/authUser/authUserThunk";
import {
  getAllFavoriteContactsThunk,
  getAllUsersThunk,
} from "../store/contact/contactThunk";
import { getAllMeetingsThunk } from "../store/meetingRoom/meetingThunk";

const Welcome = ({ children }: { children: React.ReactNode }) => {
  const dataFetchedRef = useRef(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(getAuthUserThunk());
    dispatch(getAllUsersThunk());
    dispatch(getAllFavoriteContactsThunk());
    dispatch(getAllMeetingsThunk());
  }, []);
  return (
    <div className="h-screen max-w-screen-xl overflow-hidden mx-auto w-screen relative">
      <div className="overflow-y-auto h-screen pb-24">{children}</div>
      <NavigationBar />
      <MeetingRoom />
    </div>
  );
};

export default Welcome;
