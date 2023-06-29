import ContactContainer from "../components/Contact/ContactContainer";

const ContactPage = () => {
  return (
    <>
      <div className="flex mt-10 px-5 flex-row items-center">
        <img src="/logo/logo-word.svg" width={20} height={20} />
        <h6 className="ml-5 font-bold text-xl">Contacts</h6>
      </div>
      <ContactContainer />
    </>
  );
};

export default ContactPage;
