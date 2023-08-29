import { FC } from "react";

import { Card, CardContent, CardHeader, Grid } from "@mui/material";

import { useGetCars } from "../../hooks/useGetCars";
import CarListItem from "./CarListItem";

import classes from "./Cars.module.css";

const Cars: FC = () => {
  const carsQuery = useGetCars();
  const carsData = carsQuery.data;

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
          title="Cars"
          titleTypographyProps={{ align: "center", fontWeight: "700" }}
          subheader="Select a car and see the full spec"
          subheaderTypographyProps={{ align: "center" }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardContent>
          <ul className={classes.car}>
            {carsData && carsData.map((car) => <CarListItem car={car} />)}
          </ul>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Cars;
