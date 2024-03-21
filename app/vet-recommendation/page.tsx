"use client";
import style from "./page.module.scss";
import { useEffect, useState } from "react";
import { fetchResult } from "@/src/utils/fetchApi";
import FloatingInput from "@/src/components/atoms/FloatingInput";
import Button from "@/src/components/atoms/Button";

const Page = () => {
  const [result, setResult] = useState<any>({});
  const [shift, setShift] = useState(false);

  const handleSubmit = (e: any) => {
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
      });
    }
  };

  useEffect(() => {
    if (Object.values(result).length > 0) {
      setShift(!shift);
    }
  }, [result]);

  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={`${style.formContainer} ${shift ? style.slide : ""}`}>
          <div className={style.logo}>
            <img src="/svg/logo.svg" alt="" />
            <h3>ForDoggoZ</h3>
          </div>
          <div className={style.head}>
            <h2>
              {shift ? "Nearest Vet" : "Find the nearest veterinary clinic"}
            </h2>
            {!shift && <p>Fill the form below.</p>}
            {shift && <h3>{result?.nearestVet}</h3>}
          </div>
          <form onSubmit={handleSubmit}>
            {!shift && (
              <>
                <FloatingInput label={"Enter city"} name={"city"} />
                <FloatingInput label={"Enter sector"} name={"sector"} />
              </>
            )}
            <Button>{shift ? "Go Back" : "Find Vet"}</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
