"use client";
import { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import style from "./index.module.scss";
import Carousel from "@/app/carousel/page";

const FormLayout = (props: any) => {
  const { pageData, children, result, shift, setShift } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const [type, setType] = useState("");

  useEffect(() => {
    setType(window.location.pathname.split("/")[1].split("-")[0]);
  }, []);

  return (
    <div className={`${style.page} ${type ? style[type] : ""}`}>
      <div className={style.container}>
        <div className={`${style.formContainer} ${shift ? style.slide : ""}`}>
          <div className={style.logo}>
            <img src={pageData?.logo?.icon} alt="" />
            <h3>{pageData?.logo?.text}</h3>
          </div>
          {!shift ? (
            children
          ) : (
            <div className={style.resultSection}>
              <Button onClick={() => setShift(!shift)}>
                <img src={pageData?.resultSection?.btnIcon} alt="" />
              </Button>
              <div className={style.result}>
                <h2>{pageData?.resultSection?.heading}</h2>
                <h3>{result}</h3>
              </div>
            </div>
          )}
        </div>
        <div
          className={`${style.formCarousel} ${
            shift ? style.shiftCarousel : ""
          }`}
        >
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
