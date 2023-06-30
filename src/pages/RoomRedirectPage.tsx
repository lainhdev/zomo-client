import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { HashLoader } from "react-spinners";
import {
  setIsOpenMeetingRoom,
  setOngoingMeeting,
} from "../store/meetingRoom/meetingRoomSlice";
import { joinMeetingThunk } from "../store/meetingRoom/meetingThunk";
import { toast } from "react-toastify";
import { useEffect } from "react";

let dataFetchedRef = false;
const RoomRedirectPage = () => {
  const { id } = useParams();
  const meetings = useAppSelector((state) => state.meetingRoom.meetingRooms);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleJoin = async () => {
    if (!id) return navigate("/app/home");
    const idx = meetings.findIndex((meeting) => meeting.id === id);
    if (idx !== -1) {
      dispatch(setOngoingMeeting(meetings[idx]));
      dispatch(setIsOpenMeetingRoom(true));
      return;
    }
    const result = await dispatch(joinMeetingThunk({ id }));
    if (joinMeetingThunk.fulfilled.match(result)) {
      dispatch(setOngoingMeeting(result.payload));
      setTimeout(() => {
        dispatch(setIsOpenMeetingRoom(true));
      }, 100);
    } else {
      toast.error("Cannot join meeting");
      navigate("/app/home");
    }
  };

  useEffect(() => {
    if (dataFetchedRef) return;
    dataFetchedRef = true;
    handleJoin();
  }, []);

  if (!meetings.length)
    return (
      <div className="h-screen max-h-[750px] w-screen max-w-xl mx-auto flex flex-col justify-around overflow-hidden">
        <img src="/logo/logo-full.svg" className="w-48 mx-auto" />
        <HashLoader color="#246bfd" className="block mx-auto" size={80} />
      </div>
    );

  return <div>{id}</div>;
};

export default RoomRedirectPage;
