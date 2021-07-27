import React from "react";
import Head from "next/head";
import { Navbar, Download, NewsPill, Footer, Intro } from "../components/index";
import { Box, Button, Link, Typography } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import { indexPage } from "../styles";

export default function Home(): JSX.Element {
  const classes = indexPage();
  return (
    <div>
      <Head>
        <title>dahliaOS</title>
        <meta property="og:title" content="dahliaOS" key="title" />
      </Head>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Intro />
      {/*       <Box className={`${classes.home} ${classes.half}`}>
        <div className={classes.typography}>
          <NewsPill />
          <h1 className={classes.homeHeader}>something new</h1>
          <p className={classes.homeParagraph}>
            dahliaOS is a modern, secure, lightweight and responsive operating system, combining the best of GNU/Linux
            and Fuchsia OS.
          </p>
          <div className={classes.btnContainer}>
            <Button href="#download" className={classes.gradientBtn}>
              Download
            </Button>
            <Button href="#features" className={classes.gradientBtn}>
              Learn more
            </Button>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={classes.homeHero}>
          <img className={classes.heroImg} src="/img/mockups/hero.png" />
        </div>
        <img src="/img/darkWave.svg" className={classes.wave} />
      </Box> */}

      {/* The basics */}
      <Box className={classes.half} id="features">
        <div data-aos="fade-up" data-aos-delay="100" className={classes.left}>
          <h1 className={`${classes.sectionTitle} ${classes.alignLeft}`}>Just the basics</h1>
          <Typography className={classes.sectionParagraph}>
            dahliaOS keeps things light by only including apps you need, and you can add all of your favorites from
            other operating systems using the Containers app. dahliaOS also provides a curated marketplace for
            third-party native Flutter applications, so you can use nearly every application within one system!
          </Typography>
          <div className={classes.topicBtns}>
            <Button
              href="https://github.com/dahliaOS/pangolin_desktop/tree/master/lib/applications"
              target="_blank"
              className={classes.gradientBtn}
            >
              Browse applications
            </Button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="180"
          className={classes.right}
        >
          <Box className={classes.roundedBox}>
            <img src="/img/mockups/apps-4k.webp" />
          </Box>
        </div>
      </Box>

      {/* Supported devices */}
      <Box className={classes.half}>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="180" className={classes.left}>
          <Box className={classes.roundedBox}>
            <img src="/img/mockups/collageTransparent.webp" />
          </Box>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className={classes.right}>
          <h1 className={`${classes.sectionTitle} ${classes.alignLeft}`}>A wide range of supported devices</h1>
          <Typography className={classes.sectionParagraph}>
            dahliaOS provides a fast and stable experience on nearly every computer, from a 2004 desktop tower to the
            latest generation of mobile notebooks. Our dual kernel approach allows users with new(er) hardware to take
            advantage of the Zircon Kernel, while maintaining support for older devices using the Linux Kernel.
          </Typography>
          <div className={classes.topicBtns}>
            <Button
              href="https://docs.dahliaos.io/#/articles/hardware/supported-devices"
              target="_blank"
              className={classes.gradientBtn}
            >
              View supported devices
            </Button>
          </div>
        </div>
      </Box>

      {/* Still not convinced? */}
      <Box className={classes.half}>
        <div data-aos="fade-up" data-aos-delay="100" className={classes.left}>
          <h1 className={`${classes.sectionTitle} ${classes.alignLeft}`}>Still not convinced?</h1>
          <Typography className={classes.sectionParagraph}>
            We offer an online preview of dahliaOS right at your finger tips! Explore, create, and more with
            dahliaOS&apos; web preview to get a taste of what it is like!
          </Typography>
          <div className={classes.topicBtns}>
            <Button href="https://web.dahliaos.io" target="_blank" className={classes.gradientBtn}>
              Try it out!
            </Button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="180"
          className={classes.right}
        >
          <Box className={classes.roundedBox}>
            <img src="/img/mockups/pangolin.png" />
          </Box>
        </div>
      </Box>

      <br />
      <br />
      <br />
      <br />

      {/* Download */}
      <Box id="download">
        <h1 className={classes.sectionTitle}>Download</h1>
        <Download more={false} />
        <br />
        <br />
        <div className={classes.moreUpdates}>
          <Link href="https://github.com/dahliaOS/releases/releases" className={classes.centerMore}>
            Looking for an older update?
            <ArrowForwardIos />
          </Link>
        </div>
      </Box>

      <br />
      <br />
      <br />
      <br />

      {/* Footer */}
      <Footer />
    </div>
  );
}
