import MenuIcon from "@material-ui/icons/Menu";
import {
  useScrollTrigger,
  Toolbar,
  AppBar,
  IconButton,
  makeStyles,
  Drawer,
  Link,
  Theme,
  Typography,
} from "@material-ui/core";

import { useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.secondary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
  paper: {
    background: theme.palette.secondary.main,
  },
  drawerTitle: {
    position: "relative",
    paddingTop: "160px",
    height: "160px",
    width: "230px",
    background: theme.palette.primary.main,
  },
  drawerLogo: {
    position: "absolute",
    height: "28px",
    bottom: "16px",
    paddingLeft: "40px",
  },
  drawerLink: {
    display: "block",
    fontSize: ".93rem",
    padding: "16px 40px",
    color: theme.palette.grey[600],
    transition: `${theme.transitions.easing.easeInOut} 0.229s`,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.grey[300],
      background: theme.palette.secondary.light,
    },
  },
  categorySeperator: {
    height: "1px",
    background: theme.palette.secondary.light,
    margin: "8px 0",
  },
  category: {
    color: theme.palette.primary.light,
    "&:hover": {
      textDecoration: "none",
      cursor: "unset",
      color: theme.palette.primary.light,
      background: "unset",
    },
  },
  desktopNav: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "flex-end",
      flexGrow: 1,
    },
  },
  navLink: {
    fontSize: ".9em",
    fontWeight: theme.typography.fontWeightBold,
    padding: "0 16px",
    display: "inline-block",
    lineHeight: "50px",
    textTransform: "uppercase",
    color: theme.palette.grey[50],
    borderBottom: "4px solid transparent",
    transition: `${theme.transitions.easing.easeInOut} 0.229s`,
    "&:hover": {
      color: theme.palette.grey[400],
      textDecoration: "none",
      borderBottom: `4px solid ${theme.palette.primary.main}`,
    },
  },
}));

export const Navbar = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState({ left: false });
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const toggleDrawer = (open: boolean) => () =>
    setOpenDrawer({ ...openDrawer, ["left"]: open });

  return (
    <div className={classes.root}>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor={"left"}
        open={openDrawer["left"]}
        onClose={toggleDrawer(false)}
      >
        <div className={classes.drawerTitle}>
          <img className={classes.drawerLogo} src='/img/logo-white.png' />
        </div>
        <br />
        <Typography>
          <Link href='#' className={classes.drawerLink}>
            Features
          </Link>
          <Link href='#' className={classes.drawerLink}>
            News
          </Link>
          <Link href='#' className={classes.drawerLink}>
            Download
          </Link>
          <Link href='#' className={classes.drawerLink}>
            Contact
          </Link>
          <Link href='#' className={classes.drawerLink}>
            Developers
          </Link>
          <Link href='#' className={classes.drawerLink}>
            Documentation
          </Link>
          <div className={classes.categorySeperator} />
          <span className={`${classes.category} ${classes.drawerLink}`}>
            Find us on
          </span>
          <Link href='#' className={classes.drawerLink}>
            Discord
          </Link>
          <Link href='#' className={classes.drawerLink}>
            GitHub
          </Link>
          <Link href='#' className={classes.drawerLink}>
            Reddit
          </Link>
          <Link href='#' className={classes.drawerLink}>
            Telegram
          </Link>
          <Link href='#' className={classes.drawerLink}>
            Facebook
          </Link>
          <Link href='#' className={classes.drawerLink}>
            Instagram
          </Link>
          <Link href='#' className={classes.drawerLink}>
            Twitter
          </Link>
          <div className={classes.categorySeperator} />
          <span className={`${classes.category} ${classes.drawerLink}`}>
            For developers
          </span>
          <Link href='#' className={classes.drawerLink}>
            Source Code
          </Link>
          <Link href='#' className={classes.drawerLink}>
            Join Our Team
          </Link>
        </Typography>
      </Drawer>
      <AppBar
        color='secondary'
        position='fixed'
        /* This code helps put that shadow under the navbar when scrolled */
        className={`${classes.appBar} ${
          !trigger ? "" : classes.appBarScrolled
        }`}
      >
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <img className={classes.navLogo} src='/img/logo-color.png' />
          <div className={classes.desktopNav}>
            <Typography>
              <Link className={classes.navLink} href='#'>
                Features
              </Link>
              <Link className={classes.navLink} href='#'>
                News
              </Link>
              <Link className={classes.navLink} href='#'>
                Download
              </Link>
              <Link className={classes.navLink} href='#'>
                Demo
              </Link>
              <Link className={classes.navLink} href='#'>
                Developers
              </Link>
              <Link className={classes.navLink} href='#'>
                Documentation
              </Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
