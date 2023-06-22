import { useState } from "react";
import Switch from "react-switch";

const ScheduleDialog = ({
  setOpenScheduleDialog,
}: {
  setOpenScheduleDialog: (params: boolean) => void;
}) => {
  const [isEnableWaitingRoom, setIsEnableWaitingRoom] = useState(false);
  const [isAddToCalendar, setIsAddToCalendar] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-between px-5 pt-10">
        <div className="flex flex-row items-center">
          <button
            onClick={() => setOpenScheduleDialog(false)}
            className="mr-5 cursor-pointer"
          >
            <img src="/icons/arrow-left.svg" width={20} height={20} />
          </button>
          <h6 className="font-bold text-xl">Schedule Meeting</h6>
        </div>
      </div>
      <h6 className="font-semibold text-lg px-5 mt-10">Meeting Topic</h6>
      <p className="ml-10 text-sm mt-5">UI/UX Design Workshop</p>
      <div className="flex mx-5 justify-between items-center mt-10">
        <p className="font-semibold">Date</p>
        <div className="flex flex-row">
          <p className="mr-3">12/24/2022</p>
          <img src="/icons/angle-right.svg" width={8} height={8} />
        </div>
      </div>
      <div className="flex mx-5 justify-between items-center mt-5">
        <p className="font-semibold">From</p>
        <div className="flex flex-row">
          <p className="mr-3">14:00</p>
          <img src="/icons/angle-right.svg" width={8} height={8} />
        </div>
      </div>
      <div className="flex mx-5 justify-between items-center mt-5">
        <p className="font-semibold">To</p>
        <div className="flex flex-row">
          <p className="mr-3">16:00</p>
          <img src="/icons/angle-right.svg" width={8} height={8} />
        </div>
      </div>
      <div className="flex mx-5 justify-between items-center mt-5">
        <p className="font-semibold">Time Zone</p>
        <div className="flex flex-row">
          <p className="mr-3">UTC+7</p>
          <img src="/icons/angle-right.svg" width={8} height={8} />
        </div>
      </div>
      <h6 className="mt-10 font-bold text-lg mx-5">Meeting Options</h6>
      <div className="flex flex-row justify-between px-5 mt-5">
        <p className="font-semibold">Enable Waiting Room</p>
        <Switch
          onChange={setIsEnableWaitingRoom}
          checked={isEnableWaitingRoom}
          onColor={"#246BFD"}
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={40}
        />
      </div>
      <div className="flex flex-row justify-between px-5 mt-5">
        <p className="font-semibold">Add To Calendar</p>
        <Switch
          onChange={setIsAddToCalendar}
          checked={isAddToCalendar}
          onColor={"#246BFD"}
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={40}
        />
      </div>
      <button className="bg-primary w-80 mx-auto rounded-full block bottom-10 left-0 right-0 py-3 cursor-pointer text-white absolute">
        Schedule
      </button>
    </div>
  );
};

export default ScheduleDialog;
