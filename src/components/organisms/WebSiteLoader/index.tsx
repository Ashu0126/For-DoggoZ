import { useEffect, useState } from "react";
import style from "./index.module.scss";

const WebSiteLoader = (props: any) => {
  const { setLoading } = props;
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percent < 100) {
        setPercent((prevPercent) => prevPercent + 1);
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [percent, setLoading]);

  return (
    <div className={style.loader}>
      <h1>{`${percent}%`}</h1>
    </div>
  );
};

export default WebSiteLoader;
