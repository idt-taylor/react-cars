import { FC, useState } from "react";

import { useSelector } from "react-redux";

import { useFormContext } from "react-hook-form";

import { StateType } from "../../../types/StateType";
import { useGetCarFormData } from "../../../hooks/useGetCarFormData";
import { getCarFormData } from "../../../apis/car-form-api";
import CarFormDropdown from "../FormUI/CarFormDropdown";
import CarFormData from "../../../models/CarFormData";

const AppearanceForm: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const doors = useSelector((state: StateType) => {
    return state.form.carFormData.doors;
  });

  const [doorsSet, setDoorsSet] = useState<boolean>(false);

  const coloursDisabled: boolean = !doors && !doorsSet;

  const carDoorsQuery = useGetCarFormData(
    "GetCarDoors",
    getCarFormData,
    "car-doors.json"
  );
  const doorsList: CarFormData[] = carDoorsQuery.data ? carDoorsQuery.data : [];

  const carColoursQuery = useGetCarFormData(
    "GetCarColours",
    getCarFormData,
    "car-colours.json"
  );
  const colours: CarFormData[] = carColoursQuery.data
    ? carColoursQuery.data
    : [];

  const doorsChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) > 0) {
      setDoorsSet(true);
    }
  };

  const coloursChangedHandler = () => {};

  return (
    <>
      <CarFormDropdown
        control={control}
        name="doors"
        label="Doors"
        errors={errors.doors}
        rules={{ required: "Please select the number of doors" }}
        data={doorsList}
        disabled={false}
        onChanged={doorsChangedHandler}
      />
      <CarFormDropdown
        control={control}
        name="colours"
        label="Colours"
        errors={errors.colours}
        rules={{ required: "Please select a colour" }}
        data={colours}
        disabled={coloursDisabled}
        onChanged={coloursChangedHandler}
      />
    </>
  );
};

export default AppearanceForm;
