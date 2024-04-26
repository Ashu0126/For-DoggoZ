import BreedClassifier from "@/src/components/organisms/BreedClassifier";
import pageData from "@/data/classify.json";

const Page = () => {
  return <BreedClassifier pageData={pageData} />;
};

export default Page;
