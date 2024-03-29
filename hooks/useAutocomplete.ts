import { useQuery } from "react-query";
import api from "lib/api";

const useAutocomplete = (query: string) => {
  const {
    isLoading,
    error: queryError,
    data: queryData,
  } = useQuery(["autocomplete", query], () => api.fetchAutocomplete(query), {
    enabled: query.length > 3,
    retry: false,
  });
  const error = queryError ?? null;
  const data = queryData && !error ? queryData : undefined;

  {
    return { data, error, isLoading };
  }
};

export default useAutocomplete;
