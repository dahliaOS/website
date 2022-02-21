import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>dahliaOS – Home</title>
        <meta property="og:title" content="dahliaOS" key="title" />
      </Head>
      <Navbar rootPageHasAnimation />
      <Intro />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
