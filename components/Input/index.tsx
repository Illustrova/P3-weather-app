import styles from "./input.module.css";
import { useState } from "react";
// import
export interface InputProps {
  id: string;
  className?: string;
  defaultValue?: string;
  label?: string;
  errorMessage?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (value: string) => void;
  placeholder?: string;
}

export const Input = ({
  id,
  errorMessage,
  label,
  placeholder,
  ...props
}: InputProps): JSX.Element => {
  // function handleInvalid(event: React.FormEvent) {
  //   (event.currentTarget as HTMLInputElement).setCustomValidity(errorMessage);
  // }

  const [value, setValue] = useState("");

  return (
    <div className={styles.input}>
      <input
        {...props}
        id={id}
        name={id}
        // defaultValue={props.defaultValue}
        // type={props.type ?? "text"}
        // onChange={checkValue}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder ? placeholder : " "}
        aria-label={label ?? "Type your city"}
      />
      <label className="sr-only" htmlFor={id}>
        {label ?? "city"}
      </label>
      <div className={`${styles.errorMessage}`}>{errorMessage}</div>
    </div>
  );
};
