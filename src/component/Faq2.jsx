import { useState } from "react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      title: "History",
      content: "Test your knowledge of past events, civilizations, and historical figures.",
    },
    {
      title: "Entertainment",
      content: "Dive into the world of movies, music, and pop culture trivia.",
  },
  ];

  return (
    <div className=" mx-auto lg:p-16 p-10 lg:space-y-4 space-y-1">
      <div className="flex lg:text-[50px] text-[30px] text-[#F05A5B] font-medium"> Topics You will be Playing in.</div>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center py-4 text-left"
            onClick={() => toggleSection(index)}
          >
            <span className="text-md font-semibold">{item.title}</span>
            <span className="text-2xl">{openIndex === index ? "↑" : "⬇"}</span>
          </button>
          {openIndex === index && (
            <p className="px-4 pb-4 text-gray-600 text-[15px]">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQSection;
