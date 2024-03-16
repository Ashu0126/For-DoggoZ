"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

const SelectDropDown = (props: any) => {
  const { options, label } = props;
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);

  const handleClickOutside = (event: any) => {
    const dropdown = document.querySelector(`.${styles.selectDropDown}`);
    if (dropdown && !dropdown.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
                setOpen(false);
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
