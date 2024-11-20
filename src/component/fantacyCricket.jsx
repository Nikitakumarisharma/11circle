import React from "react";
import appImage from "../asset/dkvk.avif"; // Update the path to your app image

function FantasyCricket() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white py-10 px-5 md:px-20">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Play Fantasy Cricket on My11Circle App
        </h1>
        <p className="text-gray-700 mb-4">
          Want to enjoy fantasy games like cricket but just can't manage the time? Well, My11Circle.com is the answer you need. This is the place where your favorite fantasy sports come alive. Enjoy playing fantasy cricket, fantasy football, and fantasy kabaddi right on your device. Pick teams of your choice and play the game.
        </p>
        <p className="text-gray-700 mb-4">
          My11Circle.com, a part of Games24x7, brings the best fantasy games at your fingertips. It is committed to offering the same gameplay experience as RummyCircle, India's largest rummy platform with 10+ Million players. Register with us, pick a game and win cash daily. Don't wait further. Join us now and enjoy the fantasy games.
        </p>
        <p className="text-gray-700 mb-6">
          Fantasy cricket and football or any fantasy games in general boost your skill and let you win real cash rewards. We offer a safe and secured platform to enjoy online fantasy sports at your leisure. Get started with the game right away and join India's fastest growing online fantasy cricket app and experience the real action and thrill.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
          Today's Match Preview
        </button>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img src={appImage} alt="My11Circle App" className="w-full max-w-xs md:max-w-md" />
      </div>

    </div>
  );
}

export default FantasyCricket;
