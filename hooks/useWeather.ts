import { useQuery } from "react-query";
import api from "lib/api";

const useWeather = (query: string) => {
  const {
    isLoading,
    error: queryError,
    data: queryData,
  } = useQuery(["weather", query], () => api.fetchWeather(query), {
    enabled: !!query && query.length > 3,
    retry: false,
  });
  const error = queryError ?? null;
  const data = queryData && !error ? queryData : undefined;

  {
    return { data, error, isLoading };
  }
};

export default useWeather;
