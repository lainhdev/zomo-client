import HomeUserAuth from "../components/Home/HomeAuthUser";
import HomeAction from "../components/Home/HomeAction";
import MeetingHistoryLite from "../components/Meeting/MeetingHistoryLite";
const HomePage = () => {
  return (
    <>
      <HomeUserAuth />
      <HomeAction />
      <MeetingHistoryLite />
    </>
  );
};

export default HomePage;
