import styles from "./input.module.css";
import React, { useState } from "react";

export interface InputProps {
  id: string;
  className?: string;
  defaultValue?: string;
  label?: string;
  onChangeCallback?: (value: string) => void;
  onSubmitCallback?: (value: string) => void;
  placeholder?: string;
}

export const Input = ({
  id,
  label,
  placeholder,
  onChangeCallback,
  onSubmitCallback,
  ...props
}: InputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value;
    value ? setInputValue(value) : setInputValue("");
    onChangeCallback && onChangeCallback(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSubmitCallback && onSubmitCallback(inputValue);
    }
    return null;
  };
  return (
    <>
      <input
        {...props}
        id={id}
        name={id}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputValue}
        placeholder={placeholder ? placeholder : " "}
        aria-label={label ?? "Type your city"}
        className={styles.input}
      />
      <label className="sr-only" htmlFor={id}>
        {label ?? "city"}
      </label>
    </>
  );
};
