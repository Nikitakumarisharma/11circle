import { useState } from "react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      title: "Why Fantasy Games?",
      content: "Fantasy games allow players to create virtual teams and compete based on real-life player performances. It's an exciting way to engage with sports and enjoy the thrill of competition.",
    },
    {
      title: "Unique Features of My11Circle",
      content: "My11Circle offers unique features like real-time score updates, smooth gameplay experience, and secure transactions, making it a preferred choice for fantasy sports enthusiasts.",
    },
    {
      title: "Playing Fantasy Cricket & Football is Safe, Secure & Legal",
      content: "Playing fantasy sports is completely legal in India and is protected by the country's laws. My11Circle follows all security protocols to ensure a safe experience.",
    },
  ];

  return (
    <div className=" mx-auto mt-10 lg:p-16 p-10 space-y-4">
      <div className="flex lg:text-[50px] text-[40px] text-blue-800"> Frequently asked question.</div>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center py-4 text-left"
            onClick={() => toggleSection(index)}
          >
            <span className="text-lg font-medium">{item.title}</span>
            <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <p className="px-4 pb-4 text-gray-600">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQSection;
