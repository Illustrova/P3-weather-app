import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Autocomplete } from "components/Autocomplete";
import { Weather } from "components/Weather";
import { Forecast } from "components/Forecast";
import { Loader } from "components/Loader";

import useAutocomplete from "hooks/useAutocomplete";
import useWeather from "hooks/useWeather";
import { useState, useEffect } from "react";
import { isError } from "lib/helpers";

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("");
  const [isAutocompleteShown, setAutocompleteShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    data: cities,
    error,
    isLoading: isLoadingAutocomplete,
  } = useAutocomplete(searchQuery);
  const {
    data: weatherData,
    error: weatherError,
    isLoading: isLoadingWeather,
  } = useWeather(city);

  useEffect(() => {
    if (isError(error)) setErrorMessage(error.message);
  }, [error]);

  useEffect(() => {
    if (isError(weatherError)) setErrorMessage(weatherError.message);
  }, [weatherError]);

  const handleInput = (value: string) => {
    setErrorMessage(""); //reset error message
    if (!value || value.length < 4) {
      setAutocompleteShown(false);
      setErrorMessage("Type at least 4 letters");
    }
    setAutocompleteShown(true);
    setSearchQuery(value);
  };

  const updateWeather = (value: string) => {
    setCity(value);
    setAutocompleteShown(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Weather app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.search}>
          <Input
            id="city"
            placeholder="Type your city..."
            onChangeCallback={handleInput}
            onSubmitCallback={updateWeather}
          />
          <Button onClick={() => updateWeather(searchQuery)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <path d="M225.474 0C101.151 0 0 101.151 0 225.474c0 124.33 101.151 225.474 225.474 225.474 124.33 0 225.474-101.144 225.474-225.474C450.948 101.151 349.804 0 225.474 0zm0 409.323c-101.373 0-183.848-82.475-183.848-183.848S124.101 41.626 225.474 41.626s183.848 82.475 183.848 183.848-82.475 183.849-183.848 183.849z" />
              <path d="M505.902 476.472 386.574 357.144c-8.131-8.131-21.299-8.131-29.43 0-8.131 8.124-8.131 21.306 0 29.43l119.328 119.328A20.74 20.74 0 0 0 491.187 512a20.754 20.754 0 0 0 14.715-6.098c8.131-8.124 8.131-21.306 0-29.43z" />
            </svg>
          </Button>
        </div>
        <div className={styles.error}>{errorMessage}</div>
        <div className={styles.content}>
          {isLoadingAutocomplete || isLoadingWeather ? <Loader /> : null}
          <Autocomplete
            cities={cities}
            isShown={isAutocompleteShown}
            onClickCallback={updateWeather}
          />
          {weatherData && (
            <>
              <Weather {...weatherData} />
              <Forecast data={weatherData.forecast} />
            </>
          )}
        </div>
      </main>
      <footer className={styles.footer}>
        Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Weather API">
          WeatherAPI.com
        </a>
        . Design by{" "}
        <a href="https://dribbble.com/shots/6680361-Dribbble-Daily-UI-37-Weather-2">
          Neal Hampton
        </a>
      </footer>
    </div>
  );
};

export default Home;
