import React from "react";
import styles from "./styles.module.css";
import Description from "../Description/index.jsx";
import Logo from "../Logo/index.jsx";

const Main = () => {
  return (
    <div className={styles.mainPage}>
      <Description />
      <Logo/>
    </div>
  );
};

export default Main;
