"use client";
import style from "./page.module.scss";
import { Fragment, useEffect, useState } from "react";
import { fetchResult } from "@/src/utils/fetchApi";
import FloatingInput from "@/src/components/atoms/FloatingInput";
import Button from "@/src/components/atoms/Button";
import Footer from "@/src/components/molecules/Footer";
import pageData from "./../../data/vet.json";

const Page = () => {
  const [result, setResult] = useState<any>({});
  const [shift, setShift] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [type, setType] = useState("");

  useEffect(() => {
    setType(window.location.pathname.split("/")[1].split("-")[0]);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      city: formData.get("city"),
      sector: Number(formData.get("sector")),
    };

    if (payload.city && payload.sector) {
      const getVet = fetchResult(
        "https://fordoggoz.pythonanywhere.com/vet-recommendation",
        payload
      );

      getVet.then((a) => {
        setResult(a);
      });
    }
  };

  useEffect(() => {
    if (Object.values(result).length > 0) {
      setShift(!shift);
    }
  }, [result]);

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
              <>
                <div className={style.head}>
                  <h2>{pageData?.formData?.heading}</h2>
                  <p>{pageData?.formData?.subHeading}</p>
                </div>
                <form onSubmit={handleSubmit}>
                  {!shift && (
                    <>
                      {/* <SelectDropDown
                    label={"Select city"}
                    options={["Delhi", "Faridabad", "Gurgaon", "Noida"]}
                  /> */}
                      {pageData?.formData?.inputs?.map((input: any) => (
                        <Fragment key={input?.name}>
                          <FloatingInput
                            label={input?.label}
                            name={input?.name}
                          />
                        </Fragment>
                      ))}
                    </>
                  )}
                  <Button>{pageData?.formData?.btnText}</Button>
                </form>
              </>
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

export default Page;
