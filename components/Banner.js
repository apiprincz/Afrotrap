import React from "react";
import Slider from "./Slider";
import Styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={Styles.Banner}>
      <Slider />
    </div>
  );
};

export default Banner;
