import { CarFormDataType } from "./CarFormDataType";
import { StepType } from "./StepType";

export type FormDataType = {
  carFormData: CarFormDataType;

  steps: StepType[];
  currentStep: StepType;
  complete: boolean;
};
