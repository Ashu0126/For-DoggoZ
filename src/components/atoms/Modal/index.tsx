import style from "./index.module.scss";

const Modal = (props: any) => {
  const { show, children, footer, hide, close } = props;

  const handleClose = () => {
    hide();
  };

  return (
    <div className={`${style.modal} ${show ? style.active : ""}`}>
      <div className={style.header}>
        <img onClick={handleClose} src={close} alt="" />
      </div>
      <div className={style.body}>{children}</div>
      <div className={style.footer}>{footer}</div>
    </div>
  );
};

export default Modal;
