import React from "react";
import styles from "./styles.module.css";
import logoImg from "../../images/React_Logo_SVG.png"
const Logo = () => {
  return (<div className={styles.logo}>
    <img className={styles.logoImg} src={logoImg} alt="logo" />
  </div>);
};

export default Logo;
