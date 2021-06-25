import { makeStyles, Theme } from "@material-ui/core";

export const downloadPage = makeStyles((theme: Theme) => ({
  title: {
    margin: "1em 0 1.5em 0",
    textAlign: "center",
    fontSize: "2.25em",
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
