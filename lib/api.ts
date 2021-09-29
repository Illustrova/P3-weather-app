const apiKey = "2d7caae1cdf0492d8c7104926212909"; // I would normally store this in secrets of course,  just wanted to avoid exchanging env files

export interface Cities {
  id: string;
  name: string;
  region: string;
  country: string;
  url: string;
}

const api = {
  fetchAutocomplete: async (query: string): Promise<Cities[]> => {
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
};

export default api;
