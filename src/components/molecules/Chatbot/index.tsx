"use client";
import React, { useState } from "react";
import style from "./index.module.scss";
import FloatingInput from "../../atoms/FloatingInput";
import Button from "../../atoms/Button";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState<any>([
    {
      user: "bot",
      msg: "Hi, I am Zeus your personal AI chatbot. Enter your queries below. 😄",
    },
  ]);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userMsg = formData.get("userMsg");
    console.log(typeof userMsg);
    setChat([...chat, { user: "user", msg: userMsg }]);
    e.target.reset();
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
          {chat.map((msg: any) => (
            <p className={style[msg?.user]} key={msg}>
              {msg.msg}
            </p>
          ))}
        </div>
        <form className={style.inputBox} onSubmit={handleSubmit}>
          <FloatingInput label={"Ask something"} name="userMsg" />
          <Button onClick>
            <img
              src="https://cdn-icons-png.flaticon.com/512/60/60525.png"
              alt=""
            />
          </Button>
        </form>
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
