import styles from "./forecast.module.css";
import React from "react";
import { WeatherDay } from "lib/api";

type ForecastProps = {
  data: {
    forecastday: {
      date: string;
      day: WeatherDay;
    }[];
  };
};
export const Forecast = ({ data }: ForecastProps): JSX.Element => {
  const days = data.forecastday.slice(1, data.forecastday.length); //remove first item, because it is a current day

  return (
    <div className={styles.forecast}>
      <table className={styles.forecast__table}>
        <thead>
          <tr>
            <th colSpan={5} className={styles.forecast__header}>
              Forecast
            </th>
          </tr>
        </thead>
        <tbody>
          {days.map((dayData) => {
            const date = dayData.date;
            const day = dayData.day;
            const temperature = day.avgtemp_c
              ? `${day.avgtemp_c.toString()}°`
              : "";
            const condition = day.condition?.text;
            const humidity = day.avghumidity
              ? `${day.avghumidity.toString()}%`
              : "";
            const wind = day.maxwind_kph
              ? `${day.maxwind_kph.toString()} km/h`
              : "";

            return (
              <tr className={styles.forecast__row} key={date}>
                <td className={styles.forecast__item}>{date}</td>
                <td className={styles.forecast__item}>{temperature}</td>
                <td className={styles.forecast__item}>{wind}</td>
                <td className={styles.forecast__ritem}>{condition}</td>
                <td className={styles.forecast__item}>{humidity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
