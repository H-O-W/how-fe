"use client";
import DetailDataForm from "../../Components/userdata-form/DetailDataForm";
import { useRecoilState } from "recoil";
import roadmapState from "../../Store/roadmapState";
import { useEffect, useState } from "react";
import Step1 from "../../Components/userdata-form/Step1";
import Step2 from "../../Components/userdata-form/Step2";
import Step3 from "../../Components/userdata-form/Step3";
import Step4 from "../../Components/userdata-form/Step4";
import {
  currentStepState,
  step1State,
  step2State,
  step3State,
  step4State,
} from "../../Store/roadmapFormState";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const RoadMapPage = () => {
  const [existRoadmap, setExistRoadmap] = useRecoilState(roadmapState);
  const [step, setStep] = useRecoilState(currentStepState);
  const [step1Data, setStep1Data] = useRecoilState(step1State);
  const [step2Data, setStep2Data] = useRecoilState(step2State);
  const [step3Data, setStep3Data] = useRecoilState(step3State);
  const [step4Data, setStep4Data] = useRecoilState(step4State);
  const [isCompleteToCreate, setIsCompleteToCreate] = useState(false);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const createMemberDetailForm = async (step1Data, step2Data, step3Data, step4Data) => {
    try {
      // MemberDetailFormDTO에 맞게 데이터 구조화
      const memberDetailForm = {
        age: parseInt(step1Data.age),
        bothHands: step2Data.bothHands.value,
        eyesight: step2Data.eyesight.value,
        handwork: step2Data.handwork.value,
        liftPower: step3Data.liftPower,
        lstnTalk: step3Data.lstnTalk,
        stndWalk: step3Data.stndWalk,
        jobNm: step1Data.preferredJob,
        career: step4Data.career,
        education: step1Data.education,
        location: step1Data.region,
        licenses: step4Data.licenses,
      };

      console.table(memberDetailForm);

      // API 호출
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/memberDetail`,
        memberDetailForm,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("유저디테일 응답:", response);
      return response.data;
    } catch (error) {
      console.error("유저디테일 중 오류 발생:", error);
      throw error;
    }
  };
  const createRoadmap = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        alert("로그인이 필요한 기능입니다!");
        return;
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/recommendJobs/save`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("직업추천 생성결과", response);

      if (response.data) {
        setIsCompleteToCreate(true);
        setExistRoadmap(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  // 사용 예시
  const handleSubmit = async () => {
    try {
      const result = await createMemberDetailForm(step1Data, step2Data, step3Data, step4Data);
      // 결과 처리
      // setExistRoadmap(true); // 로드맵이 생성되었다고 가정
      if (result) {
        createRoadmap();
      }
    } catch (error) {
      // 오류 처리
      console.error("로드맵 생성 중 오류:", error);
    }
  };

  useEffect(() => {
    if (step === 5) {
      if (step1Data && step2Data && step3Data && step4Data) {
        handleSubmit();
      } else {
        console.error("직업추천을 위한 데이터가 부족합니다.");
        setStep(1);
      }
    }

    // return () => {
    //   setStep(1);
    // };
  }, [step]);

  // 예시 데이터
  const ex = {
    detailId: "1",
    age: 30,
    bothHands: "BOTH_HANDS",
    eyesight: "NORMAL_ACTIVITY",
    handwork: "PRECISION_WORK",
    liftPower: "UNDER_5KG",
    lstnTalk: "NO_DIFFICULTY",
    stndWalk: "SOME_STANDING",
    jobNm: "서비스",
    career: "5년",
    educ: "대졸",
    location: "인천",
    licenses: ["자격증1", "자격증2"],
  };

  return (
    <section className="bg-white h-screen flex flex-col items-center pretendard pt-32">
      {
        <div className="min-w-96 w-96">
          {/* 현재 단계 */}
          <h3 className="text-2xl font-semibold">나만을 위한 직업추천 생성 진행도</h3>
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
            {step < 5 && <div className="">직업추천을 생성하기 위해서는 아래 정보가 필요해요!</div>}
          </div>
          {step === 1 && <Step1 onNext={nextStep} />}
          {step === 2 && <Step2 onNext={nextStep} onPrev={prevStep} />}
          {step === 3 && <Step3 onNext={nextStep} onPrev={prevStep} />}
          {step === 4 && <Step4 onPrev={prevStep} onSubmit={handleSubmit} />}
          {step === 5 && (
            <div className="flex flex-col w-full items-center">
              <p className="w-full text-left">입력해주신 정보들로 로드맵을 생성하는 중이에요!</p>
              <div className="w-2/3 aspect-square flex flex-col items-center justify-center gap-3  opacity-60">
                {isCompleteToCreate ? (
                  <FaCheckCircle className="text-3xl animate-fade-in-up" />
                ) : (
                  <FaSpinner className="text-3xl animate-spin" />
                )}
                <div>{isCompleteToCreate ? "기업 추천 생성 완료!" : "기업 추천 생성 중..."}</div>
              </div>
            </div>
          )}
        </div>
      }
    </section>
  );
};

export default RoadMapPage;
