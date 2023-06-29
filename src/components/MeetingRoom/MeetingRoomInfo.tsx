import { useAppSelector } from "../../store/hooks";

const MeetingRoomInfo = ({
  setOpenMeetingRoomInfo,
}: {
  setOpenMeetingRoomInfo: (params: boolean) => void;
}) => {
  const ongoingMeeting = useAppSelector(
    (state) => state.meetingRoom.onGoingMeeting
  );
  return (
    <div className="text-white max-w-xl mx-auto relative">
      <h6 className="text-xl font-bold text-center mt-6">
        {ongoingMeeting?.topic}
      </h6>
      <p className="border-b mx-10 my-5 border-gray-500"></p>
      <p className="px-10 font-light">
        Meeting ID<i className="w-2 inline-block"></i>:{" "}
        <b className="ml-2 font-bold">
          {ongoingMeeting?.id.match(/.{1,4}/g)?.join(" ")}
        </b>
      </p>
      <p className="border-b mx-10 my-5 border-gray-500"></p>
      <p className="px-10 font-light">
        Host<i className="w-14 inline-block"></i>:{" "}
        <b className="ml-2 font-bold">{ongoingMeeting?.createdBy.nickname}</b>
      </p>
      <p className="border-b mx-10 my-5 border-gray-500"></p>
      <p className="px-10 font-light">
        Invite Link<i className="w-4 inline-block"></i>:{" "}
        <b className="ml-2 font-bold text-xs">
          https://zomo.onrender.com/room/{ongoingMeeting?.id}
        </b>
      </p>
      <button
        onClick={() => setOpenMeetingRoomInfo(false)}
        className="w-80 mx-auto block rounded-full py-2 font-bold bg-primary mt-6"
      >
        OK
      </button>
    </div>
  );
};

export default MeetingRoomInfo;
