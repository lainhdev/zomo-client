import moment from "moment";
import { Meeting } from "../../utils/types";
import { useState } from "react";
import InviteMeeting from "./InviteMeeting";
import { useAppDispatch } from "../../store/hooks";
import { setInviteMeeting } from "../../store/meetingRoom/meetingRoomSlice";
import { deleteMeetingThunk } from "../../store/meetingRoom/meetingThunk";
import { toast } from "react-toastify";

const MeetingDetails = ({
  setOpenDetails,
  meeting,
}: {
  meeting: Meeting;
  setOpenDetails: (params: boolean) => void;
}) => {
  const [openInvite, setOpenInvite] = useState(false);
  const dispatch = useAppDispatch();
  const handleOpenInvite = (value: boolean) => {
    setOpenInvite(value);
    value
      ? dispatch(setInviteMeeting(meeting))
      : dispatch(setInviteMeeting(null));
  };
  const handleDeleteMeeting = async () => {
    setOpenDetails(false);
    const result = await dispatch(deleteMeetingThunk(meeting.id));
    if (deleteMeetingThunk.fulfilled.match(result))
      toast.success(`deleted meeting ${result.payload.topic} successfully`);
  };
  return (
    <div className="w-full relative h-full max-w-xl mx-auto">
      <div className="flex flex-row justify-between px-5 pt-10">
        <div className="flex flex-row items-center">
          <button
            onClick={() => setOpenDetails(false)}
            className="mr-5 cursor-pointer"
          >
            <img src="/icons/arrow-left.svg" width={20} height={20} />
          </button>
          <h6 className="font-bold text-xl">Meeting Details</h6>
        </div>
      </div>
      <div className="flex flex-row my-10 mx-5">
        <p className="text-gray-500">
          Date <code className="ml-14 mr-2">:</code>
        </p>
        <p className="font-semibold">
          {moment(Number(meeting.start)).format("MMMM DD, YYYY")}
        </p>
      </div>
      <div className="flex flex-row my-10 mx-5">
        <p className="text-gray-500">
          Hours <code className="ml-12 mr-2">:</code>
        </p>
        <p className="font-semibold">
          {moment(Number(meeting.start)).format("HH:mm")} -{" "}
          {moment(Number(meeting.end)).format("HH:mm")}
        </p>
      </div>
      <div className="flex flex-row my-10 mx-5">
        <p className="text-gray-500">
          Topic <code className="ml-[3.2rem] mr-2">:</code>
        </p>
        <p className="font-semibold">{meeting.topic}</p>
      </div>
      <div className="flex flex-row my-10 mx-5">
        <p className="text-gray-500">
          Meeting ID <code className="ml-3 mr-2">:</code>
        </p>
        <p className="font-semibold">
          {meeting.id.match(/.{1,4}/g)?.join(" ")}
        </p>
      </div>
      <div className="flex flex-row my-10 mx-5">
        <p className="text-gray-500">
          Duration <code className="ml-[1.7rem] mr-2">:</code>
        </p>
        <p className="font-semibold">
          {(Number(meeting.end) - Number(meeting.start)) / (60 * 1000)} minutes
        </p>
      </div>
      <div className="absolute bottom-10 left-0 right-0">
        <button className="bg-primary w-5/6 mx-auto rounded-full block my-5 py-3 cursor-pointer text-white">
          Join
        </button>
        <button
          onClick={() => handleOpenInvite(true)}
          className="bg-[#E9F0FF] w-5/6 mx-auto rounded-full block my-5 py-3 cursor-pointer text-primary"
        >
          Invite
        </button>
        <button
          onClick={() => handleDeleteMeeting()}
          className="bg-[#ffe1e5] w-5/6 mx-auto rounded-full block my-5 py-3 cursor-pointer text-[#ff4b61]"
        >
          Delete
        </button>
      </div>
      <div
        className={`absolute left-0 top-0 h-screen w-screen max-w-screen-xl bg-white z-30 ease-in-out duration-300 ${
          openInvite ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <InviteMeeting
          meetingId={meeting.id}
          handleOpenInvite={handleOpenInvite}
        />
      </div>
    </div>
  );
};

export default MeetingDetails;
