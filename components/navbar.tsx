import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  useScrollTrigger,
  Toolbar,
  AppBar,
  IconButton,
} from "@material-ui/core";

import { Drawer } from "./Drawer";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLogo: {
    height: 28,
    filter: "brightness(0) invert(1)",
  },
  appBar: {
    boxShadow: "unset",
  },
  appBarScrolled: {
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
}));

export const Navbar = (): JSX.Element => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <div className={classes.root}>
      <AppBar
        color='secondary'
        position='fixed'
        className={`${classes.appBar} ${
          trigger === false ? "" : classes.appBarScrolled
        }`}
      >
        <Drawer />
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <img className={classes.navLogo} src='/img/logo-color.png' />
        </Toolbar>
      </AppBar>
    </div>
  );
};
