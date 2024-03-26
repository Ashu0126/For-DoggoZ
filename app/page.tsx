import Home from "@/src/components/organisms/Home";
import pageData from "@/data/homePage.json";

const Page = () => {
  return <Home pageData={pageData} />;
};

export default Page;
