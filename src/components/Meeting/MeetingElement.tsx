import { useState } from "react";
import MeetingDetails from "./MeetingDetails";
import { Meeting } from "../../utils/types";
import moment from "moment";

const MeetingElement = ({ meeting }: { meeting: Meeting }) => {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <div className="flex flex-row items-center my-3 justify-between">
      <div
        className="flex flex-row items-center"
        onClick={() => setOpenDetails(true)}
      >
        <p className="text-xs text-gray-500 mr-5">
          {moment(Number(meeting.start)).format("HH:mm")}
        </p>
        <div>
          <p className="text-xs text-gray-500">
            {moment(Number(meeting.start)).format("MMM Do, YYYY")}
          </p>
          <p className="font-bold">{meeting.topic}</p>
          <p className="text-xs text-gray-500">
            Meeting ID:{" "}
            <code className="font-semibold text-sm">
              {meeting.id.match(/.{1,4}/g)?.join(" ")}
            </code>
          </p>
        </div>
      </div>
      {Number(meeting.end) < Date.now() ? (
        <p
          onClick={() => setOpenDetails(true)}
          className="px-2 py-1 rounded-md border-primary border text-xs text-primary"
        >
          Completed
        </p>
      ) : Number(meeting.start) < Date.now() &&
        Number(meeting.end) > Date.now() ? (
        <p
          onClick={() => setOpenDetails(true)}
          className="px-2 py-1 rounded-md border-[#FF9EAA] border text-xs text-[#FF9EAA]"
        >
          Ongoing
        </p>
      ) : (
        <p
          onClick={() => setOpenDetails(true)}
          className="px-2 py-1 rounded-md border-[#3AA6B9] border text-xs text-[#3AA6B9]"
        >
          Scheduled
        </p>
      )}

      <div
        className={`absolute left-0 top-0 h-screen w-screen max-w-xl bg-white z-30 ease-in-out duration-300 ${
          openDetails ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <MeetingDetails meeting={meeting} setOpenDetails={setOpenDetails} />
      </div>
    </div>
  );
};

export default MeetingElement;
