import { useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();
  console.log(location.pathname);
  // const [curr, setcurr] = useState(second)
  return (
    <div className="absolute z-10 bottom-0 left-0 w-full justify-between px-12 pb-5 flex flex-row items-end bg-white pt-3">
      <button className="cursor-pointer">
        <img
          src={
            location.pathname.includes("home")
              ? "/icons/home-primary.svg"
              : "/icons/home-gray.svg"
          }
          width={26}
          height={26}
          className="mx-auto"
        />
        <p
          className={`text-xs font-medium mt-1 ${
            location.pathname.includes("home")
              ? "text-primary"
              : "text-gray-500"
          }`}
        >
          Home
        </p>
      </button>
      <button className="cursor-pointer">
        <img
          src={
            location.pathname.includes("schedule")
              ? "/icons/calendar-primary.svg"
              : "/icons/calendar-gray.svg"
          }
          width={26}
          height={26}
          className="mx-auto"
        />
        <p
          className={`text-xs font-medium mt-1 ${
            location.pathname.includes("schedule")
              ? "text-primary"
              : "text-gray-500"
          }`}
        >
          Schedule
        </p>
      </button>
      <button className="cursor-pointer">
        <img
          src={
            location.pathname.includes("contact")
              ? "/icons/contact-primary.svg"
              : "/icons/contact-gray.svg"
          }
          width={30}
          height={30}
          className="mx-auto"
        />
        <p
          className={`text-xs font-medium mt-1 ${
            location.pathname.includes("contact")
              ? "text-primary"
              : "text-gray-500"
          }`}
        >
          Contacts
        </p>
      </button>
      <button className="cursor-pointer">
        <img
          src={
            location.pathname.includes("setting")
              ? "/icons/setting-primary.svg"
              : "/icons/setting-gray.svg"
          }
          width={30}
          height={30}
          className="mx-auto"
        />
        <p
          className={`text-xs font-medium mt-1 ${
            location.pathname.includes("setting")
              ? "text-primary"
              : "text-gray-500"
          }`}
        >
          Setting
        </p>
      </button>
    </div>
  );
};

export default NavigationBar;
