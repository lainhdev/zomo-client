import { useState } from "react";
import Switch from "react-switch";
import { toast } from "react-toastify";
import { CreateMeetingDto } from "../../utils/types";
import { useAppDispatch } from "../../store/hooks";
import { createMeetingThunk } from "../../store/meetingRoom/meetingThunk";
import moment from "moment";

const ScheduleDialog = ({
  setOpenScheduleDialog,
}: {
  setOpenScheduleDialog: (params: boolean) => void;
}) => {
  const [isEnableWaitingRoom, setIsEnableWaitingRoom] = useState(false);
  const [dateSelected, setDateSelected] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [topic, setTopic] = useState("");
  const dispatch = useAppDispatch();

  const onChangeDate = (value: string) => {
    console.log({ onChangeDate: value });
    setDateSelected(value);
  };
  const onChangeTimeStart = (value: string) => {
    console.log({ value });
    if (timeEnd && value > timeEnd) return setTimeStart(timeEnd);
    setTimeStart(value);
  };

  const onChangeTimeEnd = (value: string) => {
    if (timeStart && value < timeStart) return setTimeEnd(timeStart);
    setTimeEnd(value);
  };

  const handleSchedule = async () => {
    if (!dateSelected || !timeEnd || !timeStart || !topic) {
      return toast.error("Please fill out all information first");
    }
    const dateSplit = dateSelected.split("-");
    const startSplit = timeStart.split(":");
    const endSplit = timeEnd.split(":");
    const start = moment({
      day: Number(dateSplit[2]),
      month: Number(dateSplit[1]) - 1,
      year: Number(dateSplit[0]),
      hour: Number(startSplit[0]),
      minute: Number(startSplit[1]),
    })
      .toDate()
      .getTime()
      .toString();
    const end = moment({
      day: Number(dateSplit[2]),
      month: Number(dateSplit[1]) - 1,
      year: Number(dateSplit[0]),
      hour: Number(endSplit[0]),
      minute: Number(endSplit[1]),
    })
      .toDate()
      .getTime()
      .toString();
    const params: CreateMeetingDto = {
      start: start,
      end: end,
      topic,
      waitingRoom: isEnableWaitingRoom,
    };
    const result = await dispatch(createMeetingThunk(params));
    setOpenScheduleDialog(false);
    if (createMeetingThunk.fulfilled.match(result)) {
      toast.success(`Create Meeting ${topic} successfully`);
    }
  };
  return (
    <div className="w-full relative h-full max-w-xl mx-auto">
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
      <div className="mx-5 mt-5">
        <input
          className="w-full rounded-2xl bg-gray-100 p-2 pl-3"
          placeholder="Enter your topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>
      <div className="flex mx-5 justify-between items-center mt-10">
        <p className="font-semibold">Date</p>
        <div className="flex flex-row">
          <input
            type="date"
            className="w-[8.3rem]"
            value={dateSelected}
            min={moment().format("YYYY-MM-DD")}
            onChange={(e) => setDateSelected(e.target.value)}
          />
        </div>
      </div>
      <div className="flex mx-5 justify-between items-center mt-5">
        <p className="font-semibold">From</p>
        <div className="flex flex-row">
          <input
            type="time"
            className="w-24"
            value={timeStart}
            onChange={(e) => onChangeTimeStart(e.target.value)}
          />
        </div>
      </div>
      <div className="flex mx-5 justify-between items-center mt-5">
        <p className="font-semibold">To</p>
        <div className="flex flex-row">
          <input
            type="time"
            className="w-24"
            value={timeEnd}
            onChange={(e) => onChangeTimeEnd(e.target.value)}
          />
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
      <button
        onClick={() => handleSchedule()}
        className="bg-primary w-5/6 mx-auto rounded-full bottom-10 left-1/2 transform -translate-x-1/2 py-3 cursor-pointer text-white absolute"
      >
        Schedule
      </button>
    </div>
  );
};

export default ScheduleDialog;
