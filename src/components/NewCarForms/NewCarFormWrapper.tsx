import { FC, useEffect, useCallback } from "react";

import { useForm, FormProvider } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";

import { Card, CardHeader, Grid } from "@mui/material";

import NewCarFormContent from "./NewCarFormContent";

import { StateType } from "../../types/StateType";
import { CarFormDataType } from "../../types/CarFormDataType";
import { StepType, modelStep, reviewStep } from "../../types/StepType";

import { formActions } from "../../store/form-store";

import { useAddCar } from "../../hooks/useAddCar";
import { submitForm } from "./utils/FormSubmitUtils";

import NewCar from "../../models/NewCar";

import classes from "./NewCarFormWrapper.module.css";
import NewCarFormActions from "./NewCarFormActions";

const NewCarFormWrapper: FC = () => {
  const dispatch = useDispatch();

  const currentStep: StepType = useSelector(
    (state: StateType) => state.form.currentStep
  );

  const carFormData: CarFormDataType = useSelector(
    (state: StateType) => state.form.carFormData
  );

  const defaultValues: CarFormDataType | undefined =
    currentStep === modelStep
      ? carFormData
      : {
          model: carFormData.model,
          spec: carFormData.spec,
          engineType: carFormData.engineType,
          engineSize: carFormData.engineSize,
          doors: carFormData.doors,
          colours: carFormData.colours,
        };

  const methods = useForm({
    defaultValues: defaultValues,
  });

  const clearForm = useCallback(
    (carFormData: CarFormDataType) => {
      methods.reset(carFormData);
    },
    [methods]
  );

  useEffect(() => {
    if (carFormData.model === "") {
      clearForm(carFormData);
    }
  }, [carFormData, clearForm]);

  const { mutate } = useAddCar();

  const submitHandler = (formValues: Partial<CarFormDataType>) => {
    if (currentStep.stepDesc === reviewStep.stepDesc) {
      const newCar = new NewCar(carFormData);
      mutate(newCar);
    } else {
      submitForm(currentStep, formValues, dispatch);
    }
  };

  const backHandler = () => {
    dispatch(formActions.back());
  };

  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      marginTop={"1rem"}
      marginBottom={"1rem"}
    >
      <Card sx={{ width: "50%" }}>
        <CardHeader
          title="New Car"
          titleTypographyProps={{ align: "center", fontWeight: "700" }}
          subheader="Select your new car and your specifications"
          subheaderTypographyProps={{ align: "center" }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <FormProvider {...methods}>
          <form
            className={classes.form}
            onSubmit={methods.handleSubmit(submitHandler)}
          >
            <NewCarFormContent currentStep={currentStep} />
            <NewCarFormActions
              currentStep={currentStep}
              backHandler={backHandler}
            />
          </form>
        </FormProvider>
      </Card>
    </Grid>
  );
};

export default NewCarFormWrapper;
