import React from "react";
import { Link, makeStyles, Theme } from "@material-ui/core";
import UpdateIcon from "@material-ui/icons/Update";

const useStyles = makeStyles((theme: Theme) => ({
  removeLinkStyle: {
    color: "unset",
  },
  featured: {
    "verticalAlign": "middle",
    "display": "inline-block",
    "background": theme.palette.secondary.light,
    "padding": "8px 15px",
    "borderRadius": 8,
    "boxShadow": theme.shadows[3],
    "transition": `${theme.transitions.easing.easeInOut} 0.229s`,
    "&:hover": {
      boxShadow: theme.shadows[6],
    },
  },
  verticalCenter: {
    verticalAlign: "middle",
    display: "inline-block",
    marginRight: 10,
  },
}));

export const NewsPill = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Link href="/github" className={classes.removeLinkStyle}>
      <span className={classes.featured}>
        <UpdateIcon className={classes.verticalCenter} /> New version build-201215
      </span>
    </Link>
  );
};
