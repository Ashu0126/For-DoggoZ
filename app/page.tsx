import Home from "@/src/components/organisms/Home";
import pageData from "./../data/homePage.json";

const Page = () => {
  return <Home navData={pageData?.navbar} heroContent={pageData?.heroBanner} />;
};

export default Page;
