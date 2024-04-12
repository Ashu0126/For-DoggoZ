import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.scss";
import FloatingInput from "../../atoms/FloatingInput";
import Button from "../../atoms/Button";
import { fetchResult } from "@/src/utils/fetchApi";
import chatbotData from "@/data/chatbot.json";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([chatbotData?.openingMsg]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userMsg = formData.get(chatbotData?.inputField?.name);
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
            <h2>{chatbotData?.heading}</h2>
          </div>
          <img onClick={handleToggle} src={chatbotData?.closeBtn} alt="close" />
        </div>
        <div className={style.chatSection} ref={chatSectionRef}>
          {chat.map((msg, index) => (
            <p className={style[msg.user]} key={index}>
              {msg.msg}
            </p>
          ))}
        </div>
        <form className={style.inputBox} onSubmit={handleSubmit}>
          <FloatingInput
            label={chatbotData?.inputField?.label}
            name={chatbotData?.inputField?.name}
          />
          <Button type="submit">
            <img src={chatbotData?.btnImg} alt="" />
          </Button>
        </form>
      </div>
      <img
        onClick={handleToggle}
        className={`${style.chatbotBtn} ${!open ? style.active : ""}`}
        src={chatbotData?.chatBotIcon}
        alt="icon"
      />
    </>
  );
};

export default Chatbot;
