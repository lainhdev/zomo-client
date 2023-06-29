import { useState } from "react";
import AllContacts from "./AllContacts";
import FavoriteContacts from "./FavoriteContacts";

const ContactContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("All Contacts");
  return (
    <>
      <label className="relative block border border-primary rounded-3xl p-1 pl-5 w-auto mt-5 bg-white mx-5">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <img src="/icons/search-gray.svg" width={20} height={20} />
        </span>
        <input
          className="placeholder:text-slate-400 block bg-transparent rounded-xl w-full py-1 pl-5 pr-3 focus:outline-none focus:border-none focus:ring-0 sm:text-sm"
          placeholder="search"
          type="text"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <div className="w-auto mx-5 mt-5 overflow-hidden">
        <button
          onClick={() => setSelectedTab("All Contacts")}
          className={`w-1/2 ${
            selectedTab === "All Contacts" ? "text-primary" : "text-gray-500"
          }`}
        >
          All Contacts
        </button>
        <button
          onClick={() => setSelectedTab("Starred")}
          className={`w-1/2 ${
            selectedTab === "Starred" ? "text-primary" : "text-gray-500"
          }`}
        >
          Starred
        </button>
      </div>

      <div className="border-b-2 border-gray-200 mx-5 mt-2 mb-5 relative">
        <div
          className={`border-b-2 border-primary w-1/2 absolute ease-linear duration-300 ${
            selectedTab === "All Contacts"
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        ></div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className={`w-full px-5 ease-linear duration-300 absolute ${
            selectedTab === "All Contacts"
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >
          <AllContacts searchTerm={searchTerm} />
        </div>
        <div
          className={`w-full px-5 ease-linear duration-300 absolute ${
            selectedTab === "Starred" ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <FavoriteContacts searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
};

export default ContactContainer;
