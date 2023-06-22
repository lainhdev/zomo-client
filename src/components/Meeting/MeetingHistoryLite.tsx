import { useState } from "react";
import MeetingElement from "./MeetingElement";
import MeetingHistory from "./MeetingHistory";

const MeetingHistoryLite = () => {
  const [isOpenFullHistory, setIsOpenFullHistory] = useState(false);
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
        {[1, 2, 3, 4, 5, 6, 7].map((x) => (
          <MeetingElement key={x} />
        ))}
      </div>
      <div
        className={`absolute left-0 top-0 h-screen w-screen bg-white z-30 ease-in-out duration-300 ${
          isOpenFullHistory ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <MeetingHistory setIsOpenFullHistory={setIsOpenFullHistory} />
      </div>
    </div>
  );
};

export default MeetingHistoryLite;
