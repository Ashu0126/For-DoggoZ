"use client";
import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import Footer from "../../molecules/Footer";
import style from "./index.module.scss";

const FormLayout = (props: any) => {
  const { pageData, children, result, shift, setShift } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const [type, setType] = useState("");

  useEffect(() => {
    setType(window.location.pathname.split("/")[1].split("-")[0]);
  }, []);

  return (
    <>
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
                  <h3>{result?.nearestVet}</h3>
                </div>
              </div>
            )}
          </div>
          <div
            className={`${style.carouselContainer} ${
              shift ? style.carouselSlide : ""
            }`}
          >
            <div className={style.carousel}>
              {pageData?.carousel?.map((item: any, index: any) => (
                <img
                  key={`_${index}`}
                  src={item}
                  className={activeIndex === index ? style.show : ""}
                  alt=""
                />
              ))}
            </div>
            <div className={style.carouselBtn}>
              {pageData?.carousel?.map((_: any, index: any) => (
                <span
                  key={`_${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={activeIndex === index ? style.active : ""}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormLayout;
