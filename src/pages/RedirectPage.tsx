import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

const RedirectPage = () => {
  const dataFetchedRef = useRef(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    const path = location.pathname;
    setTimeout(() => {
      path === "/" ? navigate("/home") : navigate(path);
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
