import style from "./index.module.scss";

const Service = (props: any) => {
  const { sectionData } = props;

  return (
    <div className={style.serviceSection}>
      <div className={style.serviceHeader}>
        <div className={style.serviceHeading}>
          <h5>{sectionData?.heading}</h5>
          <h2
            dangerouslySetInnerHTML={{
              __html: sectionData?.subHeading,
            }}
          />
        </div>
        <p>{sectionData?.description}</p>
      </div>
      <div className={style.serviceContainer}>
        <ul>
          {sectionData?.services?.map((service: any, index: number) => (
            <a key={service?.name} href={service?.link}>
              <li>
                <p>{service?.name}</p>
                <img className={style.go} src={sectionData?.goIcon} alt="" />
                <img
                  className={style.img}
                  style={{
                    marginLeft: `${sectionData?.services?.length - index}rem`,
                  }}
                  src={service?.img}
                  alt=""
                />
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;
