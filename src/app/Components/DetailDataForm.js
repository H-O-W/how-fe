"use client";
import React, { useState } from "react";
import Select from "react-select";

const DetailDataForm = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedDisability, setSelectedDisability] = useState(null);

  const jobCategories = [
    { value: "office", label: "사무직" },
    { value: "it", label: "IT/개발" },
    { value: "service", label: "서비스업" },
    { value: "manufacture", label: "제조업" },
    { value: "education", label: "교육" },
    { value: "healthcare", label: "의료/복지" },
    { value: "finance", label: "금융/보험" },
    { value: "sales", label: "영업/판매" },
    { value: "media", label: "미디어/콘텐츠" },
    { value: "design", label: "디자인" },
  ];

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

  const handleJobChange = (selectedOption) => {
    setSelectedJob(selectedOption);
  };

  const handleDisabilityChange = (selectedOption) => {
    setSelectedDisability(selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("선택된 직종:", selectedJob?.value);
    console.log("선택된 장애분류:", selectedDisability?.value);
    // 여기에 폼 제출 로직을 추가하세요
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="job-select" className="block mb-2 font-bold text-gray-700">
          원하는 직종
        </label>
        <Select
          id="job-select"
          options={jobCategories}
          value={selectedJob}
          onChange={handleJobChange}
          placeholder="직종을 선택하세요"
          styles={customStyles}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="disability-select" className="block mb-2 font-bold text-gray-700">
          장애분류
        </label>
        <Select
          id="disability-select"
          options={disabilityCategories}
          value={selectedDisability}
          onChange={handleDisabilityChange}
          placeholder="장애분류를 선택하세요"
          styles={customStyles}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="skill" className="block mb-2 font-bold text-gray-700">
          자격증
        </label>
        <input
          id={"skill"}
          type="text"
          placeholder="자격증이 있나요?"
          className="w-full border px-2 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="skill" className="block mb-2 font-bold text-gray-700">
          학력
        </label>
        <input
          id={"skill"}
          type="text"
          placeholder="학력를 입력하세요."
          className="w-full border px-2 py-2"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
      >
        로드맵 생성
      </button>
    </form>
  );
};

export default DetailDataForm;
