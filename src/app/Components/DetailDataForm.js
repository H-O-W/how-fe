"use client";
import React, { useRef, useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import Select from "react-select";

const DetailDataForm = () => {
  // 상태 관리
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedDisability, setSelectedDisability] = useState(null);
  const [licenses, setLicenses] = useState([]);
  const [licenseInput, setLicenseInput] = useState("");

  // UI 상태 관리
  const [sumbitLoading, setSubmitLoading] = useState(false);

  const regionCategories = [
    { value: "seoul", label: "서울" },
    { value: "gyeonggi", label: "경기" },
    { value: "chungnam", label: "충남" },
    { value: "chungbuk", label: "충북" },
    { value: "gyeongbuk", label: "경북" },
    { value: "gyeongnam", label: "경남" },
    { value: "jeonnam", label: "전남" },
    { value: "jeonbuk", label: "전북" },
    { value: "kangwon", label: "강원" },
  ];
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
  const handleRegionChange = (selectedOption) => {
    setSelectedRegion(selectedOption);
  };

  const handleJobChange = (selectedOption) => {
    setSelectedJob(selectedOption);
  };

  const handleDisabilityChange = (selectedOption) => {
    setSelectedDisability(selectedOption);
  };

  const licenseAddBtnRef = useRef(null);
  const handleLicenseChange = (e) => {
    try {
      if (licenseInput.length === 0) return;
      if (e.code === "Enter" || e.code === "Comma") {
        if (licenseAddBtnRef.current) licenseAddBtnRef.current.click();
      }
    } catch (error) {
      console.error("라이센스 입력 중 오류", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitLoading(true);
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
    <form onSubmit={handleSubmit} className="user-detail-form max-w-xl mx-auto mt-8">
      <div className="w-full mb-4">
        <label htmlFor="region-select" className="block mb-2 font-bold text-gray-700">
          원하는 지역
        </label>
        <Select
          id="region-select"
          options={regionCategories}
          value={selectedRegion}
          onChange={handleRegionChange}
          placeholder="지역을 선택하세요"
          styles={customStyles}
        />
      </div>
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
        <label htmlFor="license" className="block mb-2 font-bold text-gray-700">
          자격증
        </label>
        <div className="flex gap-0.5 mb-1">
          {licenses &&
            licenses.map((license, index) => (
              <span
                className="bg-emerald-100 hover:bg-emerald-200 px-1 py-0.5 rounded-md cursor-pointer animation-earthquakes"
                onClick={() => {
                  setLicenses((prev) => prev.filter((v, i) => v !== license));
                }}
                key={index}
              >
                {license}
              </span>
            ))}
        </div>
        <div className="flex text-nowrap">
          <input
            id={"license"}
            type="text"
            value={licenseInput}
            onChange={(e) => setLicenseInput(e.target.value)}
            placeholder="자격증이 있나요?"
            className="w-full border px-2 py-2"
          />
          <button
            className="bg-blue-500 text-white px-2 -ml-1"
            htmlFor="license"
            onClick={() => {
              if (licenseInput.trim().length === 0) return;
              if (licenses.includes(licenseInput.trim())) return;
              setLicenses((prev) => [...prev, licenseInput.trim()]);
              setLicenseInput("");
            }}
            ref={licenseAddBtnRef}
          >
            추가
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="education" className="block mb-2 font-bold text-gray-700">
          학력
        </label>
        <input
          id={"education"}
          type="text"
          placeholder="최종 학력를 입력하세요."
          className="w-full border px-2 py-2"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
      >
        {sumbitLoading ? (
          <LiaSpinnerSolid className="animate-spin h-7 mx-auto text-2xl" />
        ) : (
          "로드맵 생성"
        )}
      </button>
    </form>
  );
};

export default DetailDataForm;
