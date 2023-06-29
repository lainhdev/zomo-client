import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setIsOpenMeetingRoom,
  setOngoingMeeting,
} from "../../store/meetingRoom/meetingRoomSlice";
import MeetingRoomInfo from "./MeetingRoomInfo";
import AgoraUIKit from "agora-react-uikit";

const MeetingRoom = () => {
  // const [openShareVideo, setOpenShareVideo] = useState(false);
  const [openMeetingRoomInfo, setOpenMeetingRoomInfo] = useState(false);
  const meetingRoom = useAppSelector((state) => state.meetingRoom);
  const dispatch = useAppDispatch();
  const ongoingMeeting = useAppSelector(
    (state) => state.meetingRoom.onGoingMeeting
  );

  const rtcProps = {
    appId: import.meta.env.VITE_REACT_AGORA_APP_ID,
    channel: ongoingMeeting?.id || "",
    tokenUrl: import.meta.env.VITE_REACT_APP_API_SERVER_URL,
    enableAudio: false,
    enablVideo: false,
  };
  const callbacks = {
    EndCall: () => {
      dispatch(setIsOpenMeetingRoom(false));
      dispatch(setOngoingMeeting(null));
    },
  };
  return (
    <div
      className={`absolute max-w-screen-xl left-0 top-0 h-screen w-screen bg-[#000] z-50 ease-in-out duration-1000 ${
        meetingRoom.isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="w-full h-full relative flex flex-col">
        <div className="pt-10 px-5 pb-5 flex flex-row item-centers justify-between">
          <div className="flex flex-row items-center">
            <button onClick={() => setOpenMeetingRoomInfo(true)}>
              <img src="/icons/info-square-white.svg" width={20} height={20} />
            </button>
          </div>
          <div></div>
        </div>
        <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
          {meetingRoom.isOpen && (
            <AgoraUIKit
              rtcProps={rtcProps}
              callbacks={callbacks}
              styleProps={{
                localBtnContainer: { background: "#000" },
                UIKitContainer: {
                  background: "#246BFD",
                  width: "100%",
                  height: "100%",
                },
                usernameText: { color: "" },
              }}
            />
          )}
        </div>
        {/* {openShareVideo && (
            <div className="absolute bottom-3 left-1/2 z-10 transform -translate-x-1/2 w-60 bg-[#000] p-5 rounded-2xl">
              <div className="flex flex-row justify-between">
                <p className="text-white text-sm font-bold">Share Screen</p>
                <img src="/icons/monitor-white.svg" width={16} height={16} />
              </div>
              <div className="flex flex-row justify-between mt-5">
                <p className="text-white text-sm font-bold">Share Camera</p>
                <img src="/icons/camera-white.svg" width={16} height={16} />
              </div>
            </div>
          )} */}
        {/* <div className=" text-white flex flex-row justify-around w-full p-5">
          <button className="text-white text-center text-xs w-20">
            <img
              src="/icons/micro-white.svg"
              height={15}
              width={15}
              className="mx-auto"
            />
            <p>Mute</p>
          </button>
          <button
            onClick={() => setOpenShareVideo(!openShareVideo)}
            className="text-white text-center text-xs w-20"
          >
            <img
              src="/icons/angle-up-square.svg"
              height={25}
              width={25}
              className="mx-auto"
            />
            <p>Share</p>
          </button>
          <button className="text-white text-center text-xs w-20">
            <img
              src="/icons/people-white.svg"
              height={25}
              width={25}
              className="mx-auto"
            />
            <p>Participants</p>
          </button>
        </div> */}
      </div>
      <div
        onClick={() => setOpenMeetingRoomInfo(false)}
        className={`absolute left-0 top-0 h-screen w-screen bg-[#000000] z-30 ease-in-out duration-300 opacity-60 ${
          openMeetingRoomInfo ? "translate-y-0" : "translate-y-full"
        }`}
      ></div>
      <div
        className={`absolute left-0 bottom-0 h-[22rem] w-full bg-[#000] z-40 ease-in-out duration-300 rounded-t-[4.5rem] ${
          openMeetingRoomInfo ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <MeetingRoomInfo setOpenMeetingRoomInfo={setOpenMeetingRoomInfo} />
      </div>
    </div>
  );
};

export default MeetingRoom;
