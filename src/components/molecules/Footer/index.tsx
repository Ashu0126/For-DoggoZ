import style from "./index.module.scss";
import footerData from "@/data/footerData.json";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <div className={style.logo}>
          <img src={footerData?.logo} alt="" />
          <h3>{footerData?.companyName}</h3>
        </div>
        <div className={style.aboutUs}>
          <h4>{footerData?.aboutUs?.heading}</h4>
          <p>{footerData?.aboutUs?.description}</p>
        </div>
      </div>
      <p className={style.copyright}>{footerData?.copyright}</p>
    </footer>
  );
};

export default Footer;
