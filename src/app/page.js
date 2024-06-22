"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "./Components/Footer";

export default function Home() {
  const [isHaveRoadmap, setIsHaveRoadmap] = useState(false);

  return (
    <section className="">
      <section class="section top-section">
        <div class="content-container content-theme-dark">
          <div class="content-inner">
            <div class="content-center select-none">
              <h1>나만을 위한 취업 로드맵</h1>
              <p>
                Hope Opportunity Work{" "}
                <a href="http://primitive.kr/" target="_blank">
                  by Primitive
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="page">
        <h1 className="text-7xl">서비스 소개</h1>
        <div className="text-xl">
          <p>하우는 장애인을 위한 나만의 취업 로드맵을 제공하는 서비스입니다.</p>
          <p></p>
        </div>
      </div>
      <div className="page">
        <h1 className="text-7xl">로드맵 미리보기</h1>
        <div className="text-xl">
          <p>하우는 장애인을 위한 나만의 취업 로드맵을 제공하는 서비스입니다.</p>
          <p></p>
        </div>
      </div>
      <div className="page">
        <h1 className="text-2xl ">HOW 메인페이지</h1>
        <p>구성요소</p>
        <p></p>
        <p>서비스 소개</p>
        <p> - 초기 정보를 갖고 초기 로드맵 보여주기, 로드맵 생성 방법 안내 ( 비로그인 상태 )</p>
        <p> - 생성된 로드맵 및 진행 상황 안내 ( 로그인 상태 && 로드맵 생성 후 ) </p>{" "}
        <p> - 최신 공지사항 및 뉴스</p>
        <p> - 스크린 리더를 고려하는 개발이 필요함</p>
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
      <Footer />
    </section>
  );
}
