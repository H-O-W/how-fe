import React, { useState, useRef } from "react";
import Select from "react-select";

const Step2 = ({ onNext, onPrev }) => {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [licenses, setLicenses] = useState([]);
  const [licenseInput, setLicenseInput] = useState("");
  const [experience, setExperience] = useState("");

  const licenseAddBtnRef = useRef(null);

  // react-select 커스텀 스타일
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

  const handleLicenseChange = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addLicense();
    }
  };

  const addLicense = () => {
    if (licenseInput.trim() && !licenses.includes(licenseInput.trim())) {
      setLicenses([...licenses, licenseInput.trim()]);
      setLicenseInput("");
    }
  };

  const removeLicense = (license) => {
    setLicenses(licenses.filter((l) => l !== license));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ education, licenses, experience });
  };

  const educations = [
    { value: "elementary", label: "초등학교 졸업" },
    { value: "middle", label: "중학교 졸업" },
    { value: "high", label: "고등학교 졸업" },
    { value: "college", label: "전문대학 졸업" },
    { value: "university", label: "대학교 졸업" },
    { value: "master", label: "석사 학위" },
    { value: "doctor", label: "박사 학위" },
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 user-detail-form">
      <div className="mb-4">
        <label htmlFor="education-select" className="block mb-2 font-bold text-gray-700">
          최종 학력
        </label>
        <Select
          id="education-select"
          options={educations}
          value={selectedEducation}
          onChange={setSelectedEducation}
          placeholder="최종 학력을 선택하세요"
          className="w-full"
          customStyles={customStyles}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="license" className="block mb-2 font-bold text-gray-700">
          자격증
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {licenses.map((license, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
            >
              {license}
              <button
                type="button"
                onClick={() => removeLicense(license)}
                className="ml-2 text-blue-800 hover:text-blue-900 focus:outline-none"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div className="flex customStyle">
          <input
            id="license"
            type="text"
            value={licenseInput}
            onChange={(e) => setLicenseInput(e.target.value)}
            onKeyDown={handleLicenseChange}
            placeholder="자격증을 입력하세요"
            className="flex-grow border px-2 py-2 rounded-l customStyle"
          />
          <button
            type="button"
            onClick={addLicense}
            ref={licenseAddBtnRef}
            className="bg-blue-500 text-white -ml-2 px-4 py-2 rounded-r hover:bg-blue-600 addBtn"
          >
            추가
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="experience" className="block mb-2 font-bold text-gray-700">
          경력 사항
        </label>
        <textarea
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="경력 사항을 입력하세요 (없으면 '신입'이라고 적어주세요)"
          className="w-full border px-2 py-2 rounded h-32"
          required
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
