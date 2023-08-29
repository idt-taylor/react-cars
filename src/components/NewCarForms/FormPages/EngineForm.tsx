import { FC, useState } from "react";

import { useSelector } from "react-redux";

import { useFormContext } from "react-hook-form";

import { StateType } from "../../../types/StateType";
import { useGetCarFormData } from "../../../hooks/useGetCarFormData";
import { getCarFormData } from "../../../apis/car-form-api";
import CarFormDropdown from "../FormUI/CarFormDropdown";
import CarFormData from "../../../models/CarFormData";

const EngineForm: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const engineType = useSelector((state: StateType) => {
    return state.form.carFormData.engineType;
  });

  const [engineTypeSet, setEngineTypeSet] = useState<boolean>(false);

  const engineSizeDisabled: boolean = !engineType && !engineTypeSet;

  const carEngineTypeQuery = useGetCarFormData(
    "GetCarEngineTypes",
    getCarFormData,
    "car-engine-type.json"
  );
  const engineTypes: CarFormData[] = carEngineTypeQuery.data
    ? carEngineTypeQuery.data
    : [];

  const carEngineSizeQuery = useGetCarFormData(
    "GetCarEngineSizes",
    getCarFormData,
    "car-engine-size.json"
  );
  const engineSizes: CarFormData[] = carEngineSizeQuery.data
    ? carEngineSizeQuery.data
    : [];

  const engineTypeChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.length > 1) {
      setEngineTypeSet(true);
    }
  };

  const engineSizeChangedHandler = () => {};

  return (
    <>
      <CarFormDropdown
        control={control}
        name="engineType"
        label="Engine Type"
        errors={errors.engineType}
        rules={{ required: "Please select an engine type" }}
        data={engineTypes}
        disabled={false}
        onChanged={engineTypeChangedHandler}
      />
      <CarFormDropdown
        control={control}
        name="engineSize"
        label="Engine Size"
        errors={errors.engineSize}
        rules={{ required: "Please select an engine size" }}
        data={engineSizes}
        disabled={engineSizeDisabled}
        onChanged={engineSizeChangedHandler}
      />
    </>
  );
};

export default EngineForm;
