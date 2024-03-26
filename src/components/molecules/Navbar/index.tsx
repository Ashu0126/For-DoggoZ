"use client";
import { useState } from "react";
import style from "./index.module.scss";

const Navbar = (props: any) => {
  const { navData } = props;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className={`${style.navbar} ${open ? style.active : ""}`}>
      <a href={navData?.homeLink}>
        <img className={style.logo} src={navData?.logo} alt="" />
      </a>
      <div className={style.navTabs}>
        <ul>
          {navData?.navTabs?.map((tab: any) => (
            <a key={tab?.name} href={tab?.link}>
              <li>{tab?.name}</li>
            </a>
          ))}
        </ul>
        <img
          onClick={handleClick}
          className={style.close}
          src={navData?.closeIcon}
          alt=""
        />
      </div>
      <img
        onClick={handleClick}
        className={style.menu}
        src={navData?.menuIcon}
        alt=""
      />
    </nav>
  );
};

export default Navbar;
