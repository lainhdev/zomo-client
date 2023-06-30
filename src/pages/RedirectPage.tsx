import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

let dataFetchedRef = false
const RedirectPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (dataFetchedRef) return;
    dataFetchedRef = true;
    const path = location.pathname;
    setTimeout(() => {
      path === "/" ? navigate("/app/home") : navigate(path);
    }, 1000);
  }, []);

  return (
    <div className="h-screen max-h-[750px] w-screen max-w-xl mx-auto flex flex-col justify-around overflow-hidden">
      <img src="/logo/logo-full.svg" className="w-48 mx-auto" />
      <HashLoader color="#246bfd" className="block mx-auto" size={80} />
    </div>
  );
};

export default RedirectPage;
