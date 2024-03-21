import styles from "./index.module.scss";

const Button = (props: any) => {
  const { children, onClick, variant } = props;
  return (
    <button className={`${styles.btn} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
