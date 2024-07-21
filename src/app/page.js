"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import roadmapState from "./Store/roadmapState";
import Footer from "./Components/Footer";
import image1 from "../Images/recommend.jpg";
import image2 from "../Images/road.jpg";
import image3 from "../Images/news.jpg";
import { MessageCircle, Users, BookOpen } from "lucide-react";

const MotionLink = motion(Link);

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const images = [image1, image2, image3];

export default function Home() {
  const [isHaveRoadmap] = useRecoilState(roadmapState);

  return (
    <motion.section initial="initial" animate="animate" className="min-h-screen flex flex-col">
      <motion.div
        className="bg-gradient-to-l from-green-400 to-emerald-700 text-white py-20 px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            variants={fadeInUp}
          >
            HOW
          </motion.h1>
          <motion.p className="text-lg sm:text-xl md:text-2xl mb-8" variants={fadeInUp}>
            장애인을 위한 나만의 기업 추천, 하우와 함께
          </motion.p>
          <motion.div variants={fadeInUp}>
            <MotionLink
              href="/roadmap"
              className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-500 hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              지금 시작하기
            </MotionLink>
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" variants={stagger}>
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-3xl font-extrabold text-gray-900 mb-8" variants={fadeInUp}>
            HOW 서비스 소개
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" variants={stagger}>
            {[
              { title: "취업 로드맵", desc: "장애인 대상으로 AI 기반 취업 로드맵을 제공합니다." },
              {
                title: "취업 커뮤니티",
                desc: "취업에 관한 정보를 얻을 수 있는 커뮤니티를 운영합니다.",
              },
              { title: "취업 관련 뉴스", desc: "취업 관련 뉴스를 놓치지 않고 읽어볼 수 있습니다." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeInUp}
              >
                <Image
                  src={images[index]}
                  alt={`서비스 소개${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-4">내 로드맵 보기</h2>
            {isHaveRoadmap ? (
              <>
                <p className="text-xl mb-3">로드맵이 준비되었습니다. 확인해 보세요!</p>
                <Link
                  className="px-4 py-1 bg-emerald-950 text-white rounded-md text-xl shadow hover:shadow-lg hover:bg-emerald-700 hover:scale-110 transition"
                  href={"/roadmap"}
                >
                  보러가기
                </Link>
              </>
            ) : (
              <div className="text-xl">
                <p className="mb-4">아직 로드맵이 만들어지지 않은 상태에요</p>
                <MotionLink
                  href="/roadmap"
                  className="inline-block px-6 py-3 bg-emerald-500 text-white rounded-md hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  로드맵 만들기
                </MotionLink>
              </div>
            )}
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8">커뮤니티 기능</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <MessageCircle size={48} className="text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">실시간 채팅</h3>
                <p>다른 구직자들과 실시간으로 정보를 교환하고 소통하세요.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users size={48} className="text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">그룹 멘토링</h3>
                <p>경험 많은 멘토들과 함께 그룹 멘토링에 참여해보세요.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BookOpen size={48} className="text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">스터디 그룹</h3>
                <p>관심사가 비슷한 사람들과 함께 스터디 그룹을 만들어 학습해보세요.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </motion.section>
  );
}
