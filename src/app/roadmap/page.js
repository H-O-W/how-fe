"use client";

import { useRecoilState } from "recoil";
import roadmapState from "../Store/roadmapState";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Roadmap = () => {
  const [isExistRoadmap, setIsExistRoadmap] = useRecoilState(roadmapState);
  const [second, setSecond] = useState(3);
  const router = useRouter();

  useEffect(() => {
    if (isExistRoadmap) {
      getRoadmap();
    } else {
      const roadmap = createRoadmap();
      if (!roadmap) {
        console.log("로드맵이 없습니다! 잠시 후 생성 페이지로 이동합니다.");
        const moveTimeout = setTimeout(() => {
          router.push("/roadmap/create");
        }, 3200);
        const timeout = setInterval(() => {
          setSecond((prev) => prev - 1);
          if (second === 0) clearInterval(timeout);
        }, 1000);
        return () => {
          clearTimeout(moveTimeout);
          clearInterval(timeout);
        };
      }
    }
  }, [isExistRoadmap]);

  const getRoadmap = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) alert("로그인이 필요한 기능입니다!");
      const response = await axios.get("http://localhost:8080/recommendJobs/get", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const createRoadmap = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) alert("로그인이 필요한 기능입니다!");
      const response = await axios.post(
        "http://localhost:8080/recommendJobs/save",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container min-h-screen flex justify-center items-center text-xl ">
      <div className="bg-gray-200 rounded-lg px-2 py-1">
        {isExistRoadmap
          ? "생성된 로드맵을 조회하는 페이지"
          : `아직 맞춤 추천이 없어요! 잠시 후 생성 페이지로 이동합니다. ${second}`}
      </div>
    </div>
  );
};

export default Roadmap;
