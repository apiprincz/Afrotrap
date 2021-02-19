import React from "react";
import Link from "next/link";
import Styles from "../styles/Headline.module.css";

export const BtnBuy = () => {
  return (
    <>
      <Link href="/collections">
        <button
          className={`btn btn-outline-dark btn-sm m-auto ${Styles.BtnBuy}`}
        >
          Buy Now
        </button>
      </Link>
    </>
  );
};
export const BtnExclusive = () => {
  return (
    <>
      <Link href="/collections">
        <button className=" btn btn-outline-dark btn-lg fs-1  m-auto">
          Exclusive
        </button>
      </Link>
    </>
  );
};
