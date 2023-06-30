import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Switch from "react-switch";
import {
  setIsOpenMeetingRoom,
  setOngoingMeeting,
} from "../../store/meetingRoom/meetingRoomSlice";
import { joinMeetingThunk } from "../../store/meetingRoom/meetingThunk";
import { toast } from "react-toastify";

const JoinDialog = ({
  setOpenJoinDialog,
}: {
  setOpenJoinDialog: (params: boolean) => void;
}) => {
  const meetings = useAppSelector((state) => state.meetingRoom.meetingRooms);
  const [isCheckedVideo, setIsCheckedVideo] = useState(false);
  const [isCheckedAudio, setIsCheckedAudio] = useState(false);
  const [meetingId, setMeetingId] = useState("");
  const authUser = useAppSelector((state) => state.authUser);
  const dispatch = useAppDispatch();

  const handleJoin = async () => {
    const id = meetingId.split(" ").join("");
    const idx = meetings.findIndex((meeting) => meeting.id === id);
    if (idx !== -1) {
      dispatch(setOngoingMeeting(meetings[idx]));
      dispatch(setIsOpenMeetingRoom(true));
      return;
    }
    const result = await dispatch(joinMeetingThunk({ id: meetingId }));
    if (joinMeetingThunk.fulfilled.match(result)) {
      dispatch(setOngoingMeeting(result.payload));
      setTimeout(() => {
        dispatch(setIsOpenMeetingRoom(true));
      }, 100);
    } else {
      toast.error("Cannot join meeting");
    }
  };
  return (
    <div className="w-full relative h-full max-w-xl mx-auto">
      <div className="flex flex-row justify-between px-5 pt-10">
        <div className="flex flex-row items-center">
          <button
            onClick={() => setOpenJoinDialog(false)}
            className="mr-5 cursor-pointer"
          >
            <img src="/icons/arrow-left.svg" width={20} height={20} />
          </button>
          <h6 className="font-bold text-xl">Join a Meeting</h6>
        </div>
      </div>
      <h6 className="font-semibold text-lg px-5 mt-10">Meeting ID</h6>
      <div className="mx-5 mt-5">
        <input
          className="w-full rounded-2xl bg-gray-100 p-2 pl-3"
          placeholder="Enter meeting ID"
          value={meetingId}
          onChange={(e) => setMeetingId(e.target.value)}
        />
      </div>
      <h6 className="font-semibold text-lg px-5 mt-10">Your Name</h6>
      <p className="ml-10 text-sm mt-5">{authUser.nickname}</p>
      <h6 className="font-semibold text-lg px-5 mt-10">Join Options</h6>
      <div className="flex flex-row justify-between px-5 mt-5">
        <p className="font-medium text-sm">Turn OFF My Video</p>
        <Switch
          onChange={setIsCheckedVideo}
          checked={isCheckedVideo}
          onColor={"#246BFD"}
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={40}
        />
      </div>
      <div className="flex flex-row justify-between px-5 mt-3">
        <p className="font-medium text-sm">Turn OFF My Audio</p>
        <Switch
          onChange={setIsCheckedAudio}
          checked={isCheckedAudio}
          onColor={"#246BFD"}
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={40}
        />
      </div>
      <button
        onClick={() => handleJoin()}
        className="bg-primary w-5/6 mx-auto rounded-full bottom-10 left-1/2 transform -translate-x-1/2 py-3 cursor-pointer text-white absolute"
      >
        Join
      </button>
    </div>
  );
};

export default JoinDialog;
