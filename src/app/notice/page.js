"use client";
import React, { useState, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { HiChevronUp } from "react-icons/hi2";
import QuestionBox from "../Components/QuestionBox";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NoticeBox from "../Components/NoticeBox";

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
    <div className="container mx-auto p-4 flex gap-2 pt-24 mt-16">
      <div className="w-48 text-xl flex flex-col gap-6">
        <Link href={"/faq"}>
          <h2 className={`font-semibold text-gray-400`}>자주 묻는 질문</h2>
        </Link>
        <Link href={"/notice"}>
          <h2 className={`font-semibold `}>공지사항</h2>
        </Link>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-extrabold">공지사항</h2>
        <div className="mt-5 mb-6 flex gap-2 text-xl font-semibold cursor-pointer">
          <span className="text-red-500 hover:text-red-500">전체</span>
          <span className="text-gray-500 hover:text-red-500">학습데이터</span>
        </div>
        <div className="mt-6 border-t">
          <NoticeBox
            title={"1차 학습데이터 고지"}
            content={`학습에 사용된 데이터
    1. 한국장애인고용공단 직업훈련 정보
    2. 한국고용정보원_일자리정책_관리목록
    3. 한국장애인고용공 장애 구인 실시간 현황
    4. 한국장애인고용공단 장애인 표준사업장
    5. 사람인 채용 공고 api
    6. 워크넷 채용 공고 api`}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
