import React from "react";
import { Footer, Navbar } from "../components/index";
import { Box, Typography, Button, Link } from "@material-ui/core";
import { fuchsiaPage } from "../styles/index";

export default function fuchsia(): JSX.Element {
  const classes = fuchsiaPage();

  return (
    <div>
      <Navbar />
      <Box minHeight={"100vh"}>
        <h1 className={classes.header}>Download Fuchsia OS (image + emulator) (Unofficial)</h1>
        <div className={classes.container}>
          <Typography>
            This is a stock (non-dahliaOS) Fuchsia image with the emulator included, designed to run on nearly any Linux
            machine. You will need at least 4GB of RAM and NaN of storage space in order to run the VM. The image can
            also be extracted and run on hardware using an external drive. Fuchsia is still far from beta so this image
            and software is for testing purposes only. This image is compiled by the dahliaOS team and is neither
            endorsed nor approved of by Google. Fuchsia is licensed under the ⠀
            <Link href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">
              Apache 2.0 License
            </Link>
          </Typography>
          <br />
          <Button className={classes.btn} href="/download">
            Download now
          </Button>
        </div>
      </Box>
      <Footer />
    </div>
  );
}
