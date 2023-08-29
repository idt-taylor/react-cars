import {
  StepType,
  modelStep,
  engineStep,
  appearanceStep,
} from "../../../types/StepType";

import { CarFormDataType } from "../../../types/CarFormDataType";
import { formActions } from "../../../store/form-store";

export const submitForm = (
  currentStep: StepType,
  formValues: Partial<CarFormDataType>,
  dispatch: any
) => {
  if (currentStep.stepDesc === modelStep.stepDesc) {
    const payload = { model: formValues.model, spec: formValues.spec };
    dispatch(formActions.addModels(payload));
  } else if (currentStep.stepDesc === engineStep.stepDesc) {
    const payload = {
      engineType: formValues.engineType,
      engineSize: formValues.engineSize,
    };
    dispatch(formActions.addEngines(payload));
  } else if (currentStep.stepDesc === appearanceStep.stepDesc) {
    const payload = {
      doors: formValues.doors,
      colours: formValues.colours,
    };
    dispatch(formActions.addAppearance(payload));
  }
};
