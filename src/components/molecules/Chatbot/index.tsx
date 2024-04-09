"use client";
import React, { useState } from "react";
import style from "./index.module.scss";
import FloatingInput from "../../atoms/FloatingInput";
import Button from "../../atoms/Button";

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`${style.chatbot} ${open ? style.active : ""}`}>
        <div className={style.chatbotHeader}>
          <div className={style.heading}>
            <h2>Chat with Zeus</h2>
          </div>
          <img onClick={handleToggle} src="/svg/close.svg" alt="" />
        </div>
        <div className={style.chatSection}>
          <p className={style.bot}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illum
            dicta ipsam aliquam recusandae
          </p>
          <p className={style.user}>Hello what you wanna ask</p>
          <p className={style.bot}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illum
            dicta ipsam aliquam recusandae
          </p>
          <p className={style.user}>Hello what you wanna ask</p>
          <p className={style.bot}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illum
            dicta ipsam aliquam recusandae
          </p>
          <p className={style.user}>Hello what you wanna ask</p>
          <p className={style.bot}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illum
            dicta ipsam aliquam recusandae
          </p>
          <p className={style.user}>Hello what you wanna ask</p>
        </div>
        <div className={style.inputBox}>
          <FloatingInput label={"Ask something"} />
          <Button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/60/60525.png"
              alt=""
            />
          </Button>
        </div>
      </div>
      <img
        onClick={handleToggle}
        className={`${style.chatbotBtn} ${!open ? style.active : ""}`}
        src="https://us.123rf.com/450wm/nada01/nada012303/nada01230303482/201202892-robot-logo-images-illustration-design.jpg?ver=6"
        alt=""
      />
    </>
  );
};

export default Chatbot;
