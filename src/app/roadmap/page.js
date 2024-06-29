"use client";

import { useRecoilState } from "recoil";
import roadmapState from "../Store/roadmapState";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Roadmap = () => {
  const [isExistRoadmap, setIsExistRoadmap] = useRecoilState(roadmapState);
  const router = useRouter();
  useEffect(() => {
    if (isExistRoadmap) {
      
    } else {
      console.log('로드맵이 없습니다! 생성 페이지로 이동...')
      router.push("/roadmap/create");
    }
  }, [isExistRoadmap]);

  return <div>{'생성된 로드맵을 조회하는 페이지'}</div>;
};

export default Roadmap;
