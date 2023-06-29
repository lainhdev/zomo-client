import { useAppSelector } from "../../store/hooks";
import ContactElement from "./ContactElement";

const AllContacts = ({ searchTerm }: { searchTerm: string }) => {
  const contacts = useAppSelector((state) => state.contact.contacts);
  return (
    <div>
      {!searchTerm &&
        contacts.map((contact) => (
          <ContactElement contact={contact} key={contact.id} />
        ))}
      {searchTerm &&
        contacts
          .filter((el) => el.nickname.includes(searchTerm))
          .map((contact) => (
            <ContactElement contact={contact} key={contact.id} />
          ))}
    </div>
  );
};

export default AllContacts;
