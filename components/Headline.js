import React from "react";
import Image from "next/image";
import Styles from "../styles/Headline.module.css";
import { BtnBuy } from "./Button";
import Logo from "./Logo";

const Headline = () => {
  return (
    <div className={` ${Styles.Headline}`}>
      <Logo />
      <div className={`d-flex justify-content-around ${Styles.mid}`}>
        <div>
          <h1 className={Styles.hero}>Style Your Style</h1>
          <p className={Styles.para}>
            Define your style with our exclusive original crafted designs
          </p>
        </div>
        <BtnBuy></BtnBuy>
      </div>
    </div>
  );
};

export default Headline;
