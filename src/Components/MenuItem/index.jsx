import React from "react";
import styles from "./styles.module.css";

const MenuItem = ({ title }) => {
  return <button className={styles.menuItem}>{title}</button>;
};

export default MenuItem;
