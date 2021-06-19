import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Link,
  Divider,
  Theme,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 400,
    margin: "0 auto",
    background: theme.palette.secondary.light,
    boxShadow: theme.shadows[10],
    marginBottom: 100,
    borderRadius: 8,
  },
  title: {
    position: "relative",
    textAlign: "center",
  },
  cardTitle: {
    display: "inline-block",
    textAlign: "center",
    fontSize: "2em",
  },
  infoIcon: {
    display: "inline-block",
    position: "absolute",
    cursor: "pointer",
    fontSize: "2em",
    right: 10,
    top: 7,
  },
  cardInfo: {
    fontSize: "1em",
  },
  cardLink: {
    display: "block",
    position: "relative",
  },
  cardMore: {
    right: 0,
    color: theme.palette.grey[600],
    position: "absolute",
    transition: `${theme.transitions.easing.easeInOut} 0.229s`,

    "&:hover": {
      color: theme.palette.grey[400],
    },
  },
  btns: {
    display: "block",
    textAlign: "center",
  },
  divider: {
    marginTop: 32,
  },
  downloadBtn: {
    color: theme.palette.primary.light,
    border: `${theme.palette.secondary.light} solid 2px`,
  },
}));

export const Download = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.title}>
          <Typography className={classes.cardTitle}>Latest</Typography>
          <Tooltip title='Version deez'>
            <InfoIcon className={classes.infoIcon} />
          </Tooltip>
        </div>
        <p className={classes.cardInfo}>
          + Added a new Files app! You can now browse files and create folders
          with ease!
          <br />+ Added a new WIP Clock App, for managing timers and seeing the
          time <br />+ Modified the behavior for tiling windows, now just
          long-press on Maximize and drag the...
        </p>
        <Link href='' className={classes.cardLink}>
          <Button className={classes.cardMore}>Read more</Button>
        </Link>
      </CardContent>
      <Divider className={classes.divider} />
      <CardActions className={classes.btns}>
        <Button className={classes.downloadBtn}>Download (EFI)</Button>
        <Button className={classes.downloadBtn}>Download (Legacy)</Button>
      </CardActions>
    </Card>
  );
};
