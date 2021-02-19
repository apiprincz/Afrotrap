import Head from "next/head";
import Navbar from "../components/Navbar";
import Styles from "../styles/Navbar.module.css";
import Banner from "../components/Banner";

export default function IndexLayout({ children }) {
  return (
    <div className={`${Styles.Layout}`}>
      <Head>
        <title>Afrotrap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container-fluid p-0">
        <div
          className="d-flex"
          style={{
            overflow: "hidden",
            height: "100vh",
            background: "#F0F5F9",
          }}
        >
          <div className="flex-fill col-md-5">{children}</div>
          <div
            className="d-flex flex-fill col-md-7"
            style={{ flexDirection: "column" }}
          >
            <Navbar />

            <Banner />
          </div>
        </div>
      </main>
    </div>
  );
}
