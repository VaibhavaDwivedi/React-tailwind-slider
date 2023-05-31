import { useState } from "react";
import {slides} from "./slides";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  //Left Click button function
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const prevIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };
  //Right Click button function
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const nextIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  //Dot button click function
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[540px] w-full m-auto py-16 px-4 relative group">
      {/*Image div */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center rounded-2xl bg-cover duration-500"
      ></div>
      {/*Left Arrow */}
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] left-5 text-2xl bg-black/20 rounded-2xl text-white cursor-pointer "
      >
        <BsChevronCompactLeft size={30} />
      </div>
      {/*Right Arrow */}
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] right-5 text-2xl bg-black/20 rounded-2xl text-white cursor-pointer"
      >
        <BsChevronCompactRight size={30} />
      </div>
      {/*Dot button with map count the same as number of image */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => {
              goToSlide(slideIndex);
            }}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled onClick={goToSlide} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
