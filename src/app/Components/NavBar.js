"use client";
import { useRouter } from "next/navigation";
import { HiBars4 } from "react-icons/hi2";
import { useRecoilState } from "recoil";
import userState from "../Store/userState";
import Link from "next/link";
import { useEffect } from "react";

const NavBar = () => {
  const navigate = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(userState);
  useEffect(() => {
    if (!isLoggedIn) {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <nav className="w-full fixed top-0 z-50 inline-flex justify-between items-center p-5 gap-3 text-lg">
      <Link href={"/"} className="text-xl">
        HOW
      </Link>
      <ul className="inline-flex gap-3">
        <li onClick={() => navigate.push("/")} aria-label="메인 페이지로 이동">
          소개
        </li>
        <li onClick={() => navigate.push("/roadmap")} aria-label="직업추천 페이지로 이동">
          직업추천
        </li>
        <li onClick={() => navigate.push("/community")} aria-label="커뮤니티 페이지로 이동">
          커뮤니티
        </li>
        <li onClick={() => navigate.push("/faq")} aria-label="고객센터 페이지로 이동">
          고객센터
        </li>
        {isLoggedIn ? (
          <li onClick={() => navigate.push("/mypage")} aria-label="마이페이지로 이동">
            마이페이지
          </li>
        ) : (
          <li onClick={() => navigate.push("/login")} aria-label="로그인 페이지로 이동">
            로그인
          </li>
        )}
      </ul>
    </nav>
  );
};
export default NavBar;
