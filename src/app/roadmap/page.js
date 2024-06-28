"use client";
import DetailDataForm from "../Components/userdata-form/DetailDataForm";
import { useRecoilState } from "recoil";
import roadmapState from "../Store/roadmapState";
import { useState } from "react";
import Step1 from "../Components/userdata-form/Step1";
import Step2 from "../Components/userdata-form/Step2";
import Step3 from "../Components/userdata-form/Step3";
import Step4 from "../Components/userdata-form/Step4";

const RoadMapPage = () => {
  const [existRoadmap, setExistRoadmap] = useRecoilState(roadmapState);
  const [step, setStep] = useState(4);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-white h-screen flex flex-col justify-center items-center pretendard">
      {existRoadmap ? (
        <div></div>
      ) : (
        <div className="min-w-96 ">
          {/* 현재 단계 */}
          <h3 className="text-2xl font-semibold">나만의 로드맵 생성 진행도</h3>
          <div className="p-3 w-full mt-3 mb-6">
            <div className="progress relative h-1 bg-white">
              <div
                className={`absolute left-0 -translate-x-2.5 -translate-y-0.5 -top-full w-5 h-5 shadow-sm shadow-black  border-4 ${
                  step >= 1 ? "bg-blue-500" : "bg-white"
                } border-blue-500  rounded-full z-10 `}
              />

              <div
                className={`successLine left-0 h-full w-1/4 translate-y-0.5 ${
                  step > 1 ? "bg-blue-300" : "bg-gray-200"
                }`}
              />

              <div
                className={`absolute left-1/4 -translate-x-2.5 -translate-y-0.5 -top-full w-5 h-5 shadow-sm shadow-black  border-4 ${
                  step >= 2 ? "bg-blue-500" : "bg-white"
                } border-blue-500 rounded-full  z-10`}
              />

              <div
                className={`successLine left-1/4 h-full w-1/4 translate-y-0.5 ${
                  step > 2 ? "bg-blue-300" : "bg-gray-200"
                }`}
              />

              <div
                className={`absolute left-2/4 -translate-x-2.5 -translate-y-0.5 -top-full w-5 h-5 shadow-sm shadow-black border-4 ${
                  step >= 3 ? "bg-blue-500" : "bg-white"
                } border-blue-500 rounded-full z-10`}
              />

              <div
                className={`successLine left-2/4 h-full w-1/4 translate-y-0.5 ${
                  step > 3 ? "bg-blue-300" : "bg-gray-200"
                }`}
              />

              <div
                className={`absolute left-3/4 -translate-x-2.5 -translate-y-0.5 -top-full w-5 h-5 shadow-sm shadow-black  border-4 ${
                  step >= 4 ? "bg-blue-500" : "bg-white"
                } border-blue-500 rounded-full z-10`}
              />

              <div
                className={`successLine left-3/4 h-full w-1/4 translate-y-0.5 ${
                  step > 4 ? "bg-blue-300" : "bg-gray-200"
                }`}
              />

              <div
                className={`absolute left-full -translate-x-2.5 -translate-y-0.5 -top-full w-5 h-5 shadow-sm shadow-black border-4 ${
                  step >= 5 ? "bg-blue-500" : "bg-white"
                } border-blue-500 rounded-full z-10`}
              />
            </div>
          </div>
          <div>
            <div className="text-xl">{step}단계:</div>
            <div className="">로드맵을 생성하기 위해서는 아래 정보가 필요해요!</div>
          </div>
          {step === 1 && <Step1 onNext={nextStep} />}
          {step === 2 && <Step2 onNext={nextStep} onPrev={prevStep} />}
          {step === 3 && <Step3 onNext={nextStep} onPrev={prevStep} />}
          {step === 4 && <Step4 onPrev={prevStep} onSubmit={handleSubmit} />}
        </div>
      )}
    </section>
  );
};

export default RoadMapPage;
