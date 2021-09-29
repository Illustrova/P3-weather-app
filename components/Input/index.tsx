import styles from "./input.module.css";
import { useState } from "react";

export interface InputProps {
  id: string;
  className?: string;
  defaultValue?: string;
  label?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCallback?: (value: string) => void;
  placeholder?: string;
}

export const Input = ({
  id,
  label,
  placeholder,
  onChangeCallback,
  ...props
}: InputProps): JSX.Element => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value;
    if (!value || value.length < 1) return null;
    setValue(value);
    onChangeCallback && onChangeCallback(e.target?.value);
  };
  return (
    <div className={styles.input}>
      <input
        {...props}
        id={id}
        name={id}
        onChange={handleChange}
        value={value}
        placeholder={placeholder ? placeholder : " "}
        aria-label={label ?? "Type your city"}
      />
      <label className="sr-only" htmlFor={id}>
        {label ?? "city"}
      </label>
    </div>
  );
};
