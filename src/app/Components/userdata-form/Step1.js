import { currentStepState, step1State } from "@/app/Store/roadmapFormState";
import React, { useState } from "react";
import Select from "react-select";
import { useRecoilState, useSetRecoilState } from "recoil";

const Step1 = ({ onNext }) => {
  const [age, setAge] = useState("");
  const [selectedDisability, setSelectedDisability] = useState(null);
  const [disabilityDegree, setDisabilityDegree] = useState("");
  const [step1Data, setStep1Data] = useRecoilState(step1State);
  const setCurrentStep = useSetRecoilState(currentStepState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 데이터 처리
    setStep1Data({ age, disability: selectedDisability?.value, disabilityDegree });
    setCurrentStep(2); // 다음 단계로 이동
  };

  const disabilityCategories = [
    { value: "physical", label: "지체장애" },
    { value: "visual", label: "시각장애" },
    { value: "hearing", label: "청각장애" },
    { value: "speech", label: "언어장애" },
    { value: "intellectual", label: "지적장애" },
    { value: "mental", label: "정신장애" },
    { value: "developmental", label: "발달장애" },
    { value: "brain", label: "뇌병변장애" },
    { value: "multiple", label: "중복장애" },
  ];

  const disabilityDegrees = [
    { value: "severe", label: "중증" },
    { value: "mild", label: "경증" },
  ];

  const handleDisabilityChange = (selectedOption) => {
    setSelectedDisability(selectedOption);
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

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 user-detail-form">
      <div className="mb-4">
        <label htmlFor="age" className="block mb-2 font-bold text-gray-700">
          연령
        </label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="나이를 입력하세요"
          className="w-full border px-2 py-2 rounded customStyle"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="disability-select" className="block mb-2 font-bold text-gray-700">
          장애분류
        </label>
        <Select
          id="disability-select"
          instanceId={"disability-select"}
          options={disabilityCategories}
          value={selectedDisability}
          onChange={handleDisabilityChange}
          placeholder="장애분류를 선택하세요"
          styles={customStyles}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="disability-degree" className="block mb-2 font-bold text-gray-700">
          장애 정도
        </label>
        <Select
          id="disability-degree"
          instanceId={"disability-degree"}
          options={disabilityDegrees}
          value={disabilityDegree}
          onChange={setDisabilityDegree}
          placeholder="장애 정도를 선택하세요"
          styles={customStyles}
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
      >
        다음 단계
      </button>
    </form>
  );
};

export default Step1;
