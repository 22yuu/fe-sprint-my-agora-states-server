import React from "react";
import ReactLoading from "react-loading";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <ReactLoading type="spin" />
    </div>
  );
};

export default Loader;
