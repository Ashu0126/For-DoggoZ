import React from "react";
import style from "./page.module.scss";

const Page = () => {
  return (
    <div className={style.carouselContainer}>
      <div className={style.carousel}>
        <img src="/img/back.webp" alt="" />
        <img src="/img/back.webp" alt="" />
        <img src="/img/back.webp" alt="" />
      </div>
    </div>
  );
};

export default Page;
