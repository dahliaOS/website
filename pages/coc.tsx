import React from "react";
import { Footer, Navbar } from "../components/index";
import coc from "../CODE_OF_CONDUCT.md";
import { Box } from "@material-ui/core";
import { cocPage } from "../styles/index";

export default function download(): JSX.Element {
  const classes = cocPage();

  return (
    <div>
      <Navbar />
      <Box>
        <h1 className={classes.header}>Code of Conduct</h1>
        <div className={classes.container}>
          <p className={classes.pre}>{coc}</p>
        </div>
      </Box>
      <Footer />
    </div>
  );
}
