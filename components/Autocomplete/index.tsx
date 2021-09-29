import styles from "./autocomplete.module.css";
import { Cities } from "lib/api";

export interface AutocompleteProps {
  cities?: Cities[];
  isShown: boolean;
}

export const Autocomplete = ({
  cities,
  isShown,
  ...props
}: AutocompleteProps): JSX.Element => {
  return (
    <div
      className={`${styles.autocomplete} ${isShown ? styles.show : ""}`}
      {...props}
    >
      {cities && cities.length > 0 ? (
        <ul className={styles.autocomplete__list}>
          {cities.map(({ name, url }) => {
            return (
              <li key={url}>
                <button
                  aria-label="Select city"
                  className={styles.autocomplete__item}
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
