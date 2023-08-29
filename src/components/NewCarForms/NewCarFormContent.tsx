import { FC } from "react";

import { CardContent } from "@mui/material";
import {
  StepType,
  modelStep,
  engineStep,
  appearanceStep,
  reviewStep,
} from "../../types/StepType";

import ModelSpecForm from "./FormPages/ModelSpecForm";
import EngineForm from "./FormPages/EngineForm";
import AppearanceForm from "./FormPages/AppearanceForm";
import ReviewForm from "./FormPages/ReviewForm";

const NewCarFormContent: FC<{ currentStep: StepType }> = (props) => {
  return (
    <CardContent style={{ justifyContent: "center" }}>
      {props.currentStep.stepDesc === modelStep.stepDesc && <ModelSpecForm />}
      {props.currentStep.stepDesc === engineStep.stepDesc && <EngineForm />}
      {props.currentStep.stepDesc === appearanceStep.stepDesc && (
        <AppearanceForm />
      )}
      {props.currentStep.stepDesc === reviewStep.stepDesc && <ReviewForm />}
    </CardContent>
  );
};

export default NewCarFormContent;
