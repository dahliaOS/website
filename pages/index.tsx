import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Box, Button, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  home: {
    display: "flex",
    minHeight: "100vh",
    maxWidth: "100vw",
    alignItems: "center",
    marginTop: "-60px",
  },
  homeHeader: {
    fontSize: "3.5em",
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: "Sulphur Point, sans-serif",
    display: "block",
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
  homeHero: {
    flex: "50%",
  },
  heroImg: {
    width: "100%",
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
          <div className={classes.btnContainer}>
            <Button className={classes.gradientBtn}>Download</Button>
            <Button className={classes.gradientBtn}>Learn more</Button>
          </div>
        </div>
        <div className={classes.homeHero}>
          <img className={classes.heroImg} src='/img/mockups/hero.png' />
        </div>
      </Box>
      <Footer />
    </div>
  );
}
