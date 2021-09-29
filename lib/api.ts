const apiKey = "2d7caae1cdf0492d8c7104926212909"; // I would normally store this in secrets of course,  just wanted to avoid exchanging env files

export interface City {
  id: string;
  name: string;
  region: string;
  country: string;
  url: string;
}

export interface WeatherDay {
  avgtemp_c?: number;
  maxwind_kph?: number;
  avghumidity?: number;
  condition: {
    text: string;
  };
}

export interface WeatherDayExtended extends WeatherDay {
  temp_c?: number;
  humidity?: number;
  wind_kph?: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  localtime: string;
}

export interface WeatherData {
  location: Location;
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
    wind_kph: number;
    humidity: number;
  };
  forecast: {
    forecastday: {
      date: string;
      day: WeatherDay;
    }[];
  };
}
const api = {
  fetchAutocomplete: async (query: string): Promise<City[]> => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}`,
      {
        method: "GET",
      }
    ).catch(() => {
      throw new Error("Cannot fetch cities");
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message ?? "Error fetching cities API");
    }
    return data;
  },
  fetchWeather: async (query: string): Promise<WeatherData> => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=4&aqi=no&alerts=no`,
      {
        method: "GET",
      }
    ).catch(() => {
      throw new Error("Cannot fetch weather");
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message ?? "Error fetching weather API");
    }
    return data;
  },
};

export default api;
