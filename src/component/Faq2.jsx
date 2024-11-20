import React, { useState } from 'react';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('cricket');
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = {
    cricket: [
      {
        question: 'What is Fantasy Cricket?',
        answer: 'Fantasy Cricket is a game of skill where players create a virtual team of real cricket players to compete in a match.'
      },
      {
        question: 'How to Download the Fantasy Cricket App?',
        answer: 'You can download the Fantasy Cricket App from the official website or your app store, following the on-screen instructions.'
      },
      {
        question: 'Play Daily Fantasy Cricket Tournaments & Win Real Cash on My11Circle',
        answer: 'My11Circle offers daily fantasy cricket tournaments where you can create your team and compete to win cash prizes.'
      },
      {
        question: 'Benefits of Playing Fantasy Sports on My11Circle App',
        answer: 'My11Circle provides a safe platform for playing fantasy sports, offering rewards, bonuses, and the thrill of competition.'
      },
    ],
    football: [
      {
        question: 'What is Fantasy Football?',
        answer: 'Fantasy Football lets users create a virtual team of real football players, and they score points based on the players’ performances in actual games.'
      },
      {
        question: 'Daily Fantasy Football on My11Circle',
        answer: 'Compete in daily fantasy football tournaments on My11Circle to showcase your knowledge and win real money.'
      },
      {
        question: 'What will you get when you download My11Circle app for fantasy football?',
        answer: 'The My11Circle app offers a smooth experience for fantasy football with secure transactions, easy withdrawals, and bonus opportunities.'
      },
    ]
  };

  return (
    <div className="p-6 sm:p-10 lg:p-16 mx-auto max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 border-b-2 border-gray-200">
        <button
          onClick={() => setActiveTab('cricket')}
          className={`py-2 sm:px-8 md:px-16 font-semibold ${activeTab === 'cricket' ? 'text-blue-800 border-b-2 border-blue-800' : 'text-gray-600'} `}
        >
          CRICKET
        </button>
        <button
          onClick={() => setActiveTab('football')}
          className={`py-2 sm:px-8 md:px-16 font-semibold ${activeTab === 'football' ? 'text-blue-800 border-b-2 border-blue-800' : 'text-gray-600'}`}
        >
          FOOTBALL
        </button>
      </div>
      
      <div className="mt-4">
        {faqData[activeTab].map((item, index) => (
          <div key={index} className="border-b-2 border-gray-100">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left py-4 px-4 sm:px-6 flex justify-between items-center text-gray-800 font-medium bg-gray-200 rounded-lg"
            >
              {item.question}
              <span>{openQuestion === index ? '▲' : '▼'}</span>
            </button>
            {openQuestion === index && (
              <div className="px-4 sm:px-6 pb-4 text-gray-600 bg-gray-100 rounded-lg">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
