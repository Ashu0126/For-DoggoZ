import React from "react";
import style from "./index.module.scss";
import serviceData from "@/data/homePage.json";

const Service = () => {
  return (
    <div className={style.serviceSection}>
      <div className={style.serviceHeader}>
        <div className={style.serviceHeading}>
          <h5>{serviceData?.serviceSection?.heading}</h5>
          <h2
            dangerouslySetInnerHTML={{
              __html: serviceData?.serviceSection?.subHeading,
            }}
          />
        </div>
        <p>{serviceData?.serviceSection?.description}</p>
      </div>
      <div className={style.serviceContainer}>
        <ul>
          {serviceData?.serviceSection?.services?.map(
            (service: any, index: number) => (
              <a key={service?.name} href={service?.link}>
                <li>
                  <p>{service?.name}</p>
                  <img
                    className={style.go}
                    src={serviceData?.serviceSection?.goIcon}
                    alt=""
                  />
                  <img
                    className={style.img}
                    style={{
                      marginLeft: `${
                        serviceData?.serviceSection?.services?.length - index
                      }rem`,
                    }}
                    src={service?.img}
                    alt=""
                  />
                </li>
              </a>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Service;
