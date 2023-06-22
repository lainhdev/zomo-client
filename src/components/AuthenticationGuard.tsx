import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Session from "supertokens-web-js/recipe/session";

const AuthenticationGuard = ({ children }: { children: React.ReactNode }) => {
  const dataFetchedRef = useRef(false);
  const navigate = useNavigate();

  async function doesSessionExist() {
    if (await Session.doesSessionExist()) {
      // user is logged in
    } else {
      navigate("/welcome");
    }
  }

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    doesSessionExist();
  }, []);

  return <>{children}</>;
};

export default AuthenticationGuard;
