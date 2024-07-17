"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { jsx, css } from "@emotion/react";
import { LiaSpinnerSolid } from "react-icons/lia";
import axios from "axios";
import { useRecoilState } from "recoil";
import userState from "../Store/userState";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  // 전역 상태 관리
  const navigate = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(userState);
  // 상태관리
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  // UI 상태
  const [loginLoading, setLoginLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  // Effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      const getImageUrl = (width) => {
        if (width <= 640) return "/bg/bg-S.jpg";
        if (width <= 1024) return "/bg/bg-M.jpg";
        if (width <= 1440) return "/bg/bg-L.jpg";
        return "/bg/bg-XL.jpg";
      };

      const loadImage = (src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoaded(true);
        img.onerror = () => {
          console.error("배경 이미지 로드 실패");
          setIsLoaded(true);
        };
      };

      const handleResize = () => {
        const imageUrl = getImageUrl(window.innerWidth);
        loadImage(imageUrl);
      };

      // 초기 로드
      handleResize();

      // 리사이즈 이벤트 리스너 추가
      window.addEventListener("resize", handleResize);

      // 클린업 함수
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 로그인 또는 회원가입 로직을 구현합니다.
    if (isLogin) {
      postLogin();
    } else {
      // 회원가입
      postRegister();
    }
    setLoginLoading(true);
  };

  const toggleAuthMode = () => {
    setError("");
    setIsLogin(!isLogin);
    setLoginLoading(false);
    // 폼 리셋
    setUsername("");
    setPhone("");
    setEmail("");
    setPassword("");
    setPasswordCheck("");
  };

  // HTTP Methods
  const postRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8080/member/signup", {
        email,
        name: username,
        phoneNumber: phone,
        password: password,
      });

      if (response.data.id) {
        setIsLogin(true);
        alert("회원가입이 완료되었습니다. 로그인해주세요.");
      }
    } catch (error) {
      setError("회원가입에 실패했습니다.");
      console.error(error);
    } finally {
      setLoginLoading(false);
    }
  };

  const postLogin = async () => {
    try {
      setError("");
      const response = await axios.post("http://localhost:8080/member/login", {
        email,
        password,
      });

      console.log(response);

      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        setIsLoggedIn(true);
        navigate.push("/");
      } else {
        setError("로그인 실패");
      }
    } catch (error) {
      setError("로그인 실패");
      console.error(error);
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div
      className={`relative LoginPage flex items-center justify-center min-h-screen ${
        isLoaded && "loaded"
      }`}
      onLoad={() => setIsLoaded(true)}
    >
      {!isLoaded && (
        <div className="absolute w-screen h-screen">
          <div className="spinner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="w-24 h-24 text-emerald-950 origin-center  animate-spin"
            >
              <path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"></path>
            </svg>
          </div>
        </div>
      )}
      <div className="relative w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl">
        <div className="absolute inset-0 bg-gray-400 bg-opacity-0 backdrop-filter backdrop-blur-sm rounded-3xl" />
        <div className="relative z-10 ">
          <h1 className="mb-8 text-3xl font-bold text-center text-white">
            {isLogin ? "로그인" : "회원가입"}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                <div className="flex items-center space-x-2  border-white border-opacity-50">
                  <HiMiniUserCircle className="text-white" size={24} />
                  <input
                    className="w-full px-3 py-2 bg-transparent text-white placeholder-white placeholder-opacity-70 focus:outline-none"
                    type="text"
                    placeholder="이름"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2  border-white border-opacity-50">
                  <HiPhone className="text-white" size={24} />
                  <input
                    className="w-full px-3 py-2 bg-transparent text-white placeholder-white placeholder-opacity-70 focus:outline-none"
                    type="tel"
                    placeholder="전화번호"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </>
            )}
            <div className="flex items-center space-x-2  border-white border-opacity-50">
              <HiOutlineMail className="text-white" size={24} />
              <input
                className="w-full px-3 py-2 bg-transparent text-white placeholder-white placeholder-opacity-70 focus:outline-none"
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2  border-white border-opacity-50">
              <HiLockClosed className="text-white" size={24} />
              <input
                className="w-full px-3 py-2 bg-transparent text-white placeholder-white placeholder-opacity-70 focus:outline-none"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {!isLogin && (
              <div className="flex items-center space-x-2  border-white border-opacity-50">
                <HiLockClosed className="text-white" size={24} />
                <input
                  className="w-full px-3 py-2 bg-transparent text-white placeholder-white placeholder-opacity-70 focus:outline-none"
                  type="password"
                  placeholder="비밀번호 확인"
                  value={passwordCheck}
                  onChange={(e) => setPasswordCheck(e.target.value)}
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full px-4 py-3 text-lg font-semibold text-white bg-gradient-to-r from-emerald-400 to-green-400 rounded-full hover:from-emerald-500 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              {loginLoading ? (
                <LiaSpinnerSolid className="animate-spin h-7 mx-auto text-2xl" />
              ) : isLogin ? (
                "로그인"
              ) : (
                "회원가입"
              )}
            </button>
          </form>

          <div className="mt-8 text-sm text-center text-white">
            <p>
              {isLogin ? "회원이 아니신가요?" : "이미 회원이신가요?"}
              <button
                onClick={toggleAuthMode}
                className="ml-2 font-bold text-emerald-300 hover:text-purple-200 focus:outline-none"
              >
                {isLogin ? "회원가입" : "로그인"}
              </button>
            </p>
          </div>
          {error && <div className="my-0 p-2 text-right text-sm text-red-400">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
