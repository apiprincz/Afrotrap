import React, { useEffect } from "react";
import Head from "next/head";
import IndexLayout from "../Layouts";
import Headline from "../components/Headline";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Container from "../components/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Afrotrap</title>
        <link rel="icon" href="" />
      </Head>
      <IndexLayout>
        <Container></Container>
        <Content></Content>
      </IndexLayout>
    </>
  );
}
