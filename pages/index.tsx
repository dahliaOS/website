import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Box, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  home: {
    display: "flex",
    minHeight: "100vh",
    maxWidth: "100vw",
    alignItems: "center",
    marginTop: "-60px",
  },
  homeHeader: {
    fontSize: "2.5em",
    display: "block",
    marginBottom: 10,
  },
  homeParagraph: {
    display: "block",
    fontSize: "1.8em",
    maxWidth: "50ch",
    marginTop: 0,
  },
  typography: {
    flex: "50%",
    paddingLeft: 50,
  },
  homeHero: {
    flex: "50%",
  },
  heroImg: {
    width: "100%",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box className={classes.home}>
        <div className={classes.typography}>
          <h1 className={classes.homeHeader}>something new</h1>
          <p className={classes.homeParagraph}>
            dahliaOS is a modern, secure, lightweight and responsive operating
            system, combining the best of GNU/Linux and Fuchsia OS.
          </p>
        </div>
        <div className={classes.homeHero}>
          <img className={classes.heroImg} src='/img/mockups/hero.png' />
        </div>
      </Box>
      <Footer />
    </div>
  );
}
