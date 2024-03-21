import React from "react";
import style from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <div className={style.logo}>
          <img src="/svg/logo.svg" alt="" />
          <h3>ForDoggoZ</h3>
        </div>
        <div className={style.aboutUs}>
          <h4>About Us</h4>
          <p>
            {`" For DoggoZ - Your one-stop destination for credible information
            and resources on everything related to dogs "`}
          </p>
        </div>
      </div>
      <p className={style.copyright}>
        2022-24 Copyright &copy; All Rights Reserved | For DoggoZ
      </p>
    </footer>
  );
};

export default Footer;
