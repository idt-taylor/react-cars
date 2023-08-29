import { FC, useContext } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import Car from "../../models/Car";
import CarItemField from "./CarItemField";
import { CarsContext } from "../../context/cars-context";
import { displayActions } from "../../store/display-store";
import { useDeleteCar } from "../../hooks/useDeleteCar";

const CarItem: FC<{ selectedCarItem: Car }> = (props) => {
  const dispatch = useDispatch();
  const carsCtx = useContext(CarsContext);

  const { mutate } = useDeleteCar(props.selectedCarItem.id);

  const cancelHandler = () => {
    carsCtx.clearSelectedCar();
    dispatch(displayActions.cars());
  };

  const deleteHandler = () => {
    carsCtx.clearSelectedCar();
    mutate();
  };

  console.log(props.selectedCarItem);

  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      marginTop={"2rem"}
      marginBottom={"2rem"}
    >
      <Card sx={{ width: "50%" }}>
        <CardHeader
          title={props.selectedCarItem?.model}
          subheader={props.selectedCarItem?.spec}
          titleTypographyProps={{ align: "center", fontWeight: "700" }}
          subheaderTypographyProps={{
            align: "center",
          }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardContent sx={{ align: "center" }}>
          <CarItemField
            label="Engine Type"
            value={props.selectedCarItem?.engineType}
          />
          <CarItemField
            label="Engine Size"
            value={props.selectedCarItem?.engineSize}
          />
          <CarItemField
            label="Doors"
            value={props.selectedCarItem?.doors.toString()}
          />
          <CarItemField label="Colour" value={props.selectedCarItem?.colour} />
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button variant={"contained"} onClick={deleteHandler}>
            Delete
          </Button>
          <Button onClick={cancelHandler}>Cancel</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CarItem;
