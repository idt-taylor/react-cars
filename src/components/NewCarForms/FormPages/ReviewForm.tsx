import { FC } from "react";

import { useSelector } from "react-redux";

import { useFormContext } from "react-hook-form";

import { StateType } from "../../../types/StateType";
import ReviewFormField from "../FormUI/ReviewFormField";

const ReviewForm: FC = () => {
  const { control } = useFormContext();

  const carformData = useSelector((state: StateType) => {
    return state.form.carFormData;
  });

  return (
    <>
      <ReviewFormField
        control={control}
        name="model"
        value={carformData.model}
        label="Model"
      />
      <ReviewFormField
        control={control}
        name="spec"
        value={carformData.spec}
        label="Spec"
      />
      <ReviewFormField
        control={control}
        name="engineType"
        value={carformData.engineType}
        label="Engine Type"
      />
      <ReviewFormField
        control={control}
        name="engineSize"
        value={carformData.engineSize}
        label="Engine Size"
      />
      <ReviewFormField
        control={control}
        name="doors"
        value={carformData.doors}
        label="Doors"
      />
      <ReviewFormField
        control={control}
        name="colours"
        value={carformData.colours}
        label="Colour"
      />
    </>
  );
};

export default ReviewForm;
