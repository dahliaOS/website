import React from "react";
import { Footer, Navbar, Download } from "../components/index";
import { Box } from "@material-ui/core";
import { downloadPage } from "../styles/index";

export default function download(): JSX.Element {
  const classes = downloadPage();

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Box minHeight={"100vh"}>
        <h1 className={classes.title}>Downloads</h1>
        <Download more={true} />
      </Box>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
