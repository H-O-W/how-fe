import React, { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { HiChevronUp } from "react-icons/hi2";

const QuestionBox = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(
    () => {
      // 딱 한번말 실행해야하거나 특정 상태가 바꼈을때
      // 실행되도록 하는 경우에 사용
    },
    [
      // 여기는 의존성 배열 , value
    ]
  );

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
