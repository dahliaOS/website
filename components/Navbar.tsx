import { Menu as MenuIcon, MoreVert as MoreVertIcon } from "@material-ui/icons";
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
  Menu,
  MenuItem,
  Divider,
} from "@material-ui/core";

import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  "root": {
    position: "fixed",
    zIndex: 2,
    width: "100%",
    top: 0,
    flexGrow: 1,
    background: theme.palette.secondary.main,
    transform: "translateY(-66px)",
    animation: "$animateRoot 1s cubic-bezier(0.66, 0, 0.2, 1) 0.183s forwards",
    animationDelay: "2s",
  },
  "menuButton": {
    marginRight: theme.spacing(2),
  },
  "navLogo": {
    height: 28,
    filter: "brightness(0) invert(1)",
  },
  "appBar": {
    boxShadow: "unset",
  },
  "appBarScrolled": {
    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
  "paper": {
    background: theme.palette.secondary.main,
  },
  "drawerTitle": {
    position: "relative",
    paddingTop: 160,
    height: 160,
    width: 230,
    background: theme.palette.primary.main,
  },
  "drawerLogo": {
    position: "absolute",
    height: 28,
    bottom: 16,
    paddingLeft: 40,
  },
  "drawerLink": {
    "display": "block",
    "fontSize": ".93rem",
    "padding": "16px 40px",
    "color": theme.palette.grey[600],
    "transition": `${theme.transitions.easing.easeInOut} 0.229s`,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.grey[300],
      background: theme.palette.secondary.light,
    },
  },
  "category": {
    "color": theme.palette.primary.light,
    "&:hover": {
      textDecoration: "none",
      cursor: "unset",
      color: theme.palette.primary.light,
      background: "unset",
    },
  },
  "desktopNav": {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "flex-end",
      flexGrow: 1,
    },
  },
  "navLink": {
    "fontSize": ".9em",
    "fontWeight": theme.typography.fontWeightBold,
    "padding": "0 16px",
    "display": "inline-block",
    "lineHeight": "50px",
    "textTransform": "uppercase",
    "color": theme.palette.grey[50],
    "borderBottom": "4px solid transparent",
    "transition": `${theme.transitions.easing.easeInOut} 0.229s`,
    "&:hover": {
      color: theme.palette.grey[400],
      textDecoration: "none",
      borderBottom: `4px solid ${theme.palette.primary.main}`,
    },
  },
  "removeLinkStyling": {
    "color": "unset",
    "&:hover": {
      textDecoration: "unset",
    },
  },
  "@keyframes animateRoot": {
    "0%": {
      transform: "translateY(-66px)",
      opacity: 0,
    },
    "100%": {
      transform: "translateY(0px)",
      opacity: 1,
    },
  },
}));

export const Navbar = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState({ left: false });
  const [navVertIcon, setNavVertIcon] = useState<null | HTMLElement>(null);
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const toggleDrawer = (open: boolean) => () => setOpenDrawer({ ...openDrawer, ["left"]: open });

  const toggleVertIcon = (event: React.MouseEvent<HTMLButtonElement>) => setNavVertIcon(event.currentTarget);
  const closeVertIcon = () => setNavVertIcon(null);

  return (
    <div className={classes.root}>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor={"left"}
        open={openDrawer["left"]}
        onClose={toggleDrawer(false)}
      >
        <div className={classes.drawerTitle}>
          <img className={classes.drawerLogo} src="/img/logo-white.png" />
        </div>
        <br />
        <Typography>
          <Link href="/#features" className={classes.drawerLink}>
            Features
          </Link>
          <Link href="#" className={classes.drawerLink}>
            News
          </Link>
          <Link href="/download" className={classes.drawerLink}>
            Download
          </Link>
          <Link href="mailto:contact@dahliaOS.io" className={classes.drawerLink}>
            Contact
          </Link>
          <Link href="https://github.com/orgs/dahliaos/people" target="_blank" className={classes.drawerLink}>
            Developers
          </Link>
          <Link href="https://docs.dahliaOS.io" className={classes.drawerLink}>
            Documentation
          </Link>
          <Divider />
          <span className={`${classes.category} ${classes.drawerLink}`}>Find us on</span>
          <Link href="/discord" target="_blank" className={classes.drawerLink}>
            Discord
          </Link>
          <Link href="/github" target="_blank" className={classes.drawerLink}>
            GitHub
          </Link>
          <Link href="/reddit" target="_blank" className={classes.drawerLink}>
            Reddit
          </Link>
          <Link href="/telegram" target="_blank" className={classes.drawerLink}>
            Telegram
          </Link>
          <Link href="/facebook" target="_blank" className={classes.drawerLink}>
            Facebook
          </Link>
          <Link href="/instagram" target="_blank" className={classes.drawerLink}>
            Instagram
          </Link>
          <Link href="/twitter" target="_blank" className={classes.drawerLink}>
            Twitter
          </Link>
          <Divider />
          <span className={`${classes.category} ${classes.drawerLink}`}>For developers</span>
          <Link href="/github" className={classes.drawerLink}>
            Source Code
          </Link>
          <Link href="/discord" className={classes.drawerLink}>
            Join Our Team
          </Link>
        </Typography>
      </Drawer>
      <AppBar
        color="secondary"
        position="fixed"
        /* This code helps put that shadow under the navbar when scrolled */
        className={`${classes.appBar} ${!trigger ? "" : classes.appBarScrolled}`}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link className={classes.navLogo} href="/">
            <img className={classes.navLogo} src="/img/logo-color.png" />
          </Link>
          <div className={classes.desktopNav}>
            <Typography>
              <Link className={classes.navLink} href="/#features">
                Features
              </Link>
              <Link className={classes.navLink} href="#">
                News
              </Link>
              <Link className={classes.navLink} href="/download">
                Download
              </Link>
              <Link className={classes.navLink} href="https://web.dahliaOS.io" target="_blank">
                Demo
              </Link>
              <Link className={classes.navLink} href="https://github.com/orgs/dahliaos/people" target="_blank">
                Developers
              </Link>
              <Link className={classes.navLink} href="https://docs.dahliaOS.io">
                Documentation
              </Link>
            </Typography>
            <IconButton aria-label="more" aria-controls="nav-menu" aria-haspopup="true" onClick={toggleVertIcon}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="nav-menu"
              anchorEl={navVertIcon}
              keepMounted
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              open={Boolean(navVertIcon)}
              onClose={closeVertIcon}
            >
              <MenuItem onClick={closeVertIcon}>
                <Link className={classes.removeLinkStyling} href="/github" target="_blank">
                  Source Code
                </Link>
              </MenuItem>
              <MenuItem onClick={closeVertIcon} disabled>
                Screenshots
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};