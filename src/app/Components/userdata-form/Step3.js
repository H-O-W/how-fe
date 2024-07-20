import { currentStepState, step3State } from "@/app/Store/roadmapFormState";
import React, { useState } from "react";
import Select from "react-select";
import { useRecoilState, useSetRecoilState } from "recoil";

const Step3 = ({ onNext, onPrev }) => {
  const [liftPower, setLiftPower] = useState(null);
  const [lstnTalk, setLstnTalk] = useState(null);
  const [stndWalk, setStndWalk] = useState(null);

  const [step3Data, setStep3Data] = useRecoilState(step3State);
  const setCurrentStep = useSetRecoilState(currentStepState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep3Data({
      liftPower: liftPower?.value,
      lstnTalk: lstnTalk?.value,
      stndWalk: stndWalk?.value,
    });
    setCurrentStep(4); // 다음 단계로 이동
  };

  const liftPowerOptions = [
    { value: "UNDER_5KG", label: "5Kg 이내의 물건을 다룰 수 있음" },
    { value: "FROM_5KG_TO_20KG", label: "5~20Kg의 물건을 다룰 수 있음" },
    { value: "ABOVE_20KG", label: "20Kg 이상의 물건을 다룰 수 있음" },
  ];

  const lstnTalkOptions = [
    { value: "NO_DIFFICULTY", label: "듣고 말하기에 어려움 없음" },
    { value: "SIMPLE_CONVERSATION", label: "간단한 듣고 말하기 가능" },
    { value: "DIFFICULTY", label: "듣고 말하는 작업 어려움" },
  ];

  const stndWalkOptions = [
    { value: "LONG_STANDING", label: "오랫동안 서거나 걷기 가능" },
    { value: "SOME_STANDING", label: "일부 서서하는 작업 가능" },
    { value: "DIFFICULTY", label: "서거나 걷는 일 어려움" },
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
    <form onSubmit={handleSubmit} className="user-detail-form max-w-xl mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="liftPower-select" className="block mb-2 font-bold text-gray-700">
          작업환경_드는힘
        </label>
        <Select
          id="liftPower-select"
          instanceId="liftPower-select"
          options={liftPowerOptions}
          value={liftPower}
          onChange={setLiftPower}
          placeholder="드는 힘을 선택하세요"
          styles={customStyles}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="lstnTalk-select" className="block mb-2 font-bold text-gray-700">
          작업환경_듣고 말하기
        </label>
        <Select
          id="lstnTalk-select"
          instanceId="lstnTalk-select"
          options={lstnTalkOptions}
          value={lstnTalk}
          onChange={setLstnTalk}
          placeholder="듣고 말하기 능력을 선택하세요"
          styles={customStyles}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="stndWalk-select" className="block mb-2 font-bold text-gray-700">
          작업환경_서거나 걷기
        </label>
        <Select
          id="stndWalk-select"
          instanceId="stndWalk-select"
          options={stndWalkOptions}
          value={stndWalk}
          onChange={setStndWalk}
          placeholder="서거나 걷기 능력을 선택하세요"
          styles={customStyles}
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

export default Step3;
