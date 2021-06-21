import { Navbar, Download, NewsPill, Footer } from "../components/index";
import {
  Box,
  Button,
  makeStyles,
  Theme,
  Link,
  Typography,
} from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import Head from "next/head";

const useStyles = makeStyles((theme: Theme) => ({
  half: {
    position: "relative",
    display: "flex",
    minHeight: "65vh",
    maxWidth: "100vw",
    alignItems: "center",
  },
  home: {
    alignItems: "center",
    marginTop: "-60px",
  },
  homeHeader: {
    fontSize: "3.5em",
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: "Sulphur Point, sans-serif",
    display: "block",
    marginTop: 10,
    marginBottom: 5,
  },
  homeParagraph: {
    display: "block",
    fontSize: "1.8em",
    fontWeight: theme.typography.fontWeightLight,
    maxWidth: "50ch",
    marginTop: 0,
  },
  typography: {
    flex: "50%",
    paddingLeft: 50,
  },
  left: {
    flex: "50%",
  },
  right: {
    flex: "50%",
  },
  homeHero: {
    flex: "50%",
  },
  heroImg: {
    width: "100%",
  },
  topicBtns: {
    display: "inline-block",
    margin: "15px 0 0 50px",
  },
  btnContainer: {
    display: "inline-block",
  },
  gradientBtn: {
    padding: "8px 12px",
    borderRadius: 5,
    "&:first-child": {
      background: `linear-gradient(153deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`,
      marginRight: 15,
    },
    "&:nth-child(2)": {
      border: `${theme.palette.secondary.light} solid 2px`,
    },
  },
  sectionTitle: {
    textAlign: "center",
    fontFamily: "Sulphur Point, sans-serif",
    fontSize: "2.8em",
    fontWeight: theme.typography.fontWeightMedium,
  },
  wave: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  alignLeft: {
    textAlign: "left",
    paddingLeft: 50,
  },
  sectionParagraph: {
    paddingLeft: 50,
    fontWeight: theme.typography.fontWeightLight,
    fontSize: "1.3em",
    maxWidth: "75ch",
  },
  moreUpdates: {
    display: "block",
    textAlign: "center",
    marginBottom: 50,
    "& *": {
      verticalAlign: "middle",
      textAlign: "center",
      fontSize: "1.25em",
      display: "inline-block",
      marginLeft: 10,
    },
  },
  centerMore: {
    color: theme.palette.grey[600],
    transition: `${theme.transitions.easing.easeInOut} 0.229s`,
    "&:hover": {
      color: theme.palette.grey[300],
      textDecoration: "unset",
    },
  },
  roundedBox: {
    borderRadius: 16,
    margin: "0 50px",
    maxWidth: "100%",
    background: theme.palette.secondary.light,
    overflow: "hidden",
    "& *": {
      maxWidth: "100%",
      marginBottom: "-6px",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>dahliaOS</title>
        <meta property='og:title' content='dahliaOS' key='title' />
      </Head>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Box className={`${classes.home} ${classes.half}`}>
        <div className={classes.typography}>
          <NewsPill />
          <h1 className={classes.homeHeader}>something new</h1>
          <p className={classes.homeParagraph}>
            dahliaOS is a modern, secure, lightweight and responsive operating
            system, combining the best of GNU/Linux and Fuchsia OS.
          </p>
          <div className={classes.btnContainer}>
            <Button href="#download" className={classes.gradientBtn}>Download</Button>
            <Button href='#features' className={classes.gradientBtn}>
              Learn more
            </Button>
          </div>
        </div>
        <div className={classes.homeHero}>
          <img className={classes.heroImg} src='/img/mockups/hero.png' />
        </div>
        <img src='/img/darkWave.svg' className={classes.wave} />
      </Box>

      {/* The basics */}
      <Box className={classes.half} id='features'>
        <div className={classes.left}>
          <h1 className={`${classes.sectionTitle} ${classes.alignLeft}`}>
            Just the basics
          </h1>
          <Typography className={classes.sectionParagraph}>
            dahliaOS keeps things light by only including apps you need, and you
            can add all of your favorites from other operating systems using the
            Containers app. dahliaOS also provides a curated marketplace for
            third-party native Flutter applications, so you can use nearly every
            application within one system!
          </Typography>
          <div className={classes.topicBtns}>
            <Button
              href='https://github.com/dahliaOS/pangolin_desktop/tree/master/lib/applications'
              target='_blank'
              className={classes.gradientBtn}
            >
              Browse applications
            </Button>
          </div>
        </div>
        <div className={classes.right}>
          <Box className={classes.roundedBox}>
            <img src='/img/mockups/apps-4k.webp' />
          </Box>
        </div>
      </Box>

      {/* Supported devices */}
      <Box className={classes.half}>
        <div className={classes.left}>
          <Box className={classes.roundedBox}>
            <img src='/img/mockups/collageTransparent.webp' />
          </Box>
        </div>
        <div className={classes.right}>
          <h1 className={`${classes.sectionTitle} ${classes.alignLeft}`}>
            A wide range of supported devices
          </h1>
          <Typography className={classes.sectionParagraph}>
            dahliaOS provides a fast and stable experience on nearly every
            computer, from a 2004 desktop tower to the latest generation of
            mobile notebooks. Our dual kernel approach allows users with new(er)
            hardware to take advantage of the Zircon Kernel, while maintaining
            support for older devices using the Linux Kernel.
          </Typography>
          <div className={classes.topicBtns}>
            <Button
              href='https://docs.dahliaos.io/#/articles/hardware/supported-devices'
              target='_blank'
              className={classes.gradientBtn}
            >
              View supported devices
            </Button>
          </div>
        </div>
      </Box>

      {/* Still not convinced? */}
      <Box className={classes.half}>
        <div className={classes.left}>
          <h1 className={`${classes.sectionTitle} ${classes.alignLeft}`}>
            Still not convinced?
          </h1>
          <Typography className={classes.sectionParagraph}>
            We offer an online preview of dahliaOS right at your finger tips!
            Explore, create, and more with dahliaOS' web preview to get a taste
            of what it is like!
          </Typography>
          <div className={classes.topicBtns}>
            <Button
              href='https://web.dahliaos.io'
              target='_blank'
              className={classes.gradientBtn}
            >
              Try it out!
            </Button>
          </div>
        </div>
        <div className={classes.right}>
          <Box className={classes.roundedBox}>
            <img src='/img/mockups/pangolin.png' />
          </Box>
        </div>
      </Box>

      <br />
      <br />
      <br />
      <br />

      {/* Download */}
      <Box id='download'>
        <h1 className={classes.sectionTitle}>Download</h1>
        <Download more={false} />
        <div className={classes.moreUpdates}>
          <Link href='/download' className={classes.centerMore}>
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
