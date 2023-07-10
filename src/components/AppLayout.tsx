import { useEffect } from "react";
import MeetingRoom from "./MeetingRoom/MeetingRoom";
import NavigationBar from "./NavigationBar/NavigationBar";
import { useAppDispatch } from "../store/hooks";
import { getAuthUserThunk } from "../store/authUser/authUserThunk";
import {
  getAllFavoriteContactsThunk,
  getAllUsersThunk,
} from "../store/contact/contactThunk";
import { getAllMeetingsThunk } from "../store/meetingRoom/meetingThunk";

let dataFetchedRef = false;
const Welcome = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dataFetchedRef) return;
    dataFetchedRef = true;
    dispatch(getAuthUserThunk());
    dispatch(getAllUsersThunk());
    dispatch(getAllFavoriteContactsThunk());
    dispatch(getAllMeetingsThunk());
  }, []);
  return (
    <div className="h-screen max-w-xl overflow-hidden mx-auto w-screen relative">
      <div className="overflow-y-auto h-screen pb-24">{children}</div>
      <NavigationBar />
      <MeetingRoom />
    </div>
  );
};

export default Welcome;
