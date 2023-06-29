import { useEffect, useState } from "react";
import {
  createFavoriteContactThunk,
  deleteFavoriteContactThunk,
} from "../../store/contact/contactThunk";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { User } from "../../utils/types";
import { updateMeetingParticipantsThunk } from "../../store/meetingRoom/meetingThunk";
import { toast } from "react-toastify";

const ContactElement = ({ contact }: { contact: User }) => {
  const dispatch = useAppDispatch();
  const favoriteContacts = useAppSelector(
    (state) => state.contact.favoriteContacts
  );
  const inviteMeeting = useAppSelector(
    (state) => state.meetingRoom.inviteMeeting
  );
  const handleStaredContact = () => {
    dispatch(createFavoriteContactThunk({ favoriteUserId: contact.id }));
  };

  const handleUnstarredContact = async () => {
    if (typeof isFavoriteContact === "string") {
      const result = await dispatch(
        deleteFavoriteContactThunk(isFavoriteContact)
      );
      if (deleteFavoriteContactThunk.fulfilled.match(result)) {
        setIsFavoriteContact(false);
      }
    }
  };

  const handleInvite = () => {
    if (inviteMeeting?.id) {
      const idx = inviteMeeting.participants.findIndex(
        (participant) => participant.participantId === contact.id
      );
      if (idx > -1) return toast.info("This user has already joined");
      dispatch(
        updateMeetingParticipantsThunk({
          id: inviteMeeting?.id,
          participantId: contact.id,
        })
      );
    }
  };
  const [isFavoriteContact, setIsFavoriteContact] = useState<boolean | string>(
    false
  );

  useEffect(() => {
    const res = favoriteContacts.find(
      (favoriteContact) => favoriteContact.contact.id === contact.id
    );
    res ? setIsFavoriteContact(res.id) : setIsFavoriteContact(false);
  }, [favoriteContacts, contact.id]);

  return (
    <div className="flex flex-row items-center justify-between mb-3">
      <div className="flex flex-row items-center">
        <img src={contact.picture} width={35} height={35} />
        <p className="font-bold ml-5">{contact.nickname}</p>
      </div>
      {inviteMeeting?.id ? (
        <button
          onClick={() => handleInvite()}
          className="p-2 rounded-xl text-xs text-primary cursor-pointer border-primary border"
        >
          invite
        </button>
      ) : isFavoriteContact ? (
        <button onClick={() => handleUnstarredContact()} className="p-3">
          <img src="/icons/star-fill.svg" />
        </button>
      ) : (
        <button onClick={() => handleStaredContact()} className="p-3">
          <img src="/icons/star.svg" />
        </button>
      )}
    </div>
  );
};

export default ContactElement;
