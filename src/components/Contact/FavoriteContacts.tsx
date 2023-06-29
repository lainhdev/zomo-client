import { useAppSelector } from "../../store/hooks";
import ContactElement from "./ContactElement";

const FavoriteContacts = ({ searchTerm }: { searchTerm: string }) => {
  const favoriteContacts = useAppSelector(
    (state) => state.contact.favoriteContacts
  );
  return (
    <div>
      {!searchTerm &&
        favoriteContacts.map((favoriteContact) => (
          <ContactElement
            contact={favoriteContact.contact}
            key={favoriteContact.id}
          />
        ))}
      {searchTerm &&
        favoriteContacts
          .filter((el) => el.contact.nickname.includes(searchTerm))
          .map((favoriteContact) => (
            <ContactElement
              contact={favoriteContact.contact}
              key={favoriteContact.id}
            />
          ))}
    </div>
  );
};

export default FavoriteContacts;
