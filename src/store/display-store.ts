import { createSlice } from "@reduxjs/toolkit";

import { DisplayType } from "../types/DisplayType";

const initialDisplayState: DisplayType = {
  showCars: false,
  showNewCar: false,
  showMyCar: false,
  showSelectedCar: false,
};

const displaySlice = createSlice({
  name: "displayData",
  initialState: initialDisplayState,
  reducers: {
    newCar(state) {
      state.showCars = false;
      state.showNewCar = true;
      state.showMyCar = false;
      state.showSelectedCar = false;
    },
    cars(state) {
      state.showCars = true;
      state.showNewCar = false;
      state.showMyCar = false;
      state.showSelectedCar = false;
    },
    myCar(state) {
      state.showCars = false;
      state.showNewCar = false;
      state.showMyCar = true;
      state.showSelectedCar = false;
    },
    selectedCar(state) {
      state.showCars = false;
      state.showNewCar = false;
      state.showMyCar = false;
      state.showSelectedCar = true;
    },
    clearAll(state) {
      state.showCars = false;
      state.showNewCar = false;
      state.showMyCar = false;
      state.showSelectedCar = false;
    },
  },
});

export default displaySlice.reducer;

export const displayActions = displaySlice.actions;
