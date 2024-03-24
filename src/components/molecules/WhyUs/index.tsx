import style from "./index.module.scss";
import whyUsData from "@/data/homePage.json";

const WhyUs = () => {
  return (
    <div className={style.whyUsSection}>
      <div className={style.leftContainer}>
        <div className={style.featuresContainer}>
          <div className={style.feature}>
            <img src={whyUsData?.whyUsSection?.features?.[0]?.icon} alt="" />
            <h4>{whyUsData?.whyUsSection?.features?.[0]?.title}</h4>
            <p>{whyUsData?.whyUsSection?.features?.[0]?.description}</p>
          </div>
          <div className={style.feature}>
            <img src={whyUsData?.whyUsSection?.features?.[1]?.icon} alt="" />
            <h4>{whyUsData?.whyUsSection?.features?.[1]?.title}</h4>
            <p>{whyUsData?.whyUsSection?.features?.[1]?.description}</p>
          </div>
        </div>
        <img src={whyUsData?.whyUsSection?.primaryImg} alt="" />
      </div>
      <div className={style.rightContainer}>
        <div className={style.heading}>
          <h2
            dangerouslySetInnerHTML={{
              __html: whyUsData?.whyUsSection?.heading,
            }}
          />
        </div>
        <div className={style.featuresContainer}>
          <div className={style.feature}>
            <img src={whyUsData?.whyUsSection?.features?.[2]?.icon} alt="" />
            <h4>{whyUsData?.whyUsSection?.features?.[2]?.title}</h4>
            <p>{whyUsData?.whyUsSection?.features?.[2]?.description}</p>
          </div>
          <img src={whyUsData?.whyUsSection?.secondaryImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
