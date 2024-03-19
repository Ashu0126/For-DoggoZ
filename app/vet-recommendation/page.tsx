"use client";
import Button from "@/src/components/atoms/Button";
import FloatingInput from "@/src/components/atoms/FloatingInput";
import style from "./page.module.scss";
import { useState } from "react";
import { fetchResult } from "@/src/utils/fetchApi";

const Page = () => {
  const [result, setResult] = useState<any>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      city: formData.get("city"),
      sector: Number(formData.get("sector")),
    };

    const getVet = fetchResult(
      "https://fordoggoz.pythonanywhere.com/vet-recommendation",
      payload
    );

    getVet.then((a) => setResult(a));
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <FloatingInput label={"Enter city"} name={"city"} />
        <FloatingInput label={"Enter sector"} name={"sector"} />
        <Button type={"submit"}>{"Search vet"}</Button>
      </form>
      <div className={style.result}>
        <h3>Nearest vet</h3>
        <p>{result?.nearestVet}</p>
      </div>
    </>
  );
};

export default Page;
