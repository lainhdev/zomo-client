/* eslint-disable @typescript-eslint/ban-ts-comment */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Introduction = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleGoNext = () => {
    if (currentSlide === 2) return navigate("/signin");
    // @ts-ignore
    sliderRef.current.slickNext();
  };

  return (
    <div className="w-screen h-screen overflow-y-auto overflow-x-hidden introduction max-w-xl mx-auto flex flex-col justify-around max-h-[750px]">
      <Slider
        {...settings}
        ref={sliderRef}
        beforeChange={(_, nextSlide) => setCurrentSlide(nextSlide)}
      >
        <div className="h-[500px]">
          <img
            src="/introduction/step-1.png"
            alt="step-1"
            className="mx-auto"
          />
          <p className="text-center mx-5 text-primary text-3xl font-bold mt-5">
            Video Conferencing made easy and fast in your hands
          </p>
        </div>
        <div className="h-[500px]">
          <img
            src="/introduction/step-2.png"
            alt="step-2"
            className="mx-auto"
          />
          <p className="text-center mx-5 text-primary text-3xl font-bold mt-5">
            Lots of great features that further help your work
          </p>
        </div>
        <div className="h-[500px]">
          <img
            src="/introduction/step-3.png"
            alt="step-3"
            className="mx-auto"
          />
          <p className="text-center mx-5 text-primary text-3xl font-bold mt-5">
            Let's boost your productivity with Zomo right now!
          </p>
        </div>
      </Slider>
      <button
        className="text-[#fff] w-4/5 block px-3 py-2 font-bold rounded-xl bg-primary mx-auto"
        onClick={() => handleGoNext()}
      >
        {currentSlide === 2 ? "Get Started" : "Next"}
      </button>
    </div>
  );
};

export default Introduction;
