"use client";
import { useEffect } from "react";
import style from "./index.module.scss";

const Modal = (props: any) => {
  const { show, children, footer, hide, close } = props;

  const handleClose = () => {
    hide();
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  return (
    <div className={`${style.modalBack} ${show ? style.active : ""}`}>
      <div className={`${style.modal}`}>
        <div className={style.header}>
          <img onClick={handleClose} src={close} alt="" />
        </div>
        <div className={style.body}>{children}</div>
        <div className={style.footer}>{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
