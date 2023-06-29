import MeetingElement from "../components/Meeting/MeetingElement";
import { useAppSelector } from "../store/hooks";

const SchedulePage = () => {
  const meetings = useAppSelector((state) => state.meetingRoom.meetingRooms);
  const todayTime = new Date().setHours(23, 59, 59, 999);
  const tomorrowTime = new Date().setHours(47, 59, 59, 999);
  return (
    <>
      <div className="flex mt-10 px-5 flex-row items-center">
        <img src="/logo/logo-word.svg" width={20} height={20} />
        <h6 className="ml-5 font-bold text-xl">Schedule Meeting</h6>
      </div>
      <h6 className="mt-10 px-5 font-bold text-lg">Today</h6>
      <div className="px-5 mt-3">
        {meetings.length
          ? meetings
              .filter(
                (el) =>
                  Date.now() <= Number(el.end) && Number(el.start) < todayTime
              )
              .sort((a, b) => Number(a.start) - Number(b.start))
              .map((meeting) => (
                <MeetingElement meeting={meeting} key={meeting.id} />
              ))
          : ""}
      </div>
      <h6 className="mt-10 px-5 font-bold text-lg">Tomorrow</h6>
      <div className="px-5 mt-3">
        {meetings.length
          ? meetings
              .filter(
                (el) =>
                  todayTime < Number(el.start) &&
                  Number(el.start) < tomorrowTime
              )
              .sort((a, b) => Number(a.start) - Number(b.start))
              .map((meeting) => (
                <MeetingElement meeting={meeting} key={meeting.id} />
              ))
          : ""}
      </div>
      <h6 className="mt-10 px-5 font-bold text-lg">The Following Days</h6>
      <div className="px-5 mt-3">
        {meetings.length
          ? meetings
              .filter((el) => tomorrowTime < Number(el.start))
              .sort((a, b) => Number(a.start) - Number(b.start))
              .map((meeting) => (
                <MeetingElement meeting={meeting} key={meeting.id} />
              ))
          : ""}
      </div>
    </>
  );
};

export default SchedulePage;
