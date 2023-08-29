import { useQuery } from "@tanstack/react-query";

import { getCar } from "../apis/cars-api";

export const useGetCars = (id: string) => {
  const carQuery = useQuery({
    queryKey: ["cars", id],
    queryFn: () => getCar(id),
  });

  return carQuery;
};

export default useGetCars;
