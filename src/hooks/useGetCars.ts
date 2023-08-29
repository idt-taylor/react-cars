import { useQuery } from "@tanstack/react-query";

import { getCars } from "../apis/cars-api";

import Car from "../models/Car";

export const useGetCars = () => {
  const filterCarsByStatus = (cars: Car[]) => {
    return cars.filter((car) => car.status === "A");
  };

  const carsQuery = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
    placeholderData: [],
    select: filterCarsByStatus,
  });

  return carsQuery;
};
