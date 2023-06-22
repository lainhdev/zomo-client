const MeetingElement = () => {
  return (
    <div className="flex flex-row items-center my-3 justify-between">
      <div className="flex flex-row items-center">
        <p className="text-xs text-gray-500 mr-5">14:00</p>
        <div>
          <p className="text-xs text-gray-500">Today, Dec 24, 2022</p>
          <p className="font-bold">UI/UX Design Training</p>
          <p className="text-xs text-gray-500">Meeting ID: 1739 2913 1293</p>
        </div>
      </div>
      <p className="px-2 py-1 rounded-md border-primary border text-xs text-primary">
        Completed
      </p>
    </div>
  );
};

export default MeetingElement;
