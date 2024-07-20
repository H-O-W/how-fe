"use client";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import roadmapState from "../Store/roadmapState";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building,
  Briefcase,
  DollarSign,
  Clock,
  GraduationCap,
  MapPin,
  Phone,
} from "lucide-react";

const Roadmap = () => {
  const [isExistRoadmap, setIsExistRoadmap] = useRecoilState(roadmapState);
  const [myRoadmap, setMyRoadmap] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (isExistRoadmap) {
      getRoadmap();
    } else {
      console.log("로드맵이 없습니다! 생성페이지로 이동해주세요");
    }
  }, [isExistRoadmap]);

  useEffect(() => {
    getRoadmap();
  }, []);

  const getRoadmap = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) alert("로그인이 필요한 기능입니다!");
      const response = await axios.get("http://localhost:8080/recommendJobs/get", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.data) {
        setMyRoadmap(response.data.companyInfo);
        setIsExistRoadmap(true);
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const CompanyCard = ({ company, index }) => (
    <motion.div
      className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white flex flex-col justify-between"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <Building className="mr-2" />
          {company.data.busplaName}
        </h3>
        <div className="space-y-2">
          <p className="flex items-center">
            <Briefcase className="mr-2" size={18} />
            {company.data.jobNm}
          </p>
          <p className="flex items-center">
            <DollarSign className="mr-2" size={18} />
            {company.data.salary} ({company.data.salaryType})
          </p>
          <p className="flex items-center">
            <Clock className="mr-2" size={18} />
            {company.data.reqCareer}
          </p>
          <p className="flex items-center">
            <GraduationCap className="mr-2" size={18} />
            {company.data.reqEduc}
          </p>
        </div>
      </div>
      <div>
        <div className="bg-white bg-opacity-10 p-4">
          <p className="flex items-center text-sm">
            <MapPin className="mr-2" size={16} />
            {company.data.compAddr}
          </p>
          <p className="flex items-center text-sm mt-2">
            <Phone className="mr-2" size={16} />
            {company.data.cntctNo}
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-4">
          <p className="text-sm font-semibold">모집기간: {company.data.termDate}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="container min-h-screen pt-20 pb-12 mx-auto px-4 ">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        나만을 위한 기업 추천
      </motion.h1>
      {isExistRoadmap ? (
        <section>
          <motion.h2
            className="text-2xl font-semibold mb-6 text-center text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            나의 맞춤 추천 기업{" "}
            <Link
              href={"/roadmap/create"}
              className="absolute right-20 rounded-md px-2 py-1 text-lg bg-blue-700 hover:bg-blue-500 text-white"
            >
              다시 만들기
            </Link>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myRoadmap.map((company, index) => (
              <CompanyCard key={index} company={company} index={index} />
            ))}
          </div>
        </section>
      ) : (
        <motion.section
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl mb-6 text-gray-600">
            아직 맞춤 추천이 없어요! 3분만에 맞춤 기업 추천받기
          </p>
          <Link
            href="/roadmap/create"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            🚩 나만을 위한 기업추천 생성하기
            <ArrowRight className="ml-2" />
          </Link>
        </motion.section>
      )}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          기업 추천은 이렇게 진행됩니다!
        </h2>
        <p className="text-gray-600">
          (여기에 추천 과정에 대한 간단한 설명이나 아이콘을 추가할 수 있습니다.)
        </p>
      </motion.div>
    </div>
  );
};

export default Roadmap;
