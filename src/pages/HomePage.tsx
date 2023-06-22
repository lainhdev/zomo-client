import { useEffect, useRef } from "react";
import { getAuthUserThunk } from "../store/authUser/authUserThunk";
import { useAppDispatch } from "../store/hooks";
import AppLayout from "../components/AppLayout";
import HomeUserAuth from "../components/Home/HomeAuthUser";
import HomeAction from "../components/Home/HomeAction";
import MeetingHistoryLite from "../components/Meeting/MeetingHistoryLite";
const HomePage = () => {
  const dataFetchedRef = useRef(false);
  const dispatch = useAppDispatch();
  

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(getAuthUserThunk());
  }, []);

  return (
    <AppLayout>
      <HomeUserAuth />
      <HomeAction />
      <MeetingHistoryLite />
    </AppLayout>
  );
};

export default HomePage;
