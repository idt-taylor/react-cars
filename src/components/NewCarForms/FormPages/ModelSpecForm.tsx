import { FC, useState } from "react";

import { useSelector } from "react-redux";

import { useFormContext } from "react-hook-form";

import { StateType } from "../../../types/StateType";
import { useGetCarFormData } from "../../../hooks/useGetCarFormData";
import { getCarFormData } from "../../../apis/car-form-api";
import CarFormDropdown from "../FormUI/CarFormDropdown";
import CarFormData from "../../../models/CarFormData";

const ModelSpecForm: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const model = useSelector((state: StateType) => {
    return state.form.carFormData.model;
  });

  const [modelSet, setModelSet] = useState<boolean>(false);

  const specDisabled: boolean = !model && !modelSet;

  const carModelQuery = useGetCarFormData(
    "GetCarModels",
    getCarFormData,
    "car-models.json"
  );
  const models: CarFormData[] = carModelQuery.data ? carModelQuery.data : [];

  const carSpecQuery = useGetCarFormData(
    "GetCarSpecs",
    getCarFormData,
    "car-specs.json"
  );
  const specs: CarFormData[] = carSpecQuery.data ? carSpecQuery.data : [];

  const modelChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 1) {
      setModelSet(true);
    }
  };

  const specChangedHandler = () => {};

  return (
    <>
      <CarFormDropdown
        control={control}
        name="model"
        label="Model"
        errors={errors.model}
        rules={{ required: "Please select a car model" }}
        data={models}
        disabled={false}
        onChanged={modelChangedHandler}
      />
      <CarFormDropdown
        control={control}
        name="spec"
        label="Spec"
        errors={errors.spec}
        rules={{ required: "Please select a car spec" }}
        data={specs}
        disabled={specDisabled}
        onChanged={specChangedHandler}
      />
    </>
  );
};

export default ModelSpecForm;
