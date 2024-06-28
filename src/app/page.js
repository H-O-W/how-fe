"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "./Components/Footer";
import image from "../../public/bg/bg-M.jpg";
import MainBanner from "./Components/MainBanner";

export default function Home() {
  const [isHaveRoadmap, setIsHaveRoadmap] = useState(false);

  return (
    <section className="h-screen ">
      <MainBanner />
      <div className="p-10 maxWidth">
        <h1 className="text-4xl">HOW TO HOW</h1>
        <div className="text-xl">
          <p>하우는 장애인을 위한 나만의 취업 로드맵을 제공하는 서비스입니다.</p>
        </div>
        <div className={"info-wrapper inline-flex items-center p-3 gap-2"}>
          <div>
            <Image src={image} alt="서비스 소개1" width={400} height={300} />
            <h4>취업 로드맵</h4>
            <p>장애인 대상으로 AI 기반 취업 로드맵을 제공합니다.</p>
          </div>
          <div>
            <Image src={image} alt="서비스 소개2" width={400} height={300} />
            <h4>로드맵 진행상황 추적</h4>
            <p>생성된 로드맵을 진행하면서 진행상황을 추적합니다.</p>
          </div>
          <div>
            <Image src={image} alt="서비스 소개3" width={400} height={300} />
            <h4>취업 관련 뉴스</h4>
            <p>취업 관련 뉴스를 놓치지 않고 읽어볼 수 있습니다.</p>
          </div>
        </div>
      </div>
      <div className="maxWidth">
        <h1 className="text-5xl">내 로드맵 보기</h1>
        <div className="text-xl flex flex-col justify-start">
          <p>아직 로드맵이 만들어지지 않은 상태에요</p>
          <Link href={"/roadmap"} className="p-2 mt-4 bg-blue-300 rounded-md">
            로드맵 만들기
          </Link>
        </div>
      </div>
      <div className="maxWidth">
        <h1 className="text-2xl ">HOW 메인페이지</h1>
        <p>구성요소</p>
        <p></p>
        <p>서비스 소개</p>
        <p> - 초기 정보를 갖고 초기 로드맵 보여주기, 로드맵 생성 방법 안내 ( 비로그인 상태 )</p>
        <p> - 생성된 로드맵 및 진행 상황 안내 ( 로그인 상태 && 로드맵 생성 후 ) </p>{" "}
        <p> - 최신 공지사항 및 뉴스</p>
        <p> - 스크린 리더를 고려하는 개발이 필요함</p>
      </div>
      <Footer />
    </section>
  );
}
