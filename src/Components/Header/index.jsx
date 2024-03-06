import React from "react";
import styles from "./styles.module.css";
import menuItemsTitles from "../../sources/menuItemsTitles.js";
import MenuItem from "../MenuItem/index.jsx"

const Header = () => {
  return (
    <header className={styles.header}>
      {menuItemsTitles.map((title, index) => {
        return <MenuItem key={index} title={title} />;
      })}
    </header>
  );
};

export default Header;
