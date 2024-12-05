import React from "react";
// Import your images here or provide the relative path to the public folder
import matchIcon from "../asset/ball.png";
import teamIcon from "../asset/bat.png";
import contestIcon from "../asset/cash.png";

const steps = [
  {
    icon: teamIcon,
    title: "Choose Your Contest",
    description:
      "Browse a variety of contests, each focusing on topics like history, entertainment, geography, astronomy, science, and more.",
  },
  {
    icon: matchIcon,
    title: "Pay the Entry Fee",
    description: "Join the contest by paying a minimal fee to compete.",
  },
  {
    icon: contestIcon,
    title: "Compete & Win",
    description:
      "Answer questions faster than your opponents. Accuracy and speed are key to climbing the leaderboard and winning the prize money.",
  },
];

function EasySteps() {
  return (
    <div className="bg-[#F05A5B] py-12 text-center">
      <h2 className="text-3xl font-bold text-white lg:mb-8 mb-4">3 Easy Steps</h2>
      <div className="flex flex-col md:flex-row justify-center items-center lg:gap-12 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <img src={step.icon} alt={step.title} className="w-20 h-20" />
            <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
            <p className="text-sm mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EasySteps;
