import style from "./index.module.scss";

const WhyUs = (props: any) => {
  const { sectionData } = props;

  return (
    <div className={style.whyUsSection} id="whyUs">
      <div className={style.leftContainer}>
        <div className={style.featuresContainer}>
          <div className={style.feature}>
            <img src={sectionData?.features?.[0]?.icon} alt="" />
            <h4>{sectionData?.features?.[0]?.title}</h4>
            <p>{sectionData?.features?.[0]?.description}</p>
          </div>
          <div className={style.feature}>
            <img src={sectionData?.features?.[1]?.icon} alt="" />
            <h4>{sectionData?.features?.[1]?.title}</h4>
            <p>{sectionData?.features?.[1]?.description}</p>
          </div>
        </div>
        <img src={sectionData?.primaryImg} alt="" />
      </div>
      <div className={style.rightContainer}>
        <div className={style.heading}>
          <h2
            dangerouslySetInnerHTML={{
              __html: sectionData?.heading,
            }}
          />
        </div>
        <div className={style.featuresContainer}>
          <div className={style.feature}>
            <img src={sectionData?.features?.[2]?.icon} alt="" />
            <h4>{sectionData?.features?.[2]?.title}</h4>
            <p>{sectionData?.features?.[2]?.description}</p>
          </div>
          <img src={sectionData?.secondaryImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
