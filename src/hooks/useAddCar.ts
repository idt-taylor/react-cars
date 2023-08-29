import { useDispatch } from "react-redux";

import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { addCar } from "../apis/cars-api";
import { formActions } from "../store/form-store";
import { displayActions } from "../store/display-store";

export const useAddCar = () => {
  const dispatch = useDispatch();

  const queryClient: QueryClient = useQueryClient();
  return useMutation({
    mutationFn: addCar,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["cars"]);
      dispatch(formActions.complete());
      dispatch(displayActions.cars());
    },
  });
};
