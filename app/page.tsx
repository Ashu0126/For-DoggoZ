import Home from "@/src/components/organisms/Home";
import pageData from "@/data/homePage.json";
import navData from "@/data/navData.json";

const Page = () => {
  return <Home pageData={pageData} navData={navData} />;
};

export default Page;
