import React from "react";

import { Footer, Navbar } from "../components/index";
import { Box, Typography, Button } from "@material-ui/core";
import { donatePage } from "../styles/index";

export default function download(): JSX.Element {
  const classes = donatePage();

  return (
    <div>
      <Navbar />
      <Box minHeight={"100vh"}>
        <h1 className={classes.header}>Donate to dahliaOS</h1>
        <div className={classes.container}>
          <Typography>
            Thank you for your support! We use donations to keep improving our project and hardware support, and
            donations will go towards the following:
          </Typography>
          <ul>
            <li>Website hosting</li>
            <li>Web domains</li>
            <li>Development software licenses</li>
            <li>Devices for testing and expanding hardware support</li>
          </ul>
          <h2>Where can I donate?</h2>
          <p>Currently, donations can be sent through Paypal, other services will be coming soon.</p>
          <Button className={classes.btn} href="https://opencollective.com/dahliaos" target="_blank">
            OPENCOLLECTIVE
          </Button>
        </div>
      </Box>
      <Footer />
    </div>
  );
}
