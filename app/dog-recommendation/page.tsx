import React from "react";
import pageData from "@/data/dog.json";
import DogRecommender from "@/src/components/organisms/DogRecommender";

const Page = () => {
  return <DogRecommender pageData={pageData} />;
};

export default Page;
