"use client";
import { fetchResult } from "@/src/utils/fetchApi";
import React, { Fragment, useState } from "react";
import FormLayout from "../FormLayout";
import style from "./index.module.scss";
import FloatingInput from "../../atoms/FloatingInput";
import Button from "../../atoms/Button";

const DiseasePredictor = (props: any) => {
  const { pageData } = props;
  const [result, setResult] = useState<any>({});
  const [shift, setShift] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      symptoms: [
        formData.get("symtom1"),
        formData.get("symtom2"),
        formData.get("symtom3"),
      ],
    };

    if (payload.symptoms) {
      const getVet = fetchResult(
        "https://fordoggoz.pythonanywhere.com/disease-prediction",
        payload
      );

      getVet.then((a) => {
        setResult(a);
        setShift(!shift);
      });
    }
  };

  return (
    <FormLayout
      result={result?.name + " : " + result?.description}
      shift={shift}
      setShift={setShift}
      pageData={pageData}
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
          <Button type="submit">{pageData?.formData?.btnText}</Button>
        </form>
      </div>
    </FormLayout>
  );
};

export default DiseasePredictor;
