import DiseasePredictor from "@/src/components/organisms/DiseasePredictor";
import React from "react";
import pageData from "@/data/disease.json";

const Page = () => {
  return <DiseasePredictor pageData={pageData} />;
};

export default Page;
