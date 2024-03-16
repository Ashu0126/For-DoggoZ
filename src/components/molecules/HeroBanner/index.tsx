import React, { Fragment } from "react";
import styles from "./index.module.scss";
import Button from "../../atoms/Button";

const HeroBanner = (props: any) => {
  const { companyName, heading, subHeading, buttons } = props;

  return (
    <section className={styles.heroBannerContainer}>
      <h3>{companyName}</h3>
      <h1>{heading}</h1>
      <p>{subHeading}</p>
      <span className={styles.btnContainer}>
        {buttons?.map((button: any) => (
          <Fragment key={button}>
            <Button>{button}</Button>
          </Fragment>
        ))}
      </span>
    </section>
  );
};

export default HeroBanner;
