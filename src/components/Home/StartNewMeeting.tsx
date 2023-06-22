import { useState } from "react";
import Switch from "react-switch";

const StartNewMeeting = ({
  setOpenStartMeetingDialog,
}: {
  setOpenStartMeetingDialog: (params: boolean) => void;
}) => {
  const [isCheckedVideo, setIsCheckedVideo] = useState(false);
  const [isCheckedAudio, setIsCheckedAudio] = useState(false);
  return (
    <div>
      <h6 className="text-center text-lg mt-10 font-bold">Start New Meeting</h6>
      <div className="flex flex-row justify-between px-5 mt-5">
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
      <div className="flex flex-row justify-between px-5 mt-3">
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
      <div className="mt-6 mx-auto max-w-sm text-center">
        <button
          onClick={() => setOpenStartMeetingDialog(false)}
          className="py-2 bg-white rounded-2xl w-40 text-primary border border-primary mr-5"
        >
          Cancel
        </button>
        <button className="py-2 bg-primary rounded-2xl w-40 text-white">
          Start a Meeting
        </button>
      </div>
    </div>
  );
};

export default StartNewMeeting;
