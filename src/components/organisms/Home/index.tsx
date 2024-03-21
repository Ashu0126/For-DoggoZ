import React from "react";
import Navbar from "../../molecules/Navbar";
import style from "./index.module.scss";
import Button from "../../atoms/Button";

const Home = () => {
  return (
    <div className={style.heroBanner}>
      <Navbar />
      <div className={style.content}>
        <h3>ForDoggoZ</h3>
        <h1>An Initiative</h1>
        <p>{`"We care because you care"`}</p>
        <div className={style.btnContainer}>
          <Button>Need help?</Button>
          <Button>Register as helper</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
