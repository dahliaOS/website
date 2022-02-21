import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Intro from "./components/Intro";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>dahliaOS – Home</title>
        <meta property="og:title" content="dahliaOS" key="title" />
      </Head>
      <Intro />
    </React.Fragment>
  );
};

export default Home;
