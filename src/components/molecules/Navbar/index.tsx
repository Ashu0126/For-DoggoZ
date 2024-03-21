"use client";
import React, { useState } from "react";
import style from "./index.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className={`${style.navbar} ${open ? style.active : ""}`}>
      <a href="/">
        <img className={style.logo} src="/svg/logo.svg" alt="" />
      </a>
      <div className={style.navTabs}>
        <ul>
          <a href="/">
            <li>why us</li>
          </a>
          <a href="/">
            <li>service</li>
          </a>
          <a href="/">
            <li>contact</li>
          </a>
        </ul>
        <img
          onClick={handleClick}
          className={style.close}
          src="/svg/close.svg"
          alt=""
        />
      </div>
      <img
        onClick={handleClick}
        className={style.menu}
        src="/svg/menu.svg"
        alt=""
      />
    </nav>
  );
};

export default Navbar;
