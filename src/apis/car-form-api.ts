import axios from "axios";
import CarFormData from "../models/CarFormData";

const firebaseUrl: string =
  "https://idt-react-training-default-rtdb.firebaseio.com/";

export const getCarFormData = (formDataUrl: string) => {
  const url: string = firebaseUrl + formDataUrl;

  return axios.get(url, { params: { _sort: "sequence" } }).then((res) => {
    let carFormData: CarFormData[] = [];

    for (const key in res.data) {
      const item = new CarFormData(
        key,
        res.data[key].sequence,
        res.data[key].description
      );
      carFormData.push(item);
    }

    return carFormData;
  });
};
