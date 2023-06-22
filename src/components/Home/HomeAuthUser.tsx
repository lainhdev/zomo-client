import { useAppSelector } from "../../store/hooks";
import Session from "supertokens-web-js/recipe/session";

const HomeAuthUser = () => {
  const authUser = useAppSelector((state) => state.authUser);
  async function logout() {
    await Session.signOut();
    window.location.href = "/";
  }
  return (
    <div className="flex flex-row m-5 mt-10 items-center justify-between">
      <div className="flex flex-row items-center">
        <img src={authUser.picture} width={50} height={50} className="mr-3" />
        <div>
          <p className="text-gray-500 text-xs mt-1">Good Moring!</p>
          <h6 className="mt-1 font-bold">{authUser.nickname}</h6>
        </div>
      </div>
      <img
        onClick={() => logout()}
        src="/icons/notification-gray.svg"
        width={30}
        height={30}
      />
    </div>
  );
};

export default HomeAuthUser;
