import VetRecommender from "@/src/components/organisms/VetRecommender";
import pageData from "./../../data/vet.json";

const Page = () => {
  return <VetRecommender pageData={pageData} />;
};

export default Page;
