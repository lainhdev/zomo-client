import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import Switch from "react-switch";

const JoinDialog = ({
  setOpenJoinDialog,
}: {
  setOpenJoinDialog: (params: boolean) => void;
}) => {
  const [isCheckedVideo, setIsCheckedVideo] = useState(false);
  const [isCheckedAudio, setIsCheckedAudio] = useState(false);
  const authUser = useAppSelector((state) => state.authUser);
  return (
    <>
      <div className="flex flex-row justify-between px-5 pt-10">
        <div className="flex flex-row items-center">
          <button
            onClick={() => setOpenJoinDialog(false)}
            className="mr-5 cursor-pointer"
          >
            <img src="/icons/arrow-left.svg" width={20} height={20} />
          </button>
          <h6 className="font-bold text-xl">Join a Meeting</h6>
        </div>
      </div>
      <h6 className="font-semibold text-lg px-5 mt-10">Meeting ID</h6>
      <p className="ml-10 text-sm mt-5">746 2738 8399</p>
      <h6 className="font-semibold text-lg px-5 mt-10">Your Name</h6>
      <p className="ml-10 text-sm mt-5">{authUser.nickname}</p>
      <h6 className="font-semibold text-lg px-5 mt-10">Join Options</h6>
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
      <button className="bg-primary w-80 mx-auto rounded-full block bottom-10 left-0 right-0 py-3 cursor-pointer text-white absolute">
        Join
      </button>
    </>
  );
};

export default JoinDialog;
