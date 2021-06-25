import { makeStyles, Theme } from "@material-ui/core";

export const donatePage = makeStyles((theme: Theme) => ({
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
    background: `linear-gradient(153deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`,
  },
}));
