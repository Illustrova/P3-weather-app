import { useQuery } from "react-query";
import api, { WeatherData } from "lib/api";

const useWeather = (query: string) => {
  const {
    isLoading,
    error: queryError,
    data: queryData,
  } = useQuery<WeatherData, Error>(["weather", query], () => api.fetchWeather(query), {
    enabled: !!query && query.length > 3,
    retry: false,
    cacheTime: 10000
  });
  const error = queryError ?? null;
  const data = queryData && !error ? queryData : undefined;

  {
    return { data, error, isLoading };
  }
};

export default useWeather;
