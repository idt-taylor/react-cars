import { CarFormDataType } from "../types/CarFormDataType";

class Car {
  status: string;
  model: string;
  spec: string;
  engineType: string;
  engineSize: string;
  doors: number;
  colour: string;

  constructor(newCarData: CarFormDataType) {
    this.status = "A";
    this.model = newCarData.model;
    this.spec = newCarData.spec;
    this.engineType = newCarData.engineType;
    this.engineSize = newCarData.engineSize;
    this.doors = newCarData.doors;
    this.colour = newCarData.colours;
  }
}

export default Car;
