import { FC, useContext } from "react";
import { useSelector } from "react-redux";

import { StateType } from "./types/StateType";
import CarAppBar from "./components/AppBar/CarAppBar";
import NewCarFormWrapper from "./components/NewCarForms/NewCarFormWrapper";
import Cars from "./components/Cars/Cars";
import CarItem from "./components/Cars/CarItem";

import { CarsContext } from "./context/cars-context";

import "./App.css";

const App: FC = () => {
  const carsCtx = useContext(CarsContext);
  const showCars = useSelector((state: StateType) => state.display.showCars);
  const showNewCar = useSelector(
    (state: StateType) => state.display.showNewCar
  );
  const showMyCar = useSelector((state: StateType) => state.display.showMyCar);
  const showSelectedCar = useSelector(
    (state: StateType) => state.display.showSelectedCar
  );

  return (
    <>
      <CarAppBar />
      {carsCtx.loggedIn && (showNewCar || showMyCar) && <NewCarFormWrapper />}
      {showSelectedCar && carsCtx.selectedCar && (
        <CarItem selectedCarItem={carsCtx.selectedCar} />
      )}
      {showCars && <Cars />}
    </>
  );
};

export default App;
