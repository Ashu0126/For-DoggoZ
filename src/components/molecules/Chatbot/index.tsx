import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.scss";
import FloatingInput from "../../atoms/FloatingInput";
import Button from "../../atoms/Button";
import { fetchResult } from "@/src/utils/fetchApi";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([
    {
      user: "bot",
      msg: "Hi, I am Zeus your personal AI chatbot. Enter your queries below. 😄",
    },
  ]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userMsg = formData.get("userMsg");
    setChat((prevChat: any) => [...prevChat, { user: "user", msg: userMsg }]);
    const payload = { msg: userMsg };
    try {
      const res = await fetchResult(
        "http://127.0.0.1:8800/bot-response",
        payload
      );
      setChat((prevChat) => [...prevChat, { user: "bot", msg: res?.response }]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
    }
    e.target.reset();
  };

  const chatSectionRef = useRef<any>(null);

  // Scroll chat section to bottom on chat update
  useEffect(() => {
    if (chatSectionRef.current) {
      chatSectionRef.current.scrollTop = chatSectionRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <>
      <div className={`${style.chatbot} ${open ? style.active : ""}`}>
        <div className={style.chatbotHeader}>
          <div className={style.heading}>
            <h2>Chat with Zeus</h2>
          </div>
          <img onClick={handleToggle} src="/svg/close.svg" alt="" />
        </div>
        <div className={style.chatSection} ref={chatSectionRef}>
          {chat.map((msg, index) => (
            <p className={style[msg.user]} key={index}>
              {msg.msg}
            </p>
          ))}
        </div>
        <form className={style.inputBox} onSubmit={handleSubmit}>
          <FloatingInput label={"Ask something"} name="userMsg" />
          <Button type="submit">
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
