"use client";
import React, { Fragment, useState } from "react";
import Navbar from "../../molecules/Navbar";
import style from "./index.module.scss";
import Button from "../../atoms/Button";
import Helper from "../../molecules/Helper";
import Footer from "../../molecules/Footer";
import Service from "../../molecules/Service";
import WhyUs from "../../molecules/WhyUs";
import Modal from "../../atoms/Modal";
import FloatingInput from "../../atoms/FloatingInput";

const Home = (props: any) => {
  const { pageData } = props;
  const { heroSection, whyUsSection, serviceSection, modalForm } = pageData;

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className={style.heroBanner}>
        <Navbar />
        <div className={style.content}>
          <h3>{heroSection?.name}</h3>
          <h1>{heroSection?.mainHead}</h1>
          <p>{heroSection?.quote}</p>
          <div className={style.btnContainer}>
            <Button>{heroSection?.buttons?.[0]}</Button>
            <Button variant={"outline"} onClick={toggleModal}>
              {heroSection?.buttons?.[1]}
            </Button>
          </div>
        </div>
      </div>
      <WhyUs sectionData={whyUsSection} />
      <Service sectionData={serviceSection} />
      <div className={style.background}></div>
      <Helper />
      <Footer />
      <Modal show={openModal} hide={toggleModal} close={modalForm?.closeIcon}>
        <div className={style.modalForm}>
          <h4>{modalForm?.heading}</h4>
          <p>{modalForm?.subHeading}</p>
          <form onSubmit={handleSubmit}>
            {modalForm?.inputFields?.map((input: any, index: number) => (
              <Fragment key={index}>
                <FloatingInput label={input?.label} name={input?.name} />
              </Fragment>
            ))}
            <Button onClick={toggleModal}>{modalForm?.btnText}</Button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Home;
