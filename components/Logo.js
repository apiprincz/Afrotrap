import React from "react";
import Styles from "../styles/Logo.module.css";
// import Image from "next/image";

const Logo = () => {
  return (
    <div className={Styles.Logo}>
      <img src="/afrotrap.png" alt="Picture of the author" />
    </div>
  );
};

export default Logo;
