"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isHaveRoadmap, setIsHaveRoadmap] = useState(false);

  return (
    <section className=" bg-white flex justify-center items-center flex-col ">
      <div className="page bg-primary flex justify-center items-center">
        <h1 className="text-7xl font-bold text-accent1">나만을 위한 취업 로드맵, 하우</h1>
        <p className="text-accent1 text-xl">서비스 소개가 들어갈 듯</p>
      </div>
      <div className="page">
        <h1 className="text-2xl ">HOW 메인페이지</h1>
        <p>구성요소</p>
        <p>
          - 서비스 소개 - 초기 정보를 갖고 초기 로드맵 보여주기, 로드맵 생성 방법 안내 ( 비로그인
          상태 ){" "}
        </p>
        <p> - 생성된 로드맵 및 진행 상황 안내 ( 로그인 상태 && 로드맵 생성 후 ) </p>{" "}
        <p> - 최신 공지사항 및 뉴스</p>
      </div>
      <div className="page bg-secondary1">
        <h1 className="text-4xl ">나의 로드맵</h1>
        <div className="h-96 w-full bg-accent1 overflow-x-scroll inline-flex gap-5">
          <div className="flex justify-center items-center text-4xl  bg-white px-5 py-4 shadow-lg aspect-video m-3 rounded-xl">
            로드맵 1단계
          </div>
          <div className="flex justify-center items-center text-4xl  bg-white px-5 py-4 shadow-lg aspect-video m-3 rounded-xl">
            로드맵 2단계
          </div>
          <div className="flex justify-center items-center text-4xl  bg-white px-5 py-4 shadow-lg aspect-video m-3 rounded-xl">
            로드맵 3단계
          </div>
          <div className="flex justify-center items-center text-4xl  bg-white px-5 py-4 shadow-lg aspect-video m-3 rounded-xl">
            로드맵 4단계
          </div>
          <div className="flex justify-center items-center text-4xl  bg-white px-5 py-4 shadow-lg aspect-video m-3 rounded-xl">
            로드맵 5단계
          </div>
        </div>
      </div>
      <div className="page">
        <h3 className="text-2xl">페이지 이동하기</h3>
        <Link href={"/login"} className="px-4 py-2 bg-black text-white rounded-sm mr-3">
          로그인화면
        </Link>
        <Link href={"/mypage"} className="px-4 py-2 bg-black text-white rounded-sm mr-3">
          마이페이지
        </Link>
        <Link href={"/roadmap"} className="px-4 py-2 bg-black text-white rounded-sm mr-3">
          로드맵 생성 페이지
        </Link>
      </div>
    </section>
  );
}
