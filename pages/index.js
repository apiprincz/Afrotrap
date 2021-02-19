import { useEffect } from "react";
import Head from "next/head";
import IndexLayout from "../Layouts";
import Headline from "../components/Headline";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Afrotrap</title>
        <link rel="icon" href="" />
      </Head>
      <IndexLayout>
        <Headline></Headline>
      </IndexLayout>
      <Content></Content>
      <Footer />
    </>
  );
}
