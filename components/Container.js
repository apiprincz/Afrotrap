import React from "react";
import Headline from "./Headline";
import Banner from "./Banner";
import Styles from "../styles/Container.module.css";
import { useWindowResize } from "../components/Utils/WindowResize";

const Container = () => {
  const { width } = useWindowResize();
  const breakpoint = 760;

  return (
    <div className={`d-flex ${Styles.Container}`}>
      {width > breakpoint ? <Headline /> : ""}
      <Banner />
    </div>
  );
};

export default Container;
