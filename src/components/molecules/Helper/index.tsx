import React, { useState } from "react";
import FloatingInput from "../../atoms/FloatingInput";
import Button from "../../atoms/Button";
import style from "./index.module.scss";
import Modal from "../../atoms/Modal";
import { fetchResult } from "@/src/utils/fetchApi";

const Helper = (props: any) => {
  const { helperData } = props;

  const [peopleData, setPeopleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      location: formData.get(helperData?.form?.inputField?.name),
    };

    fetchResult(
      "https://fordoggoz.pythonanywhere.com/nearest-people",
      payload
    ).then((res) => {
      setPeopleData(res);
      setOpen(true);
      setLoading(false);
    });
  };

  return (
    <>
      <div className={style.helperSection} id="helper">
        <h2
          dangerouslySetInnerHTML={{
            __html: helperData?.heading,
          }}
        />
        <form onSubmit={handleSubmit} className={style.inputSection}>
          <FloatingInput
            label={helperData?.form?.inputField?.label}
            name={helperData?.form?.inputField?.name}
          />
          <Button loading={loading} type="submit">
            {helperData?.form?.btnText}
          </Button>
        </form>
      </div>
      <Modal
        show={open}
        hide={() => setOpen(false)}
        close={helperData?.closeBtn}
      >
        <div className={style.modalContainer}>
          <h2>{helperData?.modalHeading}</h2>
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
            <p>{helperData?.errorMsg}</p>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Helper;
