import React from "react";
// Import your images here or provide the relative path to the public folder
import matchIcon from "../asset/ball.png";
import teamIcon from "../asset/bat.png";
import contestIcon from "../asset/cash.png";

function EasySteps() {
  return (
    <div className="bg-blue-700 py-12 text-center">
      <h2 className="text-3xl font-bold text-white mb-8">3 Easy Steps</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-white">
          <img src={matchIcon} alt="Select a Match" className="w-20 h-20" />
          <h3 className="text-xl font-semibold mt-4">Select a Match</h3>
          <p className="text-sm mt-2">Select an upcoming match of your choice</p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-white">
          <img src={teamIcon} alt="Create your own team" className="w-20 h-20" />
          <h3 className="text-xl font-semibold mt-4">Create your own team</h3>
          <p className="text-sm mt-2">
            Use your sports knowledge and check player stats on the platform to create a team using 100 credits
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-white">
          <img src={contestIcon} alt="Join Free & Cash Contests" className="w-20 h-20" />
          <h3 className="text-xl font-semibold mt-4">Join Free & Cash Contests</h3>
          <p className="text-sm mt-2">Participate in Cash or Practice Contests.</p>
        </div>
      </div>
    </div>
  );
}

export default EasySteps;
