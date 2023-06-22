import { useEffect, useState } from "react";
import Introduction from "../components/onboarding/Introduction";
import Welcome from "../components/onboarding/Welcome";

const Onboarding = () => {
  const [isShowIntro, setIsShowIntro] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShowIntro(true);
    }, 1500);
  }, []);
  return (
    <div className="relative h-screen max-h-[750px] w-screen overflow-hidden">
      <Welcome />
      <div
        className={`absolute z-10 top-0 left-0 bg-white h-screen w-screen ease-in-out duration-500 ${
          isShowIntro ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Introduction />
      </div>
    </div>
  );
};

export default Onboarding;
