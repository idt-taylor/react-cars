import { createContext, FC, useState } from "react";
import Car from "../models/Car";

type CarsContextType = {
  loggedIn: boolean;
  selectedCar: Car | undefined;
  login: () => void;
  logout: () => void;
  setSelectedCar: (car: Car) => void;
  clearSelectedCar: () => void;
};

export const CarsContext = createContext<CarsContextType>({
  loggedIn: false,
  selectedCar: undefined,
  login: () => {},
  logout: () => {},
  setSelectedCar: (car: Car) => {},
  clearSelectedCar: () => {},
});

const CarsContextProvider: FC<{ children: any }> = (props) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<Car>();

  const logInHandler = () => {
    setLoggedIn(true);
  };

  const logOutHandler = () => {
    setLoggedIn(false);
  };

  const selectedCarHandler = (car: Car) => {
    setSelectedCar(car);
  };

  const clearSelectedCarHandler = () => {
    setSelectedCar(undefined);
  };

  const contextValue: CarsContextType = {
    loggedIn: loggedIn,
    selectedCar: selectedCar,
    login: logInHandler,
    logout: logOutHandler,
    setSelectedCar: selectedCarHandler,
    clearSelectedCar: clearSelectedCarHandler,
  };

  return (
    <CarsContext.Provider value={contextValue}>
      {props.children}
    </CarsContext.Provider>
  );
};

export default CarsContextProvider;
