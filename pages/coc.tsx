import { Footer, Navbar } from "../components/index";
import coc from "../CODE_OF_CONDUCT.md";
import { Box, Theme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    fontSize: "2.2em",
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: "center",
  },
  container: {
    width: "90%",
    maxWidth: 500,
    margin: "0 auto",
    textAlign: "left",
    fontSize: "1em",
  },
  pre: {
    whiteSpace: "pre-wrap",
  },
}));

export default function download() {
  const classes = useStyles();

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
