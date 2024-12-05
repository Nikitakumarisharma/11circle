// StatsSection.js
import React from "react";
import { FaStar, FaUsers, FaRupeeSign } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      icon: <FaStar className="text-4xl text-yellow-500" />,
      value: "XX OUT OF 5",
      label: "USER RATING",
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      value: "2k+",
      label: "TOTAL USERS",
    },
    {
      icon: <FaRupeeSign className="text-4xl text-green-500" />,
      value: "₹ UPTO 2CR",
      label: "PRIZES WON",
    },
  ];

  return (
    <div className="bg-[#FEE79B]  p-8 flex justify-center lg:space-x-12 space-x-2">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="border-2 border-gray-300 p-4 rounded-md inline-block">
            {stat.icon}
          </div>
          <p className="mt-2 text-[13px] text-gray-600">{stat.value}</p>
          <p className="font-bold text-gray-800">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
