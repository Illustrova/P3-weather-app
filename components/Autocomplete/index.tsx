import styles from "./autocomplete.module.css";
import { City } from "lib/api";

export interface AutocompleteProps {
  cities?: City[];
  isShown: boolean;
  onClickCallback?: (value: string) => void;
}

export const Autocomplete = ({
  cities,
  isShown,
  onClickCallback,
  ...props
}: AutocompleteProps): JSX.Element => {
  return (
    <div
      className={`${styles.autocomplete} ${isShown ? styles.show : ""}`}
      {...props}
    >
      {cities && cities.length > 0 ? (
        <ul className={styles.autocomplete__list}>
          {cities.map(({ name, url, id }) => {
            return (
              <li key={id}>
                <button
                  aria-label="Select city"
                  className={styles.autocomplete__item}
                  onClick={() => onClickCallback && onClickCallback(url)}
                >
                  <span>{name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles.error}>Nothing found</p>
      )}
    </div>
  );
};
