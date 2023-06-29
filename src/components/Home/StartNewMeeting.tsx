import { useState } from "react";
import Switch from "react-switch";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setIsOpenMeetingRoom,
  setOngoingMeeting,
} from "../../store/meetingRoom/meetingRoomSlice";
import { CreateMeetingDto } from "../../utils/types";
import { createMeetingThunk } from "../../store/meetingRoom/meetingThunk";
import { toast } from "react-toastify";

const StartNewMeeting = ({
  setOpenStartMeetingDialog,
}: {
  setOpenStartMeetingDialog: (params: boolean) => void;
}) => {
  const [isCheckedVideo, setIsCheckedVideo] = useState(false);
  const [isCheckedAudio, setIsCheckedAudio] = useState(false);
  const authUser = useAppSelector((state) => state.authUser);

  const dispatch = useAppDispatch();

  const handleStartMeeting = async () => {
    const params: CreateMeetingDto = {
      start: Date.now().toString(),
      end: (Date.now() + 3600 * 1000).toString(),
      topic: `Meeting with ${authUser.nickname}`,
      waitingRoom: false,
    };
    const result = await dispatch(createMeetingThunk(params));
    setOpenStartMeetingDialog(false);
    if (createMeetingThunk.fulfilled.match(result)) {
      toast.success(`Create Meeting ${params.topic} successfully`);
      dispatch(setOngoingMeeting(result.payload));
      dispatch(setIsOpenMeetingRoom(true));
    } else {
      toast.error(`Create meeting ${params.topic} failed`);
    }
  };
  return (
    <div className="max-w-lg mx-auto">
      <h6 className="text-center text-lg mt-10 font-bold">Start New Meeting</h6>
      <div className="flex flex-row justify-between w-5/6 mx-auto mt-5">
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
      <div className="flex flex-row justify-between w-5/6 mx-auto mt-3">
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
        onClick={() => handleStartMeeting()}
        className="py-2 bg-primary rounded-2xl block mt-8 text-white w-5/6 mx-auto"
      >
        Start a Meeting
      </button>
      <button
        onClick={() => setOpenStartMeetingDialog(false)}
        className="py-2 bg-white rounded-2xl block mt-3 text-primary border border-primary w-5/6 mx-auto"
      >
        Cancel
      </button>
    </div>
  );
};

export default StartNewMeeting;
