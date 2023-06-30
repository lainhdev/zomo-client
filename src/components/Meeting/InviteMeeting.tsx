import ContactContainer from "../Contact/ContactContainer";

const InviteMeeting = ({
  handleOpenInvite,
  meetingId,
}: {
  meetingId: string;
  handleOpenInvite: (params: boolean) => void;
}) => {
  return (
    <div className="pt-10 w-full h-full max-w-xl overflow-hidden">
      <div className="flex flex-row items-center mx-5">
        <button
          onClick={() => handleOpenInvite(false)}
          className="mr-5 cursor-pointer"
        >
          <img src="/icons/arrow-left.svg" width={20} height={20} />
        </button>
        <h6 className="font-bold text-lg">
          Invite Meeting ID: {meetingId.match(/.{1,4}/g)?.join(" ")}{" "}
        </h6>
      </div>
      <ContactContainer />
    </div>
  );
};

export default InviteMeeting;
