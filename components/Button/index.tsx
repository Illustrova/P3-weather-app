import styles from "./button.module.css";
export type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export const Button = ({
  onClick,
  children,
  title,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
      title={title}
      aria-label={title}
      {...props}
    >
      {children}
    </button>
  );
};
