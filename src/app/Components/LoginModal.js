"use client";

import { useState } from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

const LoginModal = ({ closeModal }) => {
  // 상태관리
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  // UI 상태
  const [isLogin, setIsLogin] = useState(true);

  const handleOverlayClick = () => {
    closeModal();
  };

  const formChange = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div className="login-modal relative px-16 py-20 bg-secondary2 shadow-xl rounded-xl min-w-72 min-h-96">
        <div
          className="absolute top-5 right-5 flex items-center cursor-pointer"
          onClick={handleOverlayClick}
        >
          <span>닫기</span>
          <HiOutlineX size={20} />
        </div>
        <h3 className="py-3 text-3xl font-bold text-center">로그인</h3>
        <form className="flex flex-col gap-3 text-lg">
          {!isLogin && (
            <div className="inline-flex items-center bg-transparent gap-1 px-2 py-1.5 border-b-2 border-black">
              <HiMiniUserCircle size={24} />
              <input
                className="px-3 py-1.5"
                type="text"
                placeholder="이름"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          {!isLogin && (
            <div className="inline-flex items-center bg-transparent gap-1 px-2 py-1.5 border-b-2 border-black">
              <HiPhone size={24} />
              <input
                className="px-3 py-1.5"
                type="tel"
                placeholder="전화번호"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          )}
          <div className="inline-flex items-center bg-transparent gap-1 px-2 py-1.5 border-b-2 border-black">
            <HiOutlineMail size={24} />
            <input
              className="px-3 py-1.5"
              type="email"
              placeholder="이메일"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inline-flex items-center bg-transparent gap-1 px-2 py-1.5 border-b-2 border-black">
            <HiLockClosed size={24} />
            <input
              className="px-3 py-1.5"
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {!isLogin && (
            <div className="inline-flex items-center bg-transparent gap-1 px-2 py-1.5 border-b-2 border-black">
              <HiLockClosed size={24} />
              <input
                className="px-3 py-1.5"
                type="password"
                placeholder="비밀번호 확인"
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
            </div>
          )}
          <button className="px-3 py-1.5 bg-black text-white">
            {isLogin ? "로그인" : "회원가입"}
          </button>
          <div className="text-sm text-right">
            {isLogin ? (
              <p>
                회원이 아니신가요?{" "}
                <span onClick={() => setIsLogin(!isLogin)} className="font-bold cursor-pointer">
                  회원가입
                </span>
                하기
              </p>
            ) : (
              <p>
                회원이신가요?{" "}
                <span onClick={() => setIsLogin(!isLogin)} className="font-bold cursor-pointer">
                  로그인
                </span>
                하기
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
