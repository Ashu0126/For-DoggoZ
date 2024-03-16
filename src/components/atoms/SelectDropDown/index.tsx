"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";

const SelectDropDown = (props: any) => {
  const { options, label } = props;
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.selectDropDown}>
      <label className={`${selected && styles.active}`}>{label}</label>
      <div className={styles.select} onClick={() => setOpen(!open)}>
        {selected}
      </div>
      {open && (
        <ul>
          {options?.map((option: any) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(!open);
              }}
              className={selected === option ? styles.selected : ""}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectDropDown;
