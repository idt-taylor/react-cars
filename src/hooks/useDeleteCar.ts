import { useDispatch } from "react-redux";

import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { deleteCar } from "../apis/cars-api";
import { displayActions } from "../store/display-store";

export const useDeleteCar = (id: string) => {
  const dispatch = useDispatch();

  const queryClient: QueryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteCar(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["cars"]);
      dispatch(displayActions.cars());
    },
  });
};
