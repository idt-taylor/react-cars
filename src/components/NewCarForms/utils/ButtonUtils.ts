import {
  StepType,
  modelStep,
  engineStep,
  appearanceStep,
  reviewStep,
} from "../../../types/StepType";

import { ButtonType } from "../../../types/ButtonType";

export const setButtonOne = (currentStep: StepType): ButtonType => {
  if (currentStep.stepNo === modelStep.stepNo) {
    return { text: "", show: false, disabled: false };
  } else if (
    currentStep.stepNo === engineStep.stepNo ||
    currentStep.stepNo === appearanceStep.stepNo ||
    currentStep.stepNo === reviewStep.stepNo
  ) {
    return { text: "Back", show: true, disabled: false };
  }

  return { text: "", show: false, disabled: true };
};

export const setButtonTwo = (currentStep: StepType): ButtonType => {
  if (
    currentStep.stepNo === modelStep.stepNo ||
    currentStep.stepNo === engineStep.stepNo ||
    currentStep.stepNo === appearanceStep.stepNo
  ) {
    return { text: "Next", show: true, disabled: false };
  } else if (currentStep.stepNo === reviewStep.stepNo) {
    return { text: "Complete", show: true, disabled: false };
  }

  return { text: "", show: false, disabled: true };
};
