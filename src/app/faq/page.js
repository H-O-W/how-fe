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
          {/* <span className="text-gray-500 hover:text-emerald-500">로드맵</span>
          <span className="text-gray-500 hover:text-emerald-500">관리</span> */}
        </div>
        <div className="mt-6 border-t">
          <QuestionBox
            question={"기업 추천 생성이 안돼요!"}
            answer={
              "직업추천을 생성하기 위해서는 정확한 정보가 필요합니다. 모든 정보가 올바르게 입력되었는지 다시 한번 확인해주세요. 만약 같은 문제가 계속될 경우에는 고객센터로 문의를 부탁드립니다."
            }
          />
          <QuestionBox
            question={"경력이 없어도 가능한가요?"}
            answer={"네, 경력이 없어도 기업추천을 생성하실 수 있습니다."}
          />
          <QuestionBox
            question={"커뮤니티는 어떻게 사용하나요?"}
            answer={
              "회원가입 후 로그인을 하면 커뮤니티에서 글을 작성하고 댓글을 작성할 수 있습니다."
            }
          />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
