import { useQuery } from "@tanstack/react-query";

export const useGetCarFormData = (
  queryKey: string,
  queryFn: any,
  url: string
) => {
  const carFormDataQuery = useQuery({
    queryKey: [{ queryKey }],
    queryFn: () => queryFn(url),
    placeholderData: [],
  });

  return carFormDataQuery;
};
