import MeetingElement from "./MeetingElement";

const MeetingHistory = ({
  setIsOpenFullHistory,
}: {
  setIsOpenFullHistory: (params: boolean) => void;
}) => {
  return (
    <>
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
      <div className="px-5 mt-3">
        {[1, 2, 3, 4, 5, 6, 7].map((x) => (
          <MeetingElement key={x} />
        ))}
      </div>
    </>
  );
};

export default MeetingHistory;
