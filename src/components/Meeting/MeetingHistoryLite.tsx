import { useState } from "react";
import MeetingElement from "./MeetingElement";
import MeetingHistory from "./MeetingHistory";
import { useAppSelector } from "../../store/hooks";

const MeetingHistoryLite = () => {
  const [isOpenFullHistory, setIsOpenFullHistory] = useState(false);
  const meetings = useAppSelector((state) => state.meetingRoom.meetingRooms);
  return (
    <div>
      <div className="flex flex-row justify-between px-5">
        <h6 className="font-bold">Meeting History</h6>
        <button
          onClick={() => setIsOpenFullHistory(true)}
          className="text-primary font-bold cursor-pointer text-sm"
        >
          See All
        </button>
      </div>
      <div className="px-5 mt-3">
        {meetings.length
          ? meetings
              .filter((el) => Number(el.end) < Date.now())
              .sort((a, b) => Number(b.start) - Number(a.start))
              .slice(0, 5)
              .map((meeting) => (
                <MeetingElement meeting={meeting} key={meeting.id} />
              ))
          : ""}
      </div>
      <div
        className={`absolute left-0 bottom-0 h-screen max-w-screen-xl w-screen bg-white z-30 ease-in-out duration-300 ${
          isOpenFullHistory ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <MeetingHistory setIsOpenFullHistory={setIsOpenFullHistory} />
      </div>
    </div>
  );
};

export default MeetingHistoryLite;
