import { useAppSelector } from "../../store/hooks";
import MeetingElement from "./MeetingElement";

const MeetingHistory = ({
  setIsOpenFullHistory,
}: {
  setIsOpenFullHistory: (params: boolean) => void;
}) => {
  const meetings = useAppSelector((state) => state.meetingRoom.meetingRooms);

  return (
    <div className="w-full flex flex-col h-full max-w-xl mx-auto">
      <div className="flex flex-row justify-between px-5 pt-10 overflow-x-hidden">
        <div className="flex flex-row items-center">
          <button
            onClick={() => setIsOpenFullHistory(false)}
            className="mr-5 cursor-pointer"
          >
            <img src="/icons/arrow-left.svg" width={20} height={20} />
          </button>
          <h6 className="font-bold text-xl">Meeting History</h6>
        </div>
      </div>
      <div className="px-5 mt-3 overflow-y-scroll flex-grow">
        {meetings.length
          ? meetings
              .filter((el) => Number(el.end) < Date.now())
              .sort((a, b) => Number(b.start) - Number(a.start))
              .map((meeting) => (
                <MeetingElement meeting={meeting} key={meeting.id} />
              ))
          : ""}
      </div>
    </div>
  );
};

export default MeetingHistory;
