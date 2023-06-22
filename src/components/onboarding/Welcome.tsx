const Welcome = () => {
  return (
    <div className="h-screen max-h-[750px] w-screen flex flex-col justify-around overflow-hidden">
      <div className="mx-auto relative h-[500px] w-[400px]">
        <img
          src="/avatar/man.png"
          width={60}
          height={60}
          className="absolute top-10 left-20 -rotate-12 transform"
        />
        <img
          src="/avatar/man-1.png"
          width={80}
          height={80}
          className="absolute top-16 right-16 transform rotate-12"
        />
        <img
          src="/avatar/dog.png"
          width={40}
          height={40}
          className="absolute top-40 -left-5 transform -rotate-6"
        />
        <img
          src="/avatar/woman-1.png"
          width={120}
          height={120}
          className="absolute top-40 left-16 transform -rotate-6"
        />
        <img
          src="/avatar/woman.png"
          width={70}
          height={70}
          className="absolute top-52 right-24 transform -rotate-12"
        />
        <img
          src="/avatar/gamer.png"
          width={70}
          height={70}
          className="absolute top-80 left-0 transform rotate-6"
        />
        <img
          src="/avatar/student.png"
          width={40}
          height={40}
          className="absolute top-80 left-40 transform -rotate-12"
        />
        <img
          src="/avatar/chicken.png"
          width={70}
          height={70}
          className="absolute top-96 left-20 transform -rotate-12"
        />
        <img
          src="/avatar/empathy.png"
          width={90}
          height={90}
          className="absolute top-96 right-24 transform rotate-12"
        />
        <img
          src="/avatar/girl.png"
          width={70}
          height={70}
          className="absolute top-80 right-0 transform -rotate-6"
        />
        <img
          src="/avatar/rabbit.png"
          width={50}
          height={50}
          className="absolute top-40 -right-3 transform -rotate-6"
        />
      </div>
      <div className="max-w-[400px] mx-auto">
        <h1 className="text-primary text-3xl font-bold text-center">
          Welcome to
          <br /> Zomo!
        </h1>
        <p className="text-center mx-5 pt-5 text-sm">
          The best video conferencing & online meeting app of the century to
          boost your professional work anytime and anywhere!
        </p>
      </div>
    </div>
  );
};

export default Welcome;
