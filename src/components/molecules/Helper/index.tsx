import React, { useEffect, useState } from "react";
import FloatingInput from "../../atoms/FloatingInput";
import Button from "../../atoms/Button";
import style from "./index.module.scss";
import Modal from "../../atoms/Modal";
import { fetchResult } from "@/src/utils/fetchApi";

const Helper = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = { location: formData.get("location") };

    fetchResult(
      "https://fordoggoz.pythonanywhere.com/nearest-people",
      payload
    ).then((res) => {
      setPeopleData(res);
      setOpen(true);
    });
  };

  useEffect(() => {
    console.log(peopleData);
  }, [peopleData]);

  return (
    <>
      <div className={style.helperSection}>
        <h2
          dangerouslySetInnerHTML={{
            __html: `Find Trusted <span>Dog Helpers</span> Near You: Your Furry Friend's
        <span> Best Companion</span> Awaits!`,
          }}
        />
        <form onSubmit={handleSubmit} className={style.inputSection}>
          <FloatingInput label={"Enter your location"} name={"location"} />
          <Button type={"submit"}>Search</Button>
        </form>
      </div>
      <Modal show={open} hide={() => setOpen(false)} close={"/svg/close.svg"}>
        <div className={style.modalContainer}>
          <h2>Nearest helper</h2>
          {peopleData.length > 0 ? (
            <div className={style.table}>
              <table>
                <thead>
                  {Object.keys(peopleData?.[0]).map((head: any) => (
                    <td key={head}>{head}</td>
                  ))}
                </thead>
                <tbody>
                  {peopleData?.map((item: any, index: number) => (
                    <tr key={index}>
                      {Object.values(item)?.map((data: any) => (
                        <td key={data}>{data}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No nearest helper</p>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Helper;
