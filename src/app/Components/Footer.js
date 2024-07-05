import React from "react";
import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-1">
          {/* 회사 정보 및 간단한 설명 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">HOW</h3>
            <p className="text-sm">
              AI 기술을 활용하여 장애인에게 맞춤형 취업 로드맵을 제공하는 혁신적인 서비스입니다.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">빠른 링크</h4>
            <ul className="text-sm">
              <li className="mb-1">
                <Link href="/" className="hover:text-gray-300">
                  홈
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/roadmap" className="hover:text-gray-300">
                  로드맵 생성
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/contact" className="hover:text-gray-300">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 정보 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">연락처 📞</h4>
            <p className="text-sm mb-1">이메일: info@aijobmap.com</p>
            <p className="text-sm mb-1">전화: 02-1234-5678</p>
            <p className="text-sm mb-1">주소: 서울특별시 강남구 AI로 123</p>
          </div>

          {/* 소셜 미디어 링크 */}
          <div className="w-full md:w-1/6">
            <h4 className="text-lg font-semibold mb-2">팔로우</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/primitive_knu/"
                referrerPolicy="no-referrer"
                target="_blank"
                className="text-white hover:text-gray-300"
              >
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* 저작권 정보 */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
          © {new Date().getFullYear()} AI 취업 로드맵 HOW. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
