"use client";
import DetailDataForm from "../Components/DetailDataForm";
import { useRecoilState } from "recoil";
import roadmapState from "../Store/roadmapState";
useState;

const RoadMapPage = () => {
  const [existRoadmap, setExistRoadmap] = useRecoilState(roadmapState);
  const [createStep, setCreateStep] = useState(1);

  return (
    <section className="bg-white h-screen flex flex-col justify-center items-center">
      {existRoadmap ? (
        <div></div>
      ) : (
        <>
          {/* 현재 단계 */}
          <div>1단계: </div>
          <div>
            <div className="text-xl">{1}단계</div>
            <div className="text-xl">로드맵을 생성하기 위해서는 아래 정보가 필요해요</div>
          </div>
          <DetailDataForm />
        </>
      )}
    </section>
  );
};

export default RoadMapPage;
