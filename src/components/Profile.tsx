import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateUserInfoThunk } from "../store/authUser/authUserThunk";

const Profile = ({
  setOpenProfile,
}: {
  setOpenProfile: (param: boolean) => void;
}) => {
  const authUser = useAppSelector((state) => state.authUser);
  const [openAvatarBox, setOpenAvatarBox] = useState(false);
  const [nickname, setNickname] = useState("");
  const [picture, setPicture] = useState("");
  useEffect(() => {
    setNickname(authUser.nickname);
    setPicture(authUser.picture);
  }, [authUser]);

  const dispatch = useAppDispatch();

  const avatars = [
    "cat",
    "chicken",
    "dog",
    "empathy",
    "gamer",
    "girl",
    "man",
    "man-1",
    "rabbit",
    "student",
    "woman",
    "woman-1",
  ];

  const handleSubmit = () => {
    console.log({ picture, nickname });
    dispatch(updateUserInfoThunk({ picture, nickname }));
    setOpenProfile(false);
  };
  return (
    <div className="w-full relative h-full max-w-xl mx-auto">
      {openAvatarBox && (
        <div
          onClick={() => setOpenAvatarBox(false)}
          className="absolute z-20 bg-gray-500 max-w-xl opacity-50 top-0 w-screen h-screen left-0"
        ></div>
      )}
      <div className="flex flex-row justify-between px-5 pt-10">
        <div className="flex flex-row items-center">
          <button
            onClick={() => setOpenProfile(false)}
            className="mr-5 cursor-pointer"
          >
            <img src="/icons/arrow-left.svg" width={20} height={20} />
          </button>
          <h6 className="font-bold text-xl">Profile</h6>
        </div>
      </div>
      <div className="mt-20 flex justify-center items-center">
        <div className="relative">
          <img src={picture} width={100} height={100} />
          <button
            onClick={() => setOpenAvatarBox(true)}
            className="bg-primary absolute z-10 bottom-0 right-2 p-1 rounded-lg"
          >
            <img src="/icons/edit.svg" width={15} height={15} />
          </button>
          {openAvatarBox && (
            <>
              <div className="absolute w-60 p-3 bg-gray-200 z-20 -bottom-36 -left-16 rounded-lg">
                <div className="w-full grid grid-rows-3 grid-flow-col gap-2">
                  {avatars.map((avatar) => (
                    <div
                      key={avatar}
                      className="flex items-center justify-center"
                    >
                      <img
                        src={`/avatar/${avatar}.png`}
                        width={30}
                        height={30}
                        className="cursor-pointer"
                        onClick={() => setPicture(`/avatar/${avatar}.png`)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <p className="font-semibold text-lg w-5/6 mx-auto mt-10">Email</p>
      <p className="mt-2 w-5/6 mx-auto pl-3">{authUser.email}</p>
      <p className="font-semibold text-lg w-5/6 mx-auto mt-5">Nickname</p>
      <input
        className="w-5/6 mx-auto bg-gray-200 block mt-2 rounded-full py-2 px-3"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <button
        onClick={() => handleSubmit()}
        className="absolute bottom-10 block z-10 bg-primary w-5/6 left-1/2 -translate-x-1/2 transform py-2 rounded-full text-white cursor-pointer"
      >
        Change profile
      </button>
    </div>
  );
};

export default Profile;
