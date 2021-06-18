import { BottomNavigation, makeStyles, Theme, Link } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "auto",
    display: "block",
    padding: "16px 40px",
    background: theme.palette.secondary.dark,
  },
  footerContainer: {
    display: "flex",
  },
  footerCategory: {
    flexGrow: 1,
  },
  footerHeader: {
    color: theme.palette.grey[50],
    fontSize: "1.5em",
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: ".5em",
  },
  footerList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  footerItem: {
    fontSize: "1.15em",
    color: theme.palette.grey[500],
    display: "block",
    transition: `${theme.transitions.easing.easeInOut} 0.209s`,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.grey[300],
    },
  },
  footerLogo: {
    display: "block",
    margin: "0 auto",
    height: 38,
  },
}));

export const Footer = (): JSX.Element => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      <div className={classes.footerContainer}>
        <div className={classes.footerCategory}>
          <h1 className={classes.footerHeader}>Find us on</h1>
          <ul className={classes.footerList}>
            <Link
              href='/discord'
              target='_blank'
              className={classes.footerItem}
            >
              Discord
            </Link>
            <Link href='/github' target='_blank' className={classes.footerItem}>
              GitHub
            </Link>
            <Link href='/reddit' target='_blank' className={classes.footerItem}>
              Reddit
            </Link>
            <Link
              href='/telegram'
              target='_blank'
              className={classes.footerItem}
            >
              Telegram
            </Link>
            <Link
              href='/facebook'
              target='_blank'
              className={classes.footerItem}
            >
              Facebook
            </Link>
            <Link
              href='/instagram'
              target='_blank'
              className={classes.footerItem}
            >
              Instagram
            </Link>
            <Link
              href='/twitter'
              target='_blank'
              className={classes.footerItem}
            >
              Twitter
            </Link>
          </ul>
        </div>
        <div className={classes.footerCategory}>
          <h1 className={classes.footerHeader}>Technology</h1>
          <ul className={classes.footerList}>
            <Link href='#' className={classes.footerItem}>
              How it works
            </Link>
            <Link href='#' className={classes.footerItem}>
              The goal
            </Link>
            <Link href='#' className={classes.footerItem}>
              Design
            </Link>
            <Link href='#' className={classes.footerItem}>
              UI Modularity
            </Link>
          </ul>
        </div>
        <div className={classes.footerCategory}>
          <h1 className={classes.footerHeader}>Documentation</h1>
          <ul className={classes.footerList}>
            <Link href='#' className={classes.footerItem}>
              Compiling
            </Link>
            <Link href='#' className={classes.footerItem}>
              Installing
            </Link>
            <Link href='#' className={classes.footerItem}>
              Running
            </Link>
            <Link href='#' className={classes.footerItem}>
              Supported devices
            </Link>
            <Link href='#' className={classes.footerItem}>
              Linux vs. Zircon
            </Link>
          </ul>
        </div>
        <div className={classes.footerCategory}>
          <h1 className={classes.footerHeader}>FAQ</h1>
          <ul className={classes.footerList}>
            <Link href='#' className={classes.footerItem}>
              Q&A
            </Link>
            <Link href='#' className={classes.footerItem}>
              Contact us
            </Link>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <img className={classes.footerLogo} src='/img/logo-white.png' />
      <br />
    </BottomNavigation>
  );
};
