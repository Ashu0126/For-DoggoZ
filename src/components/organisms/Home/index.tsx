"use client";
import React, { Fragment, useState } from "react";
import Navbar from "../../molecules/Navbar";
import style from "./index.module.scss";
import Button from "../../atoms/Button";
import Helper from "../../molecules/Helper";
import Service from "../../molecules/Service";
import WhyUs from "../../molecules/WhyUs";
import Modal from "../../atoms/Modal";
import FloatingInput from "../../atoms/FloatingInput";
import { fetchResult } from "@/src/utils/fetchApi";
import Chatbot from "../../molecules/Chatbot";
import WebSiteLoader from "../WebSiteLoader";

const Home = (props: any) => {
  const { pageData, navData } = props;
  const {
    heroSection,
    whyUsSection,
    serviceSection,
    modalForm,
    helperSection,
  } = pageData;

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [btnLoader, setBtnLoader] = useState(false);

  const handleSubmit = (e: any) => {
    setBtnLoader(true);
    e.preventDefault();
    const formData = new FormData(e.target);

    const payload: any = {};

    modalForm?.inputFields?.forEach((input: any) => {
      payload[input.name] = formData.get(input.name);
    });

    fetchResult(
      "https://fordoggoz.pythonanywhere.com/register-helper",
      payload
    ).then((res) => {
      if (res?.status === "success") {
        toggleModal();
        setBtnLoader(false);
      }
    });
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      {loading ? (
        <WebSiteLoader setLoading={setLoading} />
      ) : (
        <>
          <Chatbot />
          <div className={style.heroBanner}>
            <Navbar navData={navData} />
            <div className={style.content}>
              <h3>{heroSection?.name}</h3>
              <h1>{heroSection?.mainHead}</h1>
              <p>{heroSection?.quote}</p>
              <div className={style.btnContainer}>
                <Button>
                  <a href="#helper">{heroSection?.buttons?.[0]}</a>
                </Button>
                <Button variant={"outline"} onClick={toggleModal}>
                  {heroSection?.buttons?.[1]}
                </Button>
              </div>
            </div>
          </div>
          <WhyUs sectionData={whyUsSection} />
          <Service sectionData={serviceSection} />
          <div className={style.background}></div>
          <Helper helperData={helperSection} />
          <Modal
            show={openModal}
            hide={toggleModal}
            close={modalForm?.closeIcon}
          >
            <div className={style.modalForm}>
              <h4>{modalForm?.heading}</h4>
              <p>{modalForm?.subHeading}</p>
              <form onSubmit={handleSubmit}>
                {modalForm?.inputFields?.map((input: any, index: number) => (
                  <Fragment key={index}>
                    <FloatingInput label={input?.label} name={input?.name} />
                  </Fragment>
                ))}
                <Button loading={btnLoader} type={"submit"}>
                  {modalForm?.btnText}
                </Button>
              </form>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default Home;
