import { Footer, Navbar, Download } from "../components/index";
import { Theme, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    margin: "1em 0 1.5em 0",
    textAlign: "center",
    fontSize: "2.25em",
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function download() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Box minHeight={"100vh"}>
        <h1 className={classes.title}>Downloads</h1>
        <Download more={true} />
        <br />
        <br />
        <br />
      </Box>
      <Footer />
    </div>
  );
}
