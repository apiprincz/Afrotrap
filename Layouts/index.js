import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { NavbarMobile } from "../components/Navbar";
import { useWindowResize } from "../components/Utils/WindowResize";
import Styles from "../styles/Navbar.module.css";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export default function IndexLayout({ children }) {
  const { width } = useWindowResize();
  const breakpoint = 760;
  const bar = () => {
    console.log(width);
  };
  bar();

  return (
    <div className={`${Styles.Layout}`}>
      <Head>
        <title>Afrotrap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-fluid p-0">
        <div
          className={`d-flex`}
          style={{
            background: "#F0F5F9",
          }}
        >
          <div
            className="col-md-12"
            style={{ flexDirection: "column", width: "100%" }}
          >
            {width < breakpoint ? <NavbarMobile /> : <Navbar />}

            {children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
