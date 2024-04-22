"use client";
import React, { Fragment, useState } from "react";
import FormLayout from "../FormLayout";
import { fetchResult } from "@/src/utils/fetchApi";
import FloatingInput from "../../atoms/FloatingInput";
import Button from "../../atoms/Button";
import style from "./index.module.scss";

const VetRecommender = (props: any) => {
  const { pageData } = props;
  const [result, setResult] = useState<any>({});
  const [shift, setShift] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      city: formData.get("city"),
      sector: Number(formData.get("sector")),
    };

    if (payload.city && payload.sector) {
      const getVet = fetchResult(
        "https://fordoggoz.pythonanywhere.com/vet-recommendation",
        payload
      );

      getVet.then((a) => {
        setResult(a);
        setLoading(false);
        setShift(!shift);
      });
    }
  };

  return (
    <FormLayout
      shift={shift}
      setShift={setShift}
      pageData={pageData}
      result={
        <div className={style.result}>
          <h2>{pageData?.resultSection?.heading}</h2>
          <h3>{result?.nearestVet}</h3>
        </div>
      }
    >
      <div className={style.vetForm}>
        <div className={style.head}>
          <h2>{pageData?.formData?.heading}</h2>
          <p>{pageData?.formData?.subHeading}</p>
        </div>
        <form onSubmit={handleSubmit}>
          {!shift &&
            pageData?.formData?.inputs?.map((input: any) => (
              <Fragment key={input?.name}>
                <FloatingInput label={input?.label} name={input?.name} />
              </Fragment>
            ))}
          <Button loading={loading} type="submit">
            {pageData?.formData?.btnText}
          </Button>
        </form>
      </div>
    </FormLayout>
  );
};

export default VetRecommender;
