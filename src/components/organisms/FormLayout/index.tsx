"use client";
import { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import style from "./index.module.scss";
import Carousel from "@/src/components/molecules/Carousel";

const FormLayout = (props: any) => {
  const { pageData, children, result, shift, setShift } = props;
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
              {result}
            </div>
          )}
        </div>
        <div
          className={`${style.formCarousel} ${
            shift ? style.shiftCarousel : ""
          }`}
        >
          <Carousel slides={pageData?.carousel} />
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
