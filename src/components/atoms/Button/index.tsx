import styles from "./index.module.scss";

const Button = (props: any) => {
  const { children, onClick, variant, type = "button" } = props;
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
