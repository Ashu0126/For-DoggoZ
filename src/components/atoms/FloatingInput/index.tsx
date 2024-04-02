"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

const FloatingInput = (props: any) => {
  const { label, type = "text", name } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState("");

  const handleClickOutside = (event: any) => {
    if (!event.target.closest("input")) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.floatingLabel}>
      <input
        type={type}
        name={name}
        id={name}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label htmlFor={name} className={isFocused || input ? styles.active : ""}>
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
