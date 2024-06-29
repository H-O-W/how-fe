'use client' 
import React, { useState } from "react";

const CustomerService = () => {
  const [activeTab, setActiveTab] = useState("inquiries");

  const tabContent = {
    inquiries: {
      title: "고객문의",
      description: "문의사항을 남겨주시면 빠른 시일 내에 답변 드리겠습니다.",
      icon: "💬",
      content: "여기에 고객문의 폼이나 FAQ 목록이 들어갈 수 있습니다.",
    },
    learningData: {
      title: "학습데이터",
      description: "HOW 서비스의 학습 데이터를 확인하세요.",
      icon: "📚",
      content: "여기에 학습 데이터 목록이나 관련 정보가 표시됩니다.",
    },
    announcements: {
      title: "공지사항",
      description: "HOW 서비스의 최신 소식을 확인하세요.",
      icon: "🔔",
      content: "여기에 공지사항 목록이 표시됩니다.",
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-black mb-6">고객센터</h1>
      <div className="mb-4">
        <ul className="flex border-b border-gray-200">
          {Object.keys(tabContent).map((key) => (
            <li key={key} className="-mb-px mr-1">
              <button
                className={`bg-white inline-block py-2 px-4 font-semibold ${
                  activeTab === key
                    ? "border-l border-t border-r rounded-t text-black border-gray-200"
                    : "text-gray-500 hover:text-black"
                }`}
                onClick={() => setActiveTab(key)}
              >
                {tabContent[key].title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white border border-gray-200 rounded-b p-4">
        <div className="flex items-center mb-2">
          <span className="text-2xl mr-2">{tabContent[activeTab].icon}</span>
          <h2 className="text-xl font-semibold text-black">{tabContent[activeTab].title}</h2>
        </div>
        <p className="text-gray-600 mb-4">{tabContent[activeTab].description}</p>
        <div className="bg-gray-50 p-4 rounded">{tabContent[activeTab].content}</div>
      </div>
    </div>
  );
};

export default CustomerService;
