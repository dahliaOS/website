import { makeStyles, Theme } from "@material-ui/core";

export const cocPage = makeStyles((theme: Theme) => ({
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
