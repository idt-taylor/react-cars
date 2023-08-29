export type StepType = {
  stepNo: number;
  stepDesc: string;
};

export const modelStep: StepType = { stepNo: 1, stepDesc: "Models" };
export const engineStep: StepType = { stepNo: 2, stepDesc: "Engines" };
export const appearanceStep: StepType = { stepNo: 3, stepDesc: "Appearance" };
export const reviewStep: StepType = { stepNo: 4, stepDesc: "Review" };
export const completeStep: StepType = { stepNo: 5, stepDesc: "Complete" };
