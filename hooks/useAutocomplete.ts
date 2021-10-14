import { useQuery } from "react-query";
import api, { City } from "lib/api";

const useAutocomplete = (query: string) => {
  const {
    isLoading,
    error: queryError,
    data: queryData,
  } = useQuery<City[], Error>(["autocomplete", query], () => api.fetchAutocomplete(query), {
    enabled: query.length > 3,
    retry: false,
    staleTime: 30000
  });
  const error = queryError ?? null;
  const data = queryData && !error ? queryData : undefined;

  {
    return { data, error, isLoading };
  }
};

export default useAutocomplete;
