import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { HiChevronUp } from "react-icons/hi2";

const QuestionBox = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={onClick} className="py-6 cursor-pointer ">
      <div className="w-full inline-flex justify-between items-center">
        <h3 className="flex-1 text-xl font-semibold">{question}</h3>
        <div className="text-xl">{isOpen ? <HiChevronUp /> : <HiChevronDown />}</div>
      </div>
      {isOpen && (
        <div className="mt-6 py-6 px-6 w-full rounded-xl text-gray-600 bg-gray-50 text-lg">
          {answer}
        </div>
      )}
    </div>
  );
};

export default QuestionBox;
