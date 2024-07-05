"use client";
import React, { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { HiChevronUp } from "react-icons/hi2";
import QuestionBox from "../Components/QuestionBox";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const CustomerService = () => {
  const [activeTab, setActiveTab] = useState("inquiries");
  const pathname = usePathname();

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
          <h2 className="font-semibold">자주 묻는 질문</h2>
        </Link>
        <Link href={"/notice"}>
          <h2 className="font-semibold text-gray-400">공지사항</h2>
        </Link>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-extrabold">자주 묻는 질문</h2>
        <div className="mt-5 mb-6 flex gap-2 text-xl font-semibold cursor-pointer">
          <span className="text-emerald-500 hover:text-emerald-500">전체</span>
          <span className="text-gray-500 hover:text-emerald-500">로드맵</span>
          <span className="text-gray-500 hover:text-emerald-500">관리</span>
        </div>
        <div className="mt-6 border-t">
          <QuestionBox
            question={"로드맵이 생성이 안돼요!"}
            answer={
              "로드맵을 생성하기 위해서는 정확한 정보가 필요합니다. 모든 정보가 올바르게 입력되었는지 다시 한번 확인해주세요. 만약 같은 문제가 계속될 경우에는 고객센터로 문의를 부탁드립니다."
            }
          />
          <QuestionBox question={"경력이 없어도 가능한가요?"} answer={"Why are you running!!"} />
          <QuestionBox question={"Why are you running?"} answer={"Why are you running!!"} />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
