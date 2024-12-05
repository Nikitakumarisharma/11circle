import React from "react";
import crousal1 from "../asset/crousal1.png"


function FantasyCricket() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#FEE79B] py-10 px-5 md:px-20">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="lg:text-3xl text-2xl md:text-4xl font-bold text-[#F05A5B] mb-6">
          Exye: The Ultimate Online Quiz Gaming App
        </h1>
        <p className="text-gray-700 mb-4">
          Exye is an exciting online quiz gaming platform where knowledge reigns
          supreme, and luck takes a backseat. Dive into engaging contests across
          a wide range of topics, including history, entertainment, geography,
          astronomy, and science. <br></br>Simply pick a contest that interests you, pay
          the entry fee, and compete with other participants to be the quickest
          to answer correctly and claim the prize money. With fresh questions
          added every hour, Exye ensures a dynamic and ever-evolving gaming
          experience.<br></br> Whether you're a trivia enthusiast or a casual player,
          there's always a new challenge waiting for you. And the best part? You
          can withdraw your winnings anytime, giving you complete control over
          your rewards.<br></br> Ready to showcase your wisdom and earn exciting prizes?
          Join Exye now and let the games begin!
        </p>
        {/* <p className="text-gray-700 mb-4">
          EXYE.com, a part of Games24x7, brings the best fantasy games at your fingertips. It is committed to offering the same gameplay experience as RummyCircle, India's largest rummy platform with 10+ Million players. Register with us, pick a game and win cash daily. Don't wait further. Join us now and enjoy the fantasy games.
        </p>
        <p className="text-gray-700 mb-6">
          Fantasy cricket and football or any fantasy games in general boost your skill and let you win real cash rewards. We offer a safe and secured platform to enjoy online fantasy sports at your leisure. Get started with the game right away and join India's fastest growing online fantasy cricket app and experience the real action and thrill.
        </p> */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
          Today's Match Preview
        </button>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={crousal1}
          alt="EXYE App"
          className="w-full max-w-xs md:max-w-md"
        />
      </div>
    </div>
  );
}

export default FantasyCricket;
