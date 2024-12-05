import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "UserName",
    location: "XXX",
    winnings: "₹xx Crore",
    image: "path-to-image/ramesh.png", // Update with the correct path
    text: "I won x crore on EXYE & I am very happy. My experience with playing EXYE for the last x years has been amazing. I recommend it very highly to every quiz player.",
  },
  {
    id: 2,
    name: "UserName",
    location: "XXX",
    winnings: "₹xx Crore",
    image: "path-to-image/ramesh.png", // Update with the correct path
    text: "I won x crore on EXYE & I am very happy. My experience with playing EXYE for the last x years has been amazing. I recommend it very highly to every quiz player.",
  },
  {
    id: 3,
    name: "UserName",
    location: "XXX",
    winnings: "₹xx Crore",
    image: "path-to-image/ramesh.png", // Update with the correct path
    text: "I won x crore on EXYE & I am very happy. My experience with playing EXYE for the last x years has been amazing. I recommend it very highly to every quiz player.",
  },
  {
    id: 4,
    name: "UserName",
    location: "XXX",
    winnings: "₹xx Crore",
    image: "path-to-image/ramesh.png", // Update with the correct path
    text: "I won x crore on EXYE & I am very happy. My experience with playing EXYE for the last x years has been amazing. I recommend it very highly to every quiz player.",
  },
  {
    id: 5,
    name: "UserName",
    location: "XXX",
    winnings: "₹xx Crore",
    image: "path-to-image/ramesh.png", // Update with the correct path
    text: "I won x crore on EXYE & I am very happy. My experience with playing EXYE for the last x years has been amazing. I recommend it very highly to every quiz player.",
  },
  {
    id: 6,
    name: "UserName",
    location: "XXX",
    winnings: "₹xx Crore",
    image: "path-to-image/ramesh.png", // Update with the correct path
    text: "I won x crore on EXYE & I am very happy. My experience with playing EXYE for the last x years has been amazing. I recommend it very highly to every quiz player.",
  },
];


function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const { name, location, winnings, image, text } = testimonials[currentIndex];

  return (
    <div className="bg-[#FEE79B] py-10 px-5">
      <h2 className="text-3xl font-bold text-[#F05A5B] text-center mb-8">Players Love EXYE</h2>
      
      {/* Carousel Section */}
      {!showAll && (
        <div className="flex items-center justify-center gap-4 ">
          <button onClick={handlePrev} className="text-green-600">
            <FaArrowLeft size={30} />
          </button>

          <div className="flex flex-col md:flex-row items-center justify-center max-w-3xl mx-auto bg-[#F05A5B] p-6 border border-gray-300 rounded-lg shadow-lg">
            <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6" />

            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-blue-700">{name}, {location}</h3>
              <p className="text-sm font-semibold text-[#FEE79B]">{`Winnings ${winnings}`}</p>
              <p className="text-gray-700 mt-2">“{text}”</p>
            </div>
          </div>

          <button onClick={handleNext} className="text-green-600">
            <FaArrowRight size={30} />
          </button>
        </div>
      )}

      {/* Button to view all testimonials */}
      <div className="text-center mt-8">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="border border-red-600 text-red-600 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition"
        >
          {showAll ? "Close Testimonials" : "View More Testimonials"}
        </button>
      </div>

      {/* Grid View for all testimonials */}
      {showAll && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, location, winnings, image, text }) => (
            <div key={id} className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg">
              <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover mb-4" />
              <h3 className="text-lg font-semibold text-red-700 text-center">{name}, {location}</h3>
              <p className="text-sm font-semibold text-red-600 text-center">{`Winnings ${winnings}`}</p>
              <p className="text-gray-700 text-center mt-2">“{text}”</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
