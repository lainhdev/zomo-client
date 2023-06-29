import Session from "supertokens-web-js/recipe/session";
import { useAppSelector } from "../store/hooks";
import { useState } from "react";
import Profile from "../components/Profile";

const SettingPage = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const authUser = useAppSelector((state) => state.authUser);
  async function logout() {
    await Session.signOut();
    window.location.href = "/";
  }
  return (
    <>
      <div className="flex mt-10 px-5 flex-row items-center">
        <img src="/logo/logo-word.svg" width={20} height={20} />
        <h6 className="ml-5 font-bold text-xl">Settings</h6>
      </div>

      <div
        onClick={() => setOpenProfile(true)}
        className="flex flex-row m-5 mt-10 items-center justify-between bg-gray-200 p-2 rounded-full"
      >
        <div className="flex flex-row items-center">
          <img src={authUser.picture} width={50} height={50} className="mr-3" />
          <div>
            <h6 className="font-bold">{authUser.nickname}</h6>
            <p className="text-gray-500 text-xs mt-1">{authUser.email}</p>
          </div>
        </div>
        <button className="mr-2">
          <img src="/icons/angle-right.svg" width={10} height={10} />
        </button>
      </div>
      <div className="mx-5">
        <button
          className="flex flex-row items-center text-[red]"
          onClick={() => logout()}
        >
          <img src="/icons/log-out.svg" className="mr-2" />
          Logout
        </button>
      </div>
      <div
        className={`absolute left-0 bottom-0 h-screen max-w-screen-xl w-screen bg-white z-30 ease-in-out duration-300 ${
          openProfile ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Profile setOpenProfile={setOpenProfile} />
      </div>
    </>
  );
};

export default SettingPage;
