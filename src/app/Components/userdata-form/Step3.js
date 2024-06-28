import React, { useState } from "react";
import Select from "react-select";

const Step3 = ({ onNext, onPrev }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [commuteDistance, setCommuteDistance] = useState("");
  const [selectedRemotePreference, setSelectedRemotePreference] = useState(null);

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

  const jobOptions = [
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

  const remotePreferenceOptions = [
    { value: "full-remote", label: "전면 재택" },
    { value: "partial-remote", label: "부분 재택" },
    { value: "office-based", label: "사무실 근무 선호" },
    { value: "flexible", label: "유연함" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({
      region: selectedRegion?.value,
      job: selectedJob?.value,
      commuteDistance,
      remotePreference: selectedRemotePreference?.value,
    });
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
      <div className="mb-4">
        <label htmlFor="region-select" className="block mb-2 font-bold text-gray-700">
          희망 지역
        </label>
        <Select
          id="region-select"
          options={regionOptions}
          value={selectedRegion}
          onChange={setSelectedRegion}
          placeholder="희망 지역을 선택하세요"
          styles={customStyles}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="job-select" className="block mb-2 font-bold text-gray-700">
          희망 직종
        </label>
        <Select
          id="job-select"
          options={jobOptions}
          value={selectedJob}
          onChange={setSelectedJob}
          placeholder="희망 직종을 선택하세요"
          styles={customStyles}
        />
      </div>

      {/* <div className="mb-4">
        <label htmlFor="commute-distance" className="block mb-2 font-bold text-gray-700">
          통근 가능 거리 (km)
        </label>
        <input
          id="commute-distance"
          type="number"
          value={commuteDistance}
          onChange={(e) => setCommuteDistance(e.target.value)}
          placeholder="통근 가능 거리를 입력하세요"
          className="w-full border px-2 py-2 rounded customStyle"
        />
      </div> */}

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

export default Step3;
