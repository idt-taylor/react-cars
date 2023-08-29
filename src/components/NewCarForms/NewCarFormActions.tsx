import { FC } from "react";

import { Button, CardActions } from "@mui/material";

import { StepType } from "../../types/StepType";
import { ButtonType } from "../../types/ButtonType";

import { setButtonOne, setButtonTwo } from "./utils/ButtonUtils";

const NewCarFormActions: FC<{
  currentStep: StepType;
  backHandler: () => void;
}> = (props) => {
  const buttonOne: ButtonType = setButtonOne(props.currentStep);
  const buttonTwo: ButtonType = setButtonTwo(props.currentStep);

  return (
    <CardActions style={{ justifyContent: "center" }}>
      {buttonOne.show && (
        <Button onClick={props.backHandler}>{buttonOne.text}</Button>
      )}
      {buttonTwo.show && (
        <Button
          type="submit"
          variant={"contained"}
          disabled={buttonTwo.disabled}
        >
          {buttonTwo.text}
        </Button>
      )}
    </CardActions>
  );
};

export default NewCarFormActions;
