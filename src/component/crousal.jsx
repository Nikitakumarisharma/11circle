import React, { useState, useEffect, useRef } from "react";

const Carousel = () => {
  // Array of cricket-related images
  const slides = [
    { id: 1, imageUrl: "https://static.tnn.in/thumb/msid-100333951,updatedat-1684422028915,width-1280,height-720,resizemode-75/100333951.jpg" },
    { id: 2, imageUrl: "https://th.bing.com/th/id/OIP.Ipq9m-7T4rk6FqgKhwX8KQHaEK?rs=1&pid=ImgDetMain" },
    { id: 3, imageUrl: "https://wikifid.com/wp-content/uploads/2021/01/The-playing-style-of-Virat-Kohli.jpg" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleInteractionStart = () => stopAutoPlay();
  const handleInteractionEnd = () => startAutoPlay();

  // Navigation buttons
  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden"
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      {/* Carousel inner */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-[300px] md:h-[400px] lg:h-[500px] flex-shrink-0">
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <span className="material-icons">{"<"}</span>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <span className="material-icons">{">"}</span>
      </button>
    </div>
  );
};

export default Carousel;
