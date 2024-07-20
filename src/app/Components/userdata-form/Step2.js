import { currentStepState, step2State } from "@/app/Store/roadmapFormState";
import React, { useState } from "react";
import Select from "react-select";
import { useRecoilState, useSetRecoilState } from "recoil";

const Step2 = ({ onNext, onPrev }) => {
  const [bothHands, setBothHands] = useState(null);
  const [eyesight, setEyesight] = useState(null);
  const [handwork, setHandwork] = useState(null);

  const [step2Data, setStep2Data] = useRecoilState(step2State);
  const setCurrentStep = useSetRecoilState(currentStepState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep2Data({
      bothHands,
      eyesight,
      handwork,
    });
    setCurrentStep(3);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: "#e2e8f0",
      "&:hover": {
        borderColor: "#cbd5e0",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#4299e1" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#bee3f8",
      },
    }),
  };

  const bothHandsOptions = [
    { value: "BOTH_HANDS", label: "양손작업 가능" },
    { value: "ONE_HANDS_ASSIST", label: "한손보조작업 가능" },
  ];

  const eyesightOptions = [
    { value: "NORMAL_ACTIVITY", label: "일상적 활동 가능" },
    { value: "LARGE_PRINT", label: "비교적 큰 인쇄물을 읽을 수 있음" },
    { value: "SMALL_PRINT", label: "아주 작은 글씨를 읽을 수 있음" },
  ];

  const handworkOptions = [
    { value: "PRECISION_WORK", label: "정밀한 작업가능" },
    { value: "SMALL_ASSEMBLY", label: "작은 물품 조립가능" },
    { value: "LARGE_ASSEMBLY", label: "큰 물품 조립가능" },
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 user-detail-form">
      <div className="mb-4">
        <label htmlFor="bothHands-select" className="block mb-2 font-bold text-gray-700">
          작업환경_양손사용
        </label>
        <Select
          id="bothHands-select"
          instanceId="bothHands-select"
          options={bothHandsOptions}
          value={bothHands}
          onChange={setBothHands}
          placeholder="양손 사용 능력을 선택하세요"
          className="w-full"
          styles={customStyles}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="eyesight-select" className="block mb-2 font-bold text-gray-700">
          작업환경_시력
        </label>
        <Select
          id="eyesight-select"
          instanceId="eyesight-select"
          options={eyesightOptions}
          value={eyesight}
          onChange={setEyesight}
          placeholder="시력 상태를 선택하세요"
          className="w-full"
          styles={customStyles}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="handwork-select" className="block mb-2 font-bold text-gray-700">
          작업환경_손작업
        </label>
        <Select
          id="handwork-select"
          instanceId="handwork-select"
          options={handworkOptions}
          value={handwork}
          onChange={setHandwork}
          placeholder="손작업 능력을 선택하세요"
          className="w-full"
          styles={customStyles}
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 font-bold text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 focus:outline-none focus:shadow-outline"
        >
          이전 단계
        </button>
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
        >
          다음 단계
        </button>
      </div>
    </form>
  );
};

export default Step2;
