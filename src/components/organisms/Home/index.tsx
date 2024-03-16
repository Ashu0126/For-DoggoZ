import HeroBanner from "../../molecules/HeroBanner";
import Navbar from "../../molecules/Navbar";
import styles from "./index.module.scss";

const Home = (props: any) => {
  const { navData, heroContent } = props;

  return (
    <div className={styles.home}>
      <main>
        <Navbar logo={navData?.logo} navTabs={navData?.navTabs} />
        <HeroBanner
          companyName={heroContent?.companyName}
          heading={heroContent?.heading}
          subHeading={heroContent?.subHeading}
          buttons={heroContent?.buttons}
        />
      </main>
    </div>
  );
};

export default Home;
