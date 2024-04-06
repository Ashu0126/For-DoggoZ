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
    <div className={`${style.chatbot} ${open ? style.active : ""}`}>
      <div className={style.chatbotHeader}>
        <div className={style.left}>
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/89/82/concept-of-facial-animal-avatar-chatbot-dog-graph-vector-42548982.jpg"
            alt=""
          />
          <div className={style.heading}>
            <p>Chat with</p>
            <h2>Zeus</h2>
          </div>
        </div>
        <img onClick={handleToggle} src="/img/down.png" alt="" />
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
  );
};

export default Chatbot;
