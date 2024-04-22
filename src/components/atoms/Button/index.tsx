import styles from "./index.module.scss";

const Button = (props: any) => {
  const {
    children,
    onClick,
    variant,
    type = "button",
    loading = false,
  } = props;
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? <img src="/svg/loading.svg" alt="" /> : children}
    </button>
  );
};

export default Button;
