import { atom, selector } from "recoil";

// 각 단계별 atom 정의
export const step1State = atom({
  key: "step1State",
  default: {},
});

export const step2State = atom({
  key: "step2State",
  default: {},
});

export const step3State = atom({
  key: "step3State",
  default: {},
});

export const step4State = atom({
  key: "step4State",
  default: {},
});

// 전체 폼 상태를 조합하는 selector
export const formState = selector({
  key: "formState",
  get: ({ get }) => ({
    step1: get(step1State),
    step2: get(step2State),
    step3: get(step3State),
    step4: get(step4State),
  }),
});

// 현재 단계를 추적하는 atom
export const currentStepState = atom({
  key: "currentStepState",
  default: 1,
});
