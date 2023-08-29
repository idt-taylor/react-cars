import axios from "axios";
import Car from "../models/Car";
import NewCar from "../models/NewCar";

const firebaseUrl: string =
  "https://idt-react-training-default-rtdb.firebaseio.com/";

export const getCars = () => {
  const carsUrl: string = "cars.json";
  const url: string = firebaseUrl + carsUrl;

  return axios.get(url).then((res) => {
    let cars: Car[] = [];

    for (const key in res.data) {
      const car = new Car(
        key,
        res.data[key].status,
        res.data[key].model,
        res.data[key].spec,
        res.data[key].engineType,
        res.data[key].engineSize,
        res.data[key].doors,
        res.data[key].colour
      );
      cars.push(car);
    }

    return cars;
  });
};

export const getCar = (id: string) => {
  const carUrl: string = "cars/" + id + ".json";
  const url: string = firebaseUrl + carUrl;

  return axios.get(url).then((res) => {
    const car = new Car(
      id,
      res.data.status,
      res.data.model,
      res.data.spec,
      res.data.engineType,
      res.data.engineSize,
      res.data.doors,
      res.data.colour
    );

    return car;
  });
};

export const addCar = (carData: NewCar) => {
  const carsUrl: string = "cars.json";
  const url: string = firebaseUrl + carsUrl;

  return axios.post(url, carData).then((res) => {
    return res.data;
  });
};

export const deleteCar = (id: string) => {
  const carUrl: string = "cars/" + id + ".json";
  const url: string = firebaseUrl + carUrl;

  const body = { status: "D" };

  return axios.patch(url, body).then((res) => {
    return res.data;
  });
};
