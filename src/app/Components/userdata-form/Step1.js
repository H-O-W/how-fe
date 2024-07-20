import { currentStepState, step1State } from "@/app/Store/roadmapFormState";
import React, { useState } from "react";
import Select from "react-select";
import { useRecoilState, useSetRecoilState } from "recoil";

const Step1 = ({ onNext }) => {
  const [age, setAge] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [step1Data, setStep1Data] = useRecoilState(step1State);
  const setCurrentStep = useSetRecoilState(currentStepState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep1Data({
      age,
      region: selectedRegion?.value,
      education: selectedEducation?.value,
      preferredJob: selectedJob?.value,
    });
    setCurrentStep(2); // 다음 단계로 이동
  };

  const regionOptions = [
    { value: "seoul", label: "서울" },
    { value: "gyeonggi", label: "경기" },
    { value: "incheon", label: "인천" },
    { value: "busan", label: "부산" },
    { value: "daegu", label: "대구" },
    { value: "gwangju", label: "광주" },
    { value: "daejeon", label: "대전" },
    { value: "ulsan", label: "울산" },
    { value: "sejong", label: "세종" },
    { value: "gangwon", label: "강원" },
    { value: "chungbuk", label: "충북" },
    { value: "chungnam", label: "충남" },
    { value: "jeonbuk", label: "전북" },
    { value: "jeonnam", label: "전남" },
    { value: "gyeongbuk", label: "경북" },
    { value: "gyeongnam", label: "경남" },
    { value: "jeju", label: "제주" },
  ];

  const educationOptions = [
    { value: "초졸", label: "초등학교 졸업" },
    { value: "중졸", label: "중학교 졸업" },
    { value: "고졸", label: "고등학교 졸업" },
    { value: "대졸", label: "대학교 졸업" },
  ];

  const jobOptions = [
    { value: "사무 및 관리", label: "사무 및 관리" },
    { value: "청소 및 환경", label: "청소 및 환경" },
    { value: "고객서비스 및 상담", label: "고객서비스 및 상담" },
    { value: "홍보 및 마케팅", label: "홍보 및 마케팅" },
    { value: "의료 및 복지", label: "의료 및 복지" },
    { value: "운송 및 배달", label: "운송 및 배달" },
    { value: "제조 및 생산", label: "제조 및 생산" },
    { value: "IT 및 디자인", label: "IT 및 디자인" },
    { value: "요리 및 주방 보조", label: "요리 및 주방 보조" },
    { value: "판매", label: "판매" },
    { value: "경비 및 보안", label: "경비 및 보안" },
    { value: "연구", label: "연구" },
    { value: "설치 및 수리", label: "설치 및 수리" },
    { value: "단순노동", label: "단순노동" },
    { value: "동물", label: "동물" },
    { value: "기타", label: "기타" },
  ];

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
        <label htmlFor="job-select" className="block mb-2 font-bold text-gray-700">
          직무 분야
        </label>
        <Select
          id="job-select"
          instanceId="job-select"
          options={jobOptions}
          value={selectedJob}
          onChange={setSelectedJob}
          placeholder="선호 직무 분야를 선택하세요"
          styles={customStyles}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="region-select" className="block mb-2 font-bold text-gray-700">
          선호 지역
        </label>
        <Select
          id="region-select"
          instanceId="region-select"
          options={regionOptions}
          value={selectedRegion}
          onChange={setSelectedRegion}
          placeholder="선호 지역을 선택하세요"
          styles={customStyles}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="education-select" className="block mb-2 font-bold text-gray-700">
          최종 학력
        </label>
        <Select
          id="education-select"
          instanceId="education-select"
          options={educationOptions}
          value={selectedEducation}
          onChange={setSelectedEducation}
          placeholder="최종 학력을 선택하세요"
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
