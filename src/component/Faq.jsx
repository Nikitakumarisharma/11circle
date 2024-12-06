import { useState } from "react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      title: "What Makes EXYE Unique?",
      content:
        "EXYE is a quiz gaming platform that rewards knowledge and speed. With constantly updated questions, flexible withdrawals, and diverse topics, it ensures a dynamic gaming experience.",
    },
    {
      title: "How Do I Compete on EXYE?",
      content:
        "To compete on EXYE, select a contest, pay the entry fee, and answer questions faster than your opponents. Accuracy and speed are key to winning prize money.",
    },
    {
      title: "Can I Withdraw My Winnings Anytime?",
      content:
        "Yes, EXYE allows you to withdraw your winnings anytime without hidden fees or waiting, ensuring complete control over your rewards.",
    },
    {
      title: "What Topics Are Covered on EXYE?",
      content:
        "EXYE features a variety of topics, including history, entertainment, geography, astronomy, science, and more, making it suitable for all trivia enthusiasts.",
    },
  ];

  return (
    <div id="Faq" className=" mx-auto lg:p-16 p-10 space-y-4 bg-[#F05A5B]">
      <div className="flex lg:text-[50px] text-[30px] text-[#FEE79B] font-medium"> Frequently asked question.</div>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center py-4 text-left"
            onClick={() => toggleSection(index)}
          >
            <span className="text-md">{item.title}</span>
            <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <p className="px-4 pb-4 text-[#FEE79B] text-[15px]">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQSection;
