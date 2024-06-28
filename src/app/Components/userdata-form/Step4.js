import React, { useState } from "react";
import Select from "react-select";

const Step4 = ({ onSubmit, onPrev }) => {
  const [digitalLiteracy, setDigitalLiteracy] = useState(null);
  const [languageSkills, setLanguageSkills] = useState([]);
  const [interests, setInterests] = useState("");
  const [strengths, setStrengths] = useState("");
  const [workSupport, setWorkSupport] = useState("");

  const digitalLiteracyOptions = [
    { value: "beginner", label: "초보자" },
    { value: "intermediate", label: "중급자" },
    { value: "advanced", label: "고급자" },
    { value: "expert", label: "전문가" },
  ];

  const languageOptions = [
    { value: "korean", label: "한국어" },
    { value: "english", label: "영어" },
    { value: "japanese", label: "일본어" },
    { value: "chinese", label: "중국어" },
    { value: "spanish", label: "스페인어" },
    { value: "french", label: "프랑스어" },
    { value: "german", label: "독일어" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      digitalLiteracy: digitalLiteracy?.value,
      languageSkills: languageSkills.map((lang) => lang.value),
      interests,
      strengths,
      workSupport,
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
        <label htmlFor="digital-literacy" className="block mb-2 font-bold text-gray-700">
          디지털 리터러시 수준
        </label>
        <Select
          id="digital-literacy"
          options={digitalLiteracyOptions}
          value={digitalLiteracy}
          onChange={setDigitalLiteracy}
          placeholder="디지털 리터러시 수준을 선택하세요"
          styles={customStyles}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="language-skills" className="block mb-2 font-bold text-gray-700">
          언어 능력
        </label>
        <Select
          id="language-skills"
          options={languageOptions}
          value={languageSkills}
          onChange={setLanguageSkills}
          placeholder="구사 가능한 언어를 선택하세요"
          isMulti
          styles={customStyles}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="interests" className="block mb-2 font-bold text-gray-700">
          관심사
        </label>
        <textarea
          id="interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="관심 있는 분야나 주제를 입력하세요"
          className="w-full border px-2 py-2 rounded customStyle"
          rows="3"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="strengths" className="block mb-2 font-bold text-gray-700">
          강점
        </label>
        <textarea
          id="strengths"
          value={strengths}
          onChange={(e) => setStrengths(e.target.value)}
          placeholder="본인의 강점을 입력하세요"
          className="w-full border px-2 py-2 rounded customStyle"
          rows="3"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="work-support" className="block mb-2 font-bold text-gray-700">
          필요한 업무 지원
        </label>
        <textarea
          id="work-support"
          value={workSupport}
          onChange={(e) => setWorkSupport(e.target.value)}
          placeholder="필요한 업무 지원 사항을 입력하세요 (예: 특정 소프트웨어, 보조 기구 등)"
          className="w-full border px-2 py-2 rounded customStyle"
          rows="3"
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
          로드맵 생성!
        </button>
      </div>
    </form>
  );
};

export default Step4;
