import { Footer, Navbar } from "../components/index";
import { Box, makeStyles, Theme, Typography, Button } from "@material-ui/core";

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
    fontSize: "1.2em",
  },
  btn: {
    display: "block",
    margin: "0 auto",
    background: `linear-gradient(153deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`,
  },
}));

export default function download() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Box minHeight={"100vh"}>
        <h1 className={classes.header}>Donate to dahliaOS</h1>
        <div className={classes.container}>
          <Typography>
            Thank you for your support! We use donations to keep improving our
            project and hardware support, and donations will go towards the
            following:
          </Typography>
          <ul>
            <li>Website hosting</li>
            <li>Web domains</li>
            <li>Development software licenses</li>
            <li>Devices for testing and expanding hardware support</li>
          </ul>
          <h2>Where can I donate?</h2>
          <p>
            Currently, donations can be sent through Paypal, other services will
            be coming soon.
          </p>
          <Button className={classes.btn}>OPENCOLLECTIVE</Button>
        </div>
      </Box>
      <Footer />
    </div>
  );
}
