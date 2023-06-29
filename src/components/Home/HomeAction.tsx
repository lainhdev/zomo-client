import { useState } from "react";
import StartNewMeeting from "./StartNewMeeting";
import JoinDialog from "./JoinDialog";
import ScheduleDialog from "./ScheduleDialog";

const HomeAction = () => {
  const [openStartMeetingDialog, setOpenStartMeetingDialog] = useState(false);
  const [openJoinDialog, setOpenJoinDialog] = useState(false);
  const [openScheduleDialog, setOpenScheduleDialog] = useState(false);
  return (
    <div className="max-w-md mx-auto flex flex-row justify-around px-5 my-10">
      <div>
        <button
          onClick={() => setOpenStartMeetingDialog(true)}
          className="bg-primary w-20 h-20 drop-shadow-xl flex items-center justify-center rounded-full cursor-pointer"
        >
          <img src="/icons/video-white.svg" width={35} height={35} />
        </button>
        <p className="text-xs font-bold text-center mt-2">New Meeting</p>
      </div>
      <div>
        <button
          onClick={() => setOpenJoinDialog(true)}
          className="bg-secondary w-20 h-20 drop-shadow-xl flex items-center justify-center rounded-full cursor-pointer"
        >
          <img src="/icons/plus-square-white.svg" width={30} height={30} />
        </button>
        <p className="text-xs font-bold text-center mt-2">Join</p>
      </div>
      <div>
        <button
          onClick={() => setOpenScheduleDialog(true)}
          className="bg-watermelon-pink w-20 h-20 drop-shadow-xl flex items-center justify-center rounded-full cursor-pointer"
        >
          <img src="/icons/calendar-white.svg" width={28} height={28} />
        </button>
        <p className="text-xs font-bold text-center mt-2">Schedule</p>
      </div>
      <div
        onClick={() => setOpenStartMeetingDialog(false)}
        className={`absolute left-0 top-0 h-screen w-screen bg-[#000000] z-30 ease-in-out duration-300 opacity-60 ${
          openStartMeetingDialog ? "translate-y-0" : "translate-y-full"
        }`}
      ></div>
      <div
        className={`absolute left-0 bottom-0 h-72 max-w-screen-xl w-screen bg-white z-40 ease-in-out duration-300 rounded-t-[4.5rem] ${
          openStartMeetingDialog ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <StartNewMeeting
          setOpenStartMeetingDialog={setOpenStartMeetingDialog}
        />
      </div>
      <div
        className={`absolute left-0 bottom-0 h-screen max-w-screen-xl w-screen bg-white z-30 ease-in-out duration-300 ${
          openJoinDialog ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <JoinDialog setOpenJoinDialog={setOpenJoinDialog} />
      </div>
      <div
        className={`absolute left-0 bottom-0 h-screen max-w-screen-xl w-screen bg-white z-30 ease-in-out duration-300 ${
          openScheduleDialog ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ScheduleDialog setOpenScheduleDialog={setOpenScheduleDialog} />
      </div>
    </div>
  );
};

export default HomeAction;
