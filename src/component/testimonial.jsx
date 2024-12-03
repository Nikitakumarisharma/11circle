import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ramesh Singh",
    location: "Ghaziabad, Uttar Pradesh",
    winnings: "₹1 Crore",
    image: "path-to-image/ramesh.png", // Update with the correct path
    text: "I won 1 crore on My11Circle & I am very happy. My experience with playing My11Circle for the last 2 years has been amazing. I recommend it very highly to every sports fantasy player.",
  },
  {
    id: 2,
    name: "Pradip Apte",
    location: "Latur, Maharashtra",
    winnings: "₹1 Crore",
    image: "path-to-image/pradip.png", // Update with the correct path
    text: "I’ve been an avid cricket follower since my childhood. I got to know about My11Circle from a YouTube ad. Recently won 1 Crore on My11Circle! The favourite part about My11Circle app is, it’s easy, secure, and smooth!",
  },
  {
    id: 3,
    name: "Karan Verma",
    location: "Mumbai, Maharashtra",
    winnings: "₹50 Lakh",
    image: "path-to-image/karan.png", // Update with the correct path
    text: "Winning ₹50 Lakh was unbelievable! My11Circle is the best platform for fantasy sports. It’s user-friendly and offers great rewards.",
  },
  {
    id: 4,
    name: "Anjali Sharma",
    location: "Lucknow, Uttar Pradesh",
    winnings: "₹10 Lakh",
    image: "path-to-image/anjali.png", // Update with the correct path
    text: "Thanks to My11Circle, I fulfilled my dream of winning big! The app is smooth, and I love playing on it daily.",
  },
  {
    id: 5,
    name: "Vikram Rathore",
    location: "Jaipur, Rajasthan",
    winnings: "₹25 Lakh",
    image: "path-to-image/vikram.png", // Update with the correct path
    text: "I never imagined I would win ₹25 Lakh. My11Circle has changed my life! I recommend it to everyone who loves sports.",
  },
  {
    id: 6,
    name: "Pooja Mehta",
    location: "Chennai, Tamil Nadu",
    winnings: "₹15 Lakh",
    image: "path-to-image/pooja.png", // Update with the correct path
    text: "My11Circle is a fantastic app. Winning ₹15 Lakh was a dream come true. I can’t wait to play more tournaments!",
  },
  {
    id: 7,
    name: "Rajesh Kumar",
    location: "Bengaluru, Karnataka",
    winnings: "₹75 Lakh",
    image: "path-to-image/rajesh.png", // Update with the correct path
    text: "The thrill of winning ₹75 Lakh is unmatched! My11Circle is the best fantasy app out there.",
  },
  {
    id: 8,
    name: "Sonal Patel",
    location: "Ahmedabad, Gujarat",
    winnings: "₹5 Lakh",
    image: "path-to-image/sonal.png", // Update with the correct path
    text: "My11Circle made me a winner of ₹5 Lakh! The app is incredibly engaging, and I enjoy the competition.",
  },
  {
    id: 9,
    name: "Manoj Jha",
    location: "Patna, Bihar",
    winnings: "₹30 Lakh",
    image: "path-to-image/manoj.png", // Update with the correct path
    text: "Winning ₹30 Lakh on My11Circle was a life-changer. The app is amazing, and I highly recommend it!",
  },
  {
    id: 10,
    name: "Nidhi Chopra",
    location: "Delhi",
    winnings: "₹20 Lakh",
    image: "path-to-image/nidhi.png", // Update with the correct path
    text: "My11Circle is my favorite fantasy app! Winning ₹20 Lakh was thrilling. I love competing with others.",
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
    <div className="bg-white py-10 px-5">
      <h2 className="text-3xl font-bold text-red-700 text-center mb-8">Players Love My11Circle</h2>
      
      {/* Carousel Section */}
      {!showAll && (
        <div className="flex items-center justify-center gap-4">
          <button onClick={handlePrev} className="text-green-600">
            <FaArrowLeft size={30} />
          </button>

          <div className="flex flex-col md:flex-row items-center justify-center max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
            <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6" />

            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-blue-700">{name}, {location}</h3>
              <p className="text-sm font-semibold text-red-600">{`Winnings ${winnings}`}</p>
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
