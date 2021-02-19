import React from "react";
import Link from "next/link";
import Styles from "../styles/Navbar.module.css";

const SocialHandle = () => {
  return (
    <div className={`flex-fill col-md-4 d-flex mx-auto ${Styles.Social}`}>
      <Link href="#">
        <i className={`fab fa-facebook-f ${Styles.fab}`}></i>
      </Link>
      <Link href="#">
        <i class={`fab fa-instagram ${Styles.fab}`}></i>
      </Link>
      <Link href="#">
        <i class={`fab fa-twitter ${Styles.fab}`}></i>
      </Link>
      <Link href="#">
        <i class={`fab fa-linkedin-in ${Styles.fab}`}></i>
      </Link>
    </div>
  );
};

export default SocialHandle;
