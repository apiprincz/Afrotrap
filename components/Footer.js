import React from "react";
import SocialHandle from "./SocialHandle";
import Logo from "./Logo";
import Styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={`text-center ${Styles.Footer}`}>
      <Logo />
      <div>
        <span>Suite 8 Forest Lane, Nigeria, Africa</span>
        &nbsp; &nbsp; &nbsp;
        <span>08037056611</span>
      </div>
      &nbsp;
      <p>Afrotrap@gmail.com</p>
      <p style={{ color: "red" }}>Socialize with us</p>
      <div className={Styles.Social}>
        <SocialHandle />
      </div>
    </div>
  );
};

export default Footer;
