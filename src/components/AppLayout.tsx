import NavigationBar from "./NavigationBar/NavigationBar";

const Welcome = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen max-w-screen-xl overflow-hidden mx-auto w-screen relative">
      <div className="overflow-y-auto h-screen pb-24">{children}</div>
      <NavigationBar />
    </div>
  );
};

export default Welcome;
