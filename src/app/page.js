import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-white h-screen flex justify-center items-center">
      <div className="">
        <h1 className="text-2xl">HOW 메인페이지</h1>
        <p>구성요소</p>
        <p>
          - 서비스 소개 - 초기 정보를 갖고 초기 로드맵 보여주기, 로드맵 생성 방법 안내 ( 비로그인
          상태 ){" "}
        </p>
        <p> - 생성된 로드맵 및 진행 상황 안내 ( 로그인 상태 && 로드맵 생성 후 ) </p>{" "}
        <p> - 최신 공지사항 및 뉴스</p>
      </div>
    </section>
  );
}
