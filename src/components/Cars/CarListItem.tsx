import { FC, useContext, memo } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

import Car from "../../models/Car";
import useGetCar from "../../hooks/useGetCar";
import { CarsContext } from "../../context/cars-context";
import { displayActions } from "../../store/display-store";

import classes from "./CarListItem.module.css";

const CarListItem: FC<{ car: Car }> = memo((props) => {
  const dispatch = useDispatch();
  const carsCtx = useContext(CarsContext);
  const carQuery = useGetCar(props.car.id);

  const itemClickHandler = () => {
    if (carQuery.data) {
      const car: Car = carQuery.data;
      carsCtx.setSelectedCar(car);
      console.log(car);
      dispatch(displayActions.selectedCar());
    }
  };

  return (
    <li key={props.car.id} className={classes.item}>
      <Button
        variant="contained"
        sx={{ width: "100%" }}
        onClick={itemClickHandler}
      >
        {props.car.model} - {props.car.spec} - {props.car.engineType}
      </Button>
    </li>
  );
});

export default CarListItem;
