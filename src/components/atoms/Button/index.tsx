import styles from "./index.module.scss";

const Button = (props: any) => {
  const { children, onClick } = props;
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
