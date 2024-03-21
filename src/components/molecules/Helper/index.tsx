import React from "react";
import FloatingInput from "../../atoms/FloatingInput";
import Button from "../../atoms/Button";
import style from "./index.module.scss";

const Helper = () => {
  return (
    <div className={style.helperSection}>
      <h2
        dangerouslySetInnerHTML={{
          __html: `Find Trusted <span>Dog Helpers</span> Near You: Your Furry Friend's
        <span> Best Companion</span> Awaits!`,
        }}
      />
      <div className={style.inputSection}>
        <FloatingInput label={"Enter your location"} />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default Helper;
