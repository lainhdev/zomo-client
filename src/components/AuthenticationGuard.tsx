import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Session from "supertokens-web-js/recipe/session";

let dataFetchedRef = false;
const AuthenticationGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  async function doesSessionExist() {
    if (await Session.doesSessionExist()) {
      // user is logged in
      setLoading(false);
    } else {
      setLoading(false);
      navigate("/welcome");
    }
  }

  useEffect(() => {
    if (dataFetchedRef) return;
    dataFetchedRef = true;
    doesSessionExist();
  }, []);

  if (loading)
    return (
      <div className="h-screen max-h-[750px] w-screen max-w-xl mx-auto flex flex-col justify-around overflow-hidden">
        <img src="/logo/logo-full.svg" className="w-48 mx-auto" />
        <HashLoader color="#246bfd" className="block mx-auto" size={80} />
      </div>
    );

  return <>{children}</>;
};

export default AuthenticationGuard;
