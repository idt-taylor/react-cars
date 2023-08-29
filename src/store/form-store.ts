import { createSlice } from "@reduxjs/toolkit";

import { FormDataType } from "../types/FormDataType";
import {
  modelStep,
  engineStep,
  appearanceStep,
  reviewStep,
  completeStep,
} from "../types/StepType";

const initialFormState: FormDataType = {
  carFormData: {
    model: "",
    spec: "",
    engineType: "",
    engineSize: "",
    doors: 3,
    colours: "",
  },
  steps: [modelStep, engineStep, appearanceStep, reviewStep, completeStep],
  currentStep: modelStep,
  complete: false,
};

const formSlice = createSlice({
  name: "formData",
  initialState: initialFormState,
  reducers: {
    addModels(state, action) {
      state.carFormData.model = action.payload.model;
      state.carFormData.spec = action.payload.spec;
      state.currentStep = engineStep;
    },
    addEngines(state, action) {
      state.carFormData.engineType = action.payload.engineType;
      state.carFormData.engineSize = action.payload.engineSize;
      state.currentStep = appearanceStep;
    },
    addAppearance(state, action) {
      state.carFormData.doors = action.payload.doors;
      state.carFormData.colours = action.payload.colours;
      state.currentStep = reviewStep;
      state.complete = false;
    },
    complete(state) {
      state.currentStep = completeStep;
      state.complete = true;
    },
    back(state) {
      if (state.currentStep.stepNo === engineStep.stepNo) {
        state.currentStep = modelStep;
      } else if (state.currentStep.stepNo === appearanceStep.stepNo) {
        state.currentStep = engineStep;
      } else if (state.currentStep.stepNo === reviewStep.stepNo) {
        state.currentStep = appearanceStep;
      }
    },
    clear(state) {
      state.carFormData.model = initialFormState.carFormData.model;
      state.carFormData.spec = initialFormState.carFormData.spec;
      state.carFormData.engineType = initialFormState.carFormData.engineType;
      state.carFormData.engineSize = initialFormState.carFormData.engineSize;
      state.carFormData.doors = initialFormState.carFormData.doors;
      state.carFormData.colours = initialFormState.carFormData.colours;
      state.currentStep = initialFormState.currentStep;
      state.complete = false;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice.reducer;
