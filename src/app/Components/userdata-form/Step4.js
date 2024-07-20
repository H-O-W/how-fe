import { currentStepState, step4State } from "@/app/Store/roadmapFormState";
import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

const Step4 = ({ onNext, onPrev }) => {
  const [careerYears, setCareerYears] = useState("");
  const [careerMonths, setCareerMonths] = useState("");
  const [licenses, setLicenses] = useState([]);
  const [licenseInput, setLicenseInput] = useState("");

  const [step4Data, setStep4Data] = useRecoilState(step4State);
  const setCurrentStep = useSetRecoilState(currentStepState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep4Data({
      career: `${careerYears}년 ${careerMonths}개월`,
      licenses,
    });
    setCurrentStep(5); // 다음 단계로 이동 (또는 최종 단계라면 적절히 처리)
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

  return (
    <form onSubmit={handleSubmit} className="user-detail-form max-w-xl mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="career" className="block mb-2 font-bold text-gray-700">
          경력 사항
        </label>
        <div className="flex space-x-2">
          <input
            id="career-years"
            type="number"
            value={careerYears}
            onChange={(e) => setCareerYears(e.target.value)}
            placeholder="연차"
            className="flex-grow border px-2 py-2 rounded"
            min="0"
          />
          <span className="flex items-center">년</span>
          <input
            id="career-months"
            type="number"
            value={careerMonths}
            onChange={(e) => setCareerMonths(e.target.value)}
            placeholder="개월"
            className="flex-grow border px-2 py-2 rounded"
            min="0"
            max="11"
          />
          <span className="flex items-center">개월</span>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="license" className="block mb-2 font-bold text-gray-700">
          자격증
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {licenses.map((license, index) => (
            <span
              onClick={() => removeLicense(license)}
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center hover:bg-blue-200 cursor-pointer"
            >
              {license}
            </span>
          ))}
        </div>
        <div className="flex">
          <input
            id="license"
            type="text"
            value={licenseInput}
            onChange={(e) => setLicenseInput(e.target.value)}
            onKeyDown={handleLicenseChange}
            placeholder="자격증을 입력하세요"
            className="flex-grow border px-2 py-2 rounded-l"
          />
          <button
            type="button"
            onClick={addLicense}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            추가
          </button>
        </div>
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

export default Step4;
