import styles from "./weather.module.css";
import React from "react";
import { WeatherDayExtended, Location } from "lib/api";
import { getFormattedDate } from "lib/helpers";

type WeatherProps = {
  location: Location;
  current: WeatherDayExtended;
};

export const Weather = ({ location, current }: WeatherProps): JSX.Element => {
  const city = location.name;

  const date = getFormattedDate(location.localtime);
  const temperature = current.temp_c ? `${current.temp_c.toString()}°` : "";
  const condition = current.condition.text;
  const humidity = current.humidity ? `${current.humidity.toString()}%` : "";
  const wind = current.wind_kph
    ? `${current.wind_kph.toString()} km/h`
    : "0km/h";
  return (
    <div className={styles.weather}>
      <div className={styles.city}>{city}</div>
      <div className={styles.date}>{date}</div>
      <div className={styles.temperature}>{temperature}</div>
      <div className={styles.condition}>{condition}.</div>
      <div className={styles.details}>
        <div className={styles.wind}>Wind: {wind}</div>
        <div className={styles.humidity}>Humidity: {humidity}</div>
      </div>
    </div>
  );
};
