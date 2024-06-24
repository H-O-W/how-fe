"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

const LoginPage = () => {
  // 상태관리
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  // UI 상태
  const [isLogin, setIsLogin] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (imageUrl) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
      });
    };

    const loadBackgroundImage = async () => {
      try {
        const imageUrl = getBackgroundImageUrl();
        await loadImage(imageUrl);
        setIsLoaded(true);
      } catch (error) {
        console.error("배경 이미지 로딩 실패:", error);
        setIsLoaded(true); // 에러 발생 시에도 로딩 화면 제거
      }
    };

    loadBackgroundImage();
  }, []);

  const getBackgroundImageUrl = () => {
    // 화면 크기에 따라 다른 이미지 URL 반환
    if (window.innerWidth >= 1440) return "../bg/bg-XL.jpg";
    if (window.innerWidth >= 1024) return "../bg/bg-L.jpg";
    if (window.innerWidth >= 768) return "../bg/bg-M.jpg";
    return "../bg/bg-S.jpg";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 로그인 또는 회원가입 로직을 구현합니다.
    console.log("Form submitted", { username, phone, email, password, passwordCheck });
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    // 폼 리셋
    setUsername("");
    setPhone("");
    setEmail("");
    setPassword("");
    setPasswordCheck("");
  };

  return (
    <div
      style={{ backgroundImage: `url(${getBackgroundImageUrl()})` }}
      className={`relative LoginPage flex items-center justify-center min-h-screen ${
        isLoaded && "loaded"
      }`}
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
              {isLogin ? "로그인" : "회원가입"}
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
